import { Router } from "express";
import {   loginUser, 
    logoutUser, 
    registerUser, 
    refreshAccessToken, 
    changeCurrentPassword, 
    getCurrentUser, 
    updateUserAvatar, 
    updateUserCoverImage, 
    getUserChannelProfile, 
    getWatchHistory, 
    updateAccountDetails,
    updateUserCoordinates, 
    }
    from "../controllers/worker.controller.js"

import {upload} from "../middlewares/multer.middleware.js"
import { verifyJWTs } from "../middlewares/workerAuth.middleware.js";
const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1,
        },
        {
            name: "coverImage",
            maxCount: 1,
        }
    ]),
    registerUser
)

    router.route("/login").post(loginUser)
 
    // secure routes
    router.route("/logout").post(verifyJWTs, logoutUser)

    router.route("/refresh-token").post(refreshAccessToken)
    router.route("/change-password").post(verifyJWTs, changeCurrentPassword)
router.route("/current-user").get(verifyJWTs, getCurrentUser)
router.route("/update-account").patch(verifyJWTs, updateAccountDetails)
router.route("/update-coordinate").patch(verifyJWTs, updateUserCoordinates);


router.route("/avatar").patch(verifyJWTs, upload.single("avatar"), updateUserAvatar)
router.route("/cover-image").patch(verifyJWTs, upload.single("coverImage"), updateUserCoverImage)

router.route("/c/:username").get(verifyJWTs, getUserChannelProfile)
router.route("/history").get(verifyJWTs, getWatchHistory)
    
export default router