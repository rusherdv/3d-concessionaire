import React, { useState } from 'react';
import cars from '../../public/db.json';
import {Button} from "@nextui-org/react";
import { Link } from 'react-router-dom';

const Home = () => {

  const [car, setCar] = useState(cars)

  return (
    <>
      <div className='bg-black h-[100vh] flex justify-center items-center flex-col'>
        <p className='text-white text-4xl inter600'>3D Concessionaire</p>
        <div className='mt-10 flex flex-wrap w-9/12 justify-center max-2xl:w-full overflow-y-auto max-2xl:h-3/6'>
          {car.cars.map((item, index) => (
            <div key={index} className='inter400 text-white mr-5 mt-5 w-[300px] border-2 border-gray-800 p-5'>
              <img src={item.img} className='w-[300px] h-[150px] object-cover' alt="" />
              <p className='inte600 text-gray-500 text-xs ml-2 mt-2'>{item.brand}</p>
              <p className='inter600 text-xl ml-2'>{item.model}</p>
              <Link to={`/car/${item.id}`}>
                <Button color="danger" variant='ghost' className='rounded-none mt-2 w-full inter600'>Inspect</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;