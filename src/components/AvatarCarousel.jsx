import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const avatars = ["/12.jpg", "/13.jpg", "/avt3.jpg"];

export default function AvatarCarousel() {
  return (
    <div className="w-full max-w-xl mx-auto py-10">
      <Swiper
        modules={[Autoplay, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1.5,
          slideShadows: false,
        }}
        className="mySwiper"
      >
        {avatars.map((src, index) => (
          <SwiperSlide key={index + 1} className="flex justify-center">
            <div
              style={{
                padding: "4px",
                borderRadius: "1rem",
                background:
                  "linear-gradient(270deg, #ffffff, #7e22ce, #ffffff)",
                backgroundSize: "600% 600%",
                animation: "gradient-rotate 4s linear infinite",
                display: "inline-block",
              }}
            >
              <img
                src={src}
                alt={`Avatar ${index}`}
                style={{
                  width: "10rem",
                  height: "15rem",
                  objectFit: "cover",
                  borderRadius: "1rem",
                  backgroundColor: "white",
                  display: "block",
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
