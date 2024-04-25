import React, { useState } from "react";
import cars from "../../public/db.json";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

const Home = () => {
  const [car, setCar] = useState(cars);

  return (
    <>
      <div className="bg-black h-full flex justify-start items-center flex-col">
        {car.cars.map((item, index) => (
          <div
            key={index}
            className="inter400 text-white h-screen mr-5 w-screen relative"
          >
            <img
              src={item.img}
              className="w-screen h-screen object-cover opacity-30"
              alt=""
            />
            <div className="absolute bottom-20 left-20">
              <p className="inter600 text-5xl">{item.brand}</p>
              <p className="inter600 text-6xl">{item.model}</p>
              <Link to={`/car/${item.id}`}>
                <Button
                  color="danger"
                  variant="ghost"
                  className="rounded-none w-full inter600 mt-4"
                >
                  Inspect
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
