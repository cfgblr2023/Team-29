import React, { useState } from "react";
// mui
import { Typography, Box, Stack } from "@mui/material";
// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// components
import Title from "./Title";
import Paragraph from "./Paragraph";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState();

  const imageData = [
    {
      alt: "image1",
      url: "https://st2.depositphotos.com/3591429/5246/i/600/depositphotos_52463201-stock-photo-hands-holding-word-women.jpg",
    },
    {
      alt: "image2",
      url: "https://t3.ftcdn.net/jpg/05/92/51/62/360_F_592516238_AF7eIDYGKm5Y3UYp8Gg8XNsvP5LZb0q0.jpg",
    },
    {
      alt: "image3",
      url: "https://thumbs.dreamstime.com/b/women-empowerment-india-lower-middle-class-family-have-many-burdens-trying-to-overcome-their-economical-problem-77893192.jpg",
    },
    {
      alt: "image4",
      url: "https://www.iahv.org/in-en/wp-content/uploads/2019/01/Woman-Making-Pehyl-Soap-Oil.jpg",
    },
    {
      alt: "image5",
      url: "https://res.cloudinary.com/devex/image/fetch/c_scale,f_auto,q_auto,w_720/http://neo-assets.s3.amazonaws.com/assets/0007/0776/Education-MDG.jpg",
    },
  ];

  const renderSlides = imageData.map((image) => (
    <div key={image.alt}>
      <img src={image.url} alt={image.alt} />
    </div>
  ));

  const handleChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        py: 8,
        px: 2,
        display: { xs: "flex" },
      }}
    >
      <Box
        component="section"
        sx={{
          paddingBottom: 3,
        }}
      >
        <Title text={"Plans and dimension"} textAlign={"center"} />
        <Typography
          variant="h5"
          component="h4"
          align="center"
          sx={{
            paddingTop: 1,
          }}
        >
          Rooms Gallery
        </Typography>
        <Paragraph
          text={
            "We have more 5000 reviews and our\
                    customers trust on our quality product\
                    and trust own our product. If you interested,\
                    contact us."
          }
          maxWidth={"sm"}
          mx={"auto"}
          textAlign={"center"}
        />
      </Box>

      <Box
        sx={{
          maxWidth: 700,
          width: "100%",
        }}
      >
        <Carousel
          centerSlidePercentage={40}
          thumbWidth={180}
          dynamicHeight={false}
          centerMode={false}
          showArrows={false}
          autoPlay={false}
          infiniteLoop={true}
          selectedItem={imageData[currentIndex]}
          onChange={handleChange}
          className="carousel-container"
        >
          {renderSlides}
        </Carousel>
      </Box>
    </Stack>
  );
};

export default Gallery;
