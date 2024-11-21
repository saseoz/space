'use client';
import React, { useState } from 'react'
import Image from 'next/image';
import useContent from '../hooks/useContent';
const techList = [
  {
    "name": "Launch vehicle",
    "images": {
      "portrait": "/technology/image-launch-vehicle-portrait.jpg",
      "landscape": "/technology/image-launch-vehicle-landscape.jpg"
    },
    "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
  },
  {
    "name": "Spaceport",
    "images": {
      "portrait": "/technology/image-spaceport-portrait.jpg",
      "landscape": "/technology/image-spaceport-landscape.jpg"
    },
    "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
  },
  {
    "name": "Space capsule",
    "images": {
      "portrait": "/technology/image-space-capsule-portrait.jpg",
      "landscape": "/technology/image-space-capsule-landscape.jpg"
    },
    "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
  }
]

export default function Tech() {

  const { currentContent, currentIndex, handleContentClick } = useContent(techList);


  return (
    <div className="tech flex flex-col xs:py-10 md:py-12 md:px-4 gap-10 md:gap-16">
      <div className="flex justify-center xs:justify-start w-full pl-10 lg:pl-0">
        <p className="sub-title">
          <span>03</span> Space launch 101
        </p>
      </div>
      <div className="flex flex-col md:flex-row-reverse gap-8 flex-grow">
        <div className="flex justify-center items-center w-full">
          <picture>
            <source
              media='(min-width: 768px)'
              srcSet={currentContent.images.portrait}
            />

            <Image
              src={currentContent.images.landscape}
              alt={`Image of ${currentContent.name}`}
            
              width={768}
              height={310}
              className="lg:max-w-full"
            />
          </picture>
        </div>

        <div className="flex flex-col md:items-center md:flex-row gap-10 xl:gap-16 w-full px-6">
          <div className="flex md:flex-col justify-center md:justify-start gap-4">
            {techList.map((item, index) => (
              <button
                onClick={() => handleContentClick(index)}
                key={index} 
                className={`text-clamp w-10 xs:w-14 md:w-20 aspect-square border border-white rounded-full
                  hover:bg-white hover:text-black transition duration-300 ease-in-out
                ${currentIndex === index ? 'bg-white text-black' : ''}`}>
                {index + 1}
              </button>
            ))}
          </div>
          <div className="flex flex-col text-center md:text-left">
            <div className="">
              <p className="font-belle text-clamp uppercase text-blueLight">the terminology...</p>
            </div>
            <div className="">
              <h1 className="font-belle uppercase">{currentContent.name}</h1>
            </div>
            <div className="">
              <p className="main-par">{currentContent.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
