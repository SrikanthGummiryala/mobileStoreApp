import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Mobiles() {
  const [mobile, setMobile] = useState([]);
  useEffect(() => {
    const getMobile = async () => {
      try {
        const res = await axios.get("https://mobilestorebackend-w7gs.onrender.com/mobile");
        console.log(res.data);
        setMobile(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMobile();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-orange-500">here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            voluptate eos quia repellat ex consequuntur nam delectus quisquam
            molestias est sit non optio illum, soluta amet doloribus tenetur.
            Ducimus omnis, inventore ad, non rerum asperiores distinctio
            quibusdam error qui sapiente enim tenetur laborum officiis.
          </p>
          <Link to={"/"}>
            <button className="bg-orange-500 text-white px-4 py-2 mt-9 rounded-md hover:bg-orange-600">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {mobile.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Mobiles;
