import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";

function DemoMobile() {
  const [mobile, setMobile] = useState([]);
  useEffect(() => {
    const getMobile = async () => {
      try {
        const res = await axios.get("http://localhost:2000/mobile");

        const data = res.data.filter((data) => data.category === "OnePlus");
        console.log(data);
        setMobile(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMobile();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Featured Mobiles</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            modi temporibus aliquam fugiat molestias repellat quod voluptas
            asperiores, similique suscipit vero laudantium ipsam at deserunt
            eos.
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {mobile.map((item) => (
              <Cards key={item.id} item={item} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default DemoMobile;
