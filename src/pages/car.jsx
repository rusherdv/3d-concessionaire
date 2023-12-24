import React, { useEffect, useState } from 'react'
import { CarVisualizer } from '../components/carvisualizer.jsx'
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import cars from '../../public/db.json'


const Car = () => {

  const [color, setColor] = useState('');
  const [wheelColor, setWheelColors] = useState('');
  const [car, setCar] = useState('')

  const handleColor = (colorToSet) => {
    setColor(colorToSet);
  };

  const handleWheelColor = (colorToSet) => {
    setWheelColors(colorToSet);
  };

  useEffect(() => {
    const urlParam = window.location.href.split('/car/')[1];
    const data = urlParam ? decodeURIComponent(urlParam) : '';
    const selectedCar = cars.cars.find(e => e.id == data)
    setCar(selectedCar)
  },[])

  return (
    <div className='flex h-[100vh] bg-[#101010] max-xl:justify-center'>
      <Link to="/">
        <IoMdArrowRoundBack className='text-white text-4xl absolute top-2 left-2 z-10 hover:cursor-pointer'/>
      </Link>
      <CarVisualizer car={car} color={color} wheelColor={wheelColor}/>
      <div className='visualizerOptions w-[450px] mt-5 mb-5 mr-5 ml-5 bg-[#090909] flex flex-col rounded-xl whiteShadow justify-between overflow-y-auto max-xl:h-2/6 max-xl:ml-0 max-xl:mr-0 max-xl:w-[96%] max-xl:absolute max-xl:bottom-0'>
        <div className='mt-8 mb-5 ml-10 mr-10'>
        <div className='text-gray-600 inter400 mb-5 w-[93%] m-auto'>
          {
            car && (
              <div className='text-sm'>
              <h2 className='inter600 text-white text-2xl'>{car.brand}</h2>
              <h1 className='text-white inter600 text-3xl mb-2'>{car.model}</h1>
              <div>
                <p className='inter600 text-base'>Engine:</p>
                <p>{car.details.engine.description}</p>
                <p>{car.details.engine.power}</p>
                <p>{car.details.engine.transmission}</p>
              </div>
              <div className='mt-2'>
                <p className='inter600 text-base'>Performance:</p>
                <p>{car.details.performance.acceleration}</p>
                <p>{car.details.performance.topSpeed}</p>
              </div>
              <div className='mt-2'>
                <p className='inter600 text-base'>Chassis and Suspension:</p>
                <p>{car.details.chassis.platform}</p>
                <p>{car.details.chassis.suspensionFront}</p>
                <p>{car.details.chassis.suspensionRear}</p>
              </div>
            </div>
            )
          }
          </div>
          <Accordion className='mt-5'>
            <AccordionItem subtitle={<span>Press to change car <strong>paint</strong></span>} key="1" aria-label="Accordion 1" title={<span style={{ color: 'white', fontFamily: 'Inter', fontWeight: "600" }}>Car color</span>} >
              <div className='max-xl:flex max-xl:justify-around'>
                <div className='flex items-center mt-5'>
                  <div onClick={() => { handleColor('#FF0000') }} className='bg-red-500 rounded-md border-2 h-10 w-20 hover:cursor-pointer'></div>
                  <p className='text-white inter400 ml-2'>Red</p>
                </div>
                <div className='flex items-center mt-5'>
                  <div onClick={() => {handleColor('blue')}} className='bg-blue-500 rounded-md border-2 h-10 w-20 hover:cursor-pointer'></div>
                  <p className='text-white inter400 ml-2'>Blue</p>
                </div>
                <div className='flex items-center mt-5'>
                  <div onClick={() => {handleColor('yellow')}} className='bg-yellow-500 rounded-md border-2 h-10 w-20 hover:cursor-pointer'></div>
                  <p className='text-white inter400 ml-2'>Yellow</p>
                </div>
                <div className='flex items-center mt-5'>
                  <div onClick={() => {handleColor('white')}} className='bg-white rounded-md border-2 border-gray-500 h-10 w-20 hover:cursor-pointer'></div>
                  <p className='text-white inter400 ml-2'>White</p>
                </div>
                <div className='flex items-center mt-5'>
                  <div onClick={() => {handleColor('black')}} className='bg-black rounded-md border-gray-500 border-2 h-10 w-20 hover:cursor-pointer'></div>
                  <p className='text-white inter400 ml-2'>Black</p>
                </div>
              </div>
            </AccordionItem>
            <AccordionItem subtitle={<span>Press to change wheels <strong>color</strong></span>} key="2" aria-label="Accordion 2" title={<span style={{ color: 'white', fontFamily: 'Inter', fontWeight: "600" }}>Wheels color</span>} >
              <div className='max-xl:flex max-xl:justify-around'>
                <div className='flex items-center mt-5'>
                  <div onClick={() => { handleWheelColor('#FF0000') }} className='bg-red-500 rounded-md border-2 h-10 w-20 hover:cursor-pointer'></div>
                  <p className='text-white inter400 ml-2'>Red</p>
                </div>
                <div className='flex items-center mt-5'>
                  <div onClick={() => { handleWheelColor('blue')}} className='bg-blue-500 rounded-md border-2 h-10 w-20 hover:cursor-pointer'></div>
                  <p className='text-white inter400 ml-2'>Blue</p>
                </div>
                <div className='flex items-center mt-5'>
                  <div onClick={() => { handleWheelColor('yellow')}} className='bg-yellow-500 rounded-md border-2 h-10 w-20 hover:cursor-pointer'></div>
                  <p className='text-white inter400 ml-2'>Yellow</p>
                </div>
                <div className='flex items-center mt-5'>
                  <div onClick={() => { handleWheelColor('white')}} className='bg-white rounded-md border-2 border-gray-500 h-10 w-20 hover:cursor-pointer'></div>
                  <p className='text-white inter400 ml-2'>White</p>
                </div>
                <div className='flex items-center mt-5'>
                  <div onClick={() => { handleWheelColor('black')}} className='bg-black rounded-md border-gray-500 border-2 h-10 w-20 hover:cursor-pointer'></div>
                  <p className='text-white inter400 ml-2'>Black</p>
                </div>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
        <div className='ml-10 mb-8 mr-10'>
          <Button color="danger" variant="shadow" className="w-full inter600 mt-">Continue</Button>
        </div>
      </div>
    </div>
  )
}

export default Car