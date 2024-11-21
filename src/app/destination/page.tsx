'use client'
import Image from 'next/image';
import useContent from '../hooks/useContent';
const destinations = [
  {
    name: "Moon",
    images: {
      png: "/destination/image-moon.png",
      webp: "/destination/image-moon.webp",
    },
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    images: {
      png: "/destination/image-mars.png",
      webp: "/destination/image-mars.webp",
    },
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    images: {
      png: "/destination/image-europa.png",
      webp: "/destination/image-europa.webp",
    },
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    images: {
      png: "/destination/image-titan.png",
      webp: "/destination/image-titan.webp",
    },
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];

export default function Destination() {
  const { currentContent, currentIndex, handleContentClick } = useContent(destinations);

  return (
    <div className="destination flex flex-col lg:flex-row w-full p-6 xs:p-10 md:p-16 text-center lg:text-left gap-8">
      <div className="flex gap-6 flex-col w-full">
        <div className="flex justify-center xs:justify-start w-full">
          <p className="sub-title">
            <span>01</span> Pick your destination
          </p>
        </div>
        <div className="flex flex-grow justify-center items-center w-full max-w-xs p-6 mx-auto xs:max-w-sm lg:max-w-lg lg:p-0">
          <Image
            src={currentContent.images.png}
            alt={`Image of ${currentContent.name}`}
            layout="responsive"
            width={731}
            height={731}
            className="max-w-lg"
          />
        </div>
      </div>

      <div className="flex items-center w-full">
        <div className="flex flex-col w-full max-w-xl lg:max-w-md mx-auto lg:mx-0">
          <div className="flex justify-center lg:justify-start">
            <ul className="flex gap-8 uppercase font-barlowCon text-blueLight tracking-widest">
              {destinations.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleContentClick(index)}
                    className={`uppercase hover:text-white hover:border-b-2 hover:border-blueLight pb-4 transition-colors duration-300 ease-in-out
                      ${index === currentIndex ? 'border-b-2 border-white text-white' : ''}`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 md:pt-10">
            <h2 className="uppercase">{currentContent.name}</h2>
          </div>

          <div className="">
            <p className="main-par">{currentContent.description}</p>
          </div>

          <hr className="my-6 md:my-10" />

          <div className="flex flex-col justify-between gap-6 uppercase xs:flex-row">
            <div className="flex flex-col gap-3 w-full">
              <p className="text-blueLight font-barlowCon tracking-widest">Avg. distance</p>
              <p className="font-belle text-3xl">{currentContent.distance}</p>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <p className="text-blueLight font-barlowCon tracking-widest">Est. travel time</p>
              <p className="font-belle text-3xl">{currentContent.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
