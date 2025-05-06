import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Box, Typography } from "@mui/material";

export default function App() {
  return (
    <>
      <Box sx={{ my:{xs:12,lg : 20} }}>
        <Swiper
            loop={true}
            centeredSlides={false}
            slidesPerView={3}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            575: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1500: {
              slidesPerView: 4,
              spaceBetween: 60,
            },
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Box
              sx={{
                textAlign: "center",
                minHeight: "150px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px ",
                p: 3,
              }}
            >
              <Typography
                variant="h5"
                sx={{ color: "#000000", fontWeight: "500", fontSize: "40px" }}
              >
                15 +
              </Typography>
              <Typography variant="body1">
                Ready to use React Components
              </Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                textAlign: "center",
                minHeight: "150px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px ",
                p: 3,
              }}
            >
              <Typography
                variant="h5"
                sx={{ color: "#000000", fontWeight: "500", fontSize: "40px" }}
              >
                60 +
              </Typography>
              <Typography variant="body1">
                Predefined colors for theme setup
              </Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                textAlign: "center",
                minHeight: "150px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px ",
                p: 3,
              }}
            >
              <Typography
                variant="h5"
                sx={{ color: "#000000", fontWeight: "500", fontSize: "40px" }}
              >
                100 +
              </Typography>
              <Typography variant="body1">
                Detailed documentation for each component
              </Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                textAlign: "center",
                minHeight: "150px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px ",
                p: 3,
              }}
            >
              <Typography
                variant="h5"
                sx={{ color: "#000000", fontWeight: "500", fontSize: "40px" }}
              >
                Free
              </Typography>
              <Typography variant="body1">
                Open source with regular updates{" "}
              </Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                textAlign: "center",
                minHeight: "150px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px ",
                p: 3,
              }}
            >
              <Typography
                variant="h5"
                sx={{ color: "#000000", fontWeight: "500", fontSize: "40px" }}
              >
                200 +
              </Typography>
              <Typography variant="body1">
                Detailed documentation for each component
              </Typography>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
}
