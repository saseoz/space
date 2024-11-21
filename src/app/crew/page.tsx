'use client'
import React from 'react'
import Image from 'next/image';
import useContent from '../hooks/useContent';
const crew = [
  {
    "name": "Douglas Hurley",
    "images": {
      "png": "/crew/image-douglas-hurley.png",
      "webp": "/crew/image-douglas-hurley.webp"
    },
    "role": "Commander",
    "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
  },
  {
    "name": "Mark Shuttleworth",
    "images": {
      "png": "/crew/image-mark-shuttleworth.png",
      "webp": "/crew/image-mark-shuttleworth.webp"
    },
    "role": "Mission Specialist",
    "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
  },
  {
    "name": "Victor Glover",
    "images": {
      "png": "/crew/image-victor-glover.png",
      "webp": "/crew/image-victor-glover.webp"
    },
    "role": "Pilot",
    "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
  },
  {
    "name": "Anousheh Ansari",
    "images": {
      "png": "/crew/image-anousheh-ansari.png",
      "webp": "/crew/image-anousheh-ansari.webp"
    },
    "role": "Flight Engineer",
    "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
  }
]
export default function Crew() {
  const { currentContent, currentIndex, handleContentClick } = useContent(crew);
  return (
    <div className="crew flex flex-col w-full p-6 xs:p-10 md:py-12 text-center lg:text-left gap-8">
      <div className="flex justify-center xs:justify-start w-full">
        <p className="sub-title">
          <span>02</span> Meet your crew
        </p>
      </div>
      <div className="flex w-full items-center flex-grow">
        <div className="flex flex-col gap-8 lg:flex-row w-full">

          <div className="flex flex-col md:justify-between gap-6 md:gap-10 w-full">
            <div className="flex flex-col justify-center flex-grow mx-auto lg:mx-0 md:max-w-xl">
              <div className="">
                <h1 className="font-belle uppercase flex flex-col">
                  <span className="text-blueLight">{currentContent.role}</span>
                  {currentContent.name}
                </h1>
              </div>

              <div className="">
                <p className="main-par">
                  {currentContent.bio}
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start gap-4">
              {crew.map((item, index) => (
                <button key={index} onClick={() => handleContentClick(index)}
                  className={`w-3 md:w-4 aspect-square rounded-full bg-white 
              hover:opacity-100 transition duration-300 ease-in-out
              ${index === currentIndex ? 'opacity-100' : 'opacity-30'}`}></button>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-end w-full flex-grow">
            <div className="h-fit flex w-full max-w-sm ">
              <Image
                src={currentContent.images.png}
                alt={`Image of ${currentContent.name}`}
                layout="responsive"
                width={514}
                height={700}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
