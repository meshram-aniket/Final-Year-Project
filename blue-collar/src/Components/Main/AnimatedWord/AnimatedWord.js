import React from "react";
import Marquee from "react-marquee-slider";
import styled from "styled-components";
import times from "lodash/times";

const Photo = styled.img`
  width: 368px;
  height: 200px;
  border-radius: 4px;
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.12);
  object-fit: cover;
  object-position: top;
`;

const Container = styled.div`
  margin-top: 10px; /* Adjust the top margin as needed */
  margin-bottom: 100px; /* Adjust the bottom margin as needed */
`;
  
// Replace these sample photo URLs with your actual photo URLs
const photos = [
  "https://source.unsplash.com/1600x600/?review-card",
  "https://source.unsplash.com/1600x600/?PestControl",
  "https://source.unsplash.com/1600x600/?Worker",
  "https://source.unsplash.com/1600x600/?labour",
  "https://source.unsplash.com/1600x600/?Electrician",
  "https://source.unsplash.com/1600x600/?labour",
  "https://source.unsplash.com/1600x600/?labour",
  "https://source.unsplash.com/1600x600/?Worker",
  "https://source.unsplash.com/1600x600/?PestControl",
  "https://source.unsplash.com/1600x600/?Painter",
  "https://source.unsplash.com/1600x600/?Electrician",
  "https://source.unsplash.com/1600x600/?Electrician",
  "https://source.unsplash.com/1600x600/?Electrician",
  "https://source.unsplash.com/1600x600/?Electrician",
];

const AnimatedWord = () => (
  <div>
    <Container >
      <div style={{ height: 200 }}>
        <Marquee velocity={25}>
          {photos.slice(0, 7).map((photo, id) => (
            <Photo
              src={photo}
              key={`marquee-example-people-${id}`}
              style={{
                marginLeft: "87px",
                //   marginTop: "100px"
              }}
            />
          ))}
         
        </Marquee>
      </div>

      <div style={{ height: 60 }} />

      <div style={{ height: 200 }}>
        <Marquee velocity={25}>
          {photos.slice(7).map((photo, id) => (
            <Photo
              src={photo}
              key={`marquee-example-people-${id + 7}`}
              style={{
                marginLeft: "7px",
                marginRight: "80px",

              }}
            />
          ))}
        </Marquee>
      </div>
    </Container>
  </div>
);

export default AnimatedWord;
