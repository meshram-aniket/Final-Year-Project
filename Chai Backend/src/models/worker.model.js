import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
const workerSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, 
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true, 
        },
        fullName: {
            type: String,
            required: true,
            trim: true, 
            index: true
        },
        role: {
            type: String,
            required: true,
            trim: true, 
            uppercase: true,
            index: true
        },
        address: {
            type: String,
            required: true,
            trim: true, 
            index: true
        },
        // avatar: {
        //     type: String, // cloudinary url
        //     required: true,
        // },
        coverImage: {
            type: String, // cloudinary url
        },
       
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        location: {
            type: {
                type: String,
                required: true,
                enum: ["Point"],
                default: "Point"
            },
            coordinates: {
                type: [Number],
                default: [0, 0] // Default to empty coordinates (0, 0)
            }
        },
        phone: {
            type: Number,
            required: true
        },

        isActive: {
            type: Boolean,
            default: false
        },

        rating: {
            type: Number,
            default: null
        },

        // watchHistory: [
        //     {
        //         type: Schema.Types.ObjectId,
        //         ref: "Video"
        //     }
        // ],

        refreshToken: {
            type: String
        }

    },
    {
        timestamps: true
    }
)

workerSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

workerSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

workerSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName,
            role: this.role,
            address: this.address
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
workerSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

workerSchema.index({location: "2dsphere"});
export const Worker = mongoose.model("Worker", workerSchema)