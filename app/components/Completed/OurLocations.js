"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import { initFlowbite } from "flowbite"

const pinLocations = [
  {
    top: 10,
    left: 625,
    title: "Chartered Fireflies",
    content: "Devanahalli, Bangalore",
    location: "https://maps.app.goo.gl/example1",
  },
  {
    top: 20,
    left: 610,
    title: "Chartered Windsong",
    content: "Near Yelahanka, North Bangalore",
    location: "https://maps.app.goo.gl/example1",
  },
  {
    top: 10,
    left: 595,
    title: "Chartered Woodpecker",
    content: "Near Yelahanka, North Bangalore",
    location: "https://maps.app.goo.gl/example1",
  },
  {
    top: 400,
    left: 225,
    title: "Chartered Veda",
    content: "Near Yelahanka, North Bangalore",
    location: "https://maps.app.goo.gl/example1",
  },
  {
    top: 410,
    left: 440,
    title: "Chartered Jardin",
    content: "Bhoopsandra, Bangalore",
    location: "https://maps.app.goo.gl/example1",
  },
  {
    top: 575,
    left: 652,
    title: "Chartered Raaga",
    content: "Mcpherson Road, Bangalore",
    location: "https://maps.app.goo.gl/example2",
  },
  {
    top: 580,
    left: 664,
    title: "Chartered Karthika",
    content: "Wheelers Road, Bangalore",
    location: "https://maps.app.goo.gl/example2",
  },
  {
    top: 635,
    left: 640,
    title: "Chartered Gruha",
    content: "Near Palace Grounds",
    location: "https://maps.app.goo.gl/example2",
  },
  {
    top: 715,
    left: 545,
    title: "Chartered Rathna",
    content: "Off MG Road, Bangalore",
    location: "https://maps.app.goo.gl/example3",
  },
  {
    top: 710,
    left: 565,
    title: "Chartered Court",
    content: "Off MG Road, Bangalore",
    location: "https://maps.app.goo.gl/example3",
  },
  {
    top: 720,
    left: 590,
    title: "Chartered Seraina",
    content: "Off MG Road, Bangalore",
    location: "https://maps.app.goo.gl/example3",
  },
  {
    top: 749,
    left: 575,
    title: "Chartered Resort-1",
    content: "Off MG Road, Bangalore",
    location: "https://maps.app.goo.gl/example3",
  },
  {
    top: 745,
    left: 585,
    title: "Chartered Resort-2",
    content: "Off MG Road, Bangalore",
    location: "https://maps.app.goo.gl/example3",
  },
  {
    top: 777,
    left: 545,
    title: "Chartered Alcove",
    content: "Albert Street, Bangalore",
    location: "https://maps.app.goo.gl/example3",
  },
  {
    top: 787,
    left: 560,
    title: "Chartered Cottage",
    content: "Near Majestic, Bangalore",
    location: "https://maps.app.goo.gl/example3",
  },
  {
    top: 820,
    left: 450,
    title: "Chartered Krishna",
    content: "M.N. Krishna Road, Bangalore",
    location: "https://maps.app.goo.gl/example3",
  },
  {
    top: 830,
    left: 468,
    title: "Chartered Kuteer",
    content: "M.N. Krishna Road, Bangalore",
    location: "https://maps.app.goo.gl/example3",
  },
  {
    top: 850,
    left: 597,
    title: "Chartered Centre",
    content: "Hosur Main Road, Bangalore",
    location: "https://maps.app.goo.gl/example3",
  },
  {
    top: 870,
    left: 390,
    title: "Chartered Ambaprasad",
    content: "Bull Temple Road, Bangalore",
    location: "https://maps.app.goo.gl/example3",
  },
  {
    top: 860,
    left: 420,
    title: "Chartered Sannidhi",
    content: "Basavanagudi, Bangalore",
    location: "https://maps.app.goo.gl/example3",
  },
  {
    top: 895,
    left: 535,
    title: "Chartered Mady",
    content: "J.P. Nagar, Bangalore",
    location: "https://maps.app.goo.gl/example3",
  },
  {
    top: 920,
    left: 380,
    title: "Chartered Madhura",
    content: "Uttarhalli Road, Bangalore",
    location: "https://maps.app.goo.gl/example3",
  },
  {
    top: 1100,
    left: 320,
    title: "Chartered Hummingbird",
    content: "Kanakapura Road, Bangalore",
    location: "https://maps.app.goo.gl/example3",
  },
  {
    top: 1040,
    left: 395,
    title: "Chartered Beverly Hills",
    content: "Near Majestic, Bangalore",
    location: "https://maps.app.goo.gl/example3",
  },
  {
    top: 1100,
    left: 524,
    title: "Chartered Coronet",
    content: "Near Majestic, Bangalore",
    location: "https://maps.app.goo.gl/example3",
  },
  {
    top: 1030,
    left: 575,
    title: "Chartered Samskruti",
    content: "Bilikahalli, Bangalore",
    location: "https://maps.app.goo.gl/example4",
  },
  {
    top: 1035,
    left: 657,
    title: "Chartered Grasshopper",
    content: "Koramangala Extension, Bangalore",
    location: "https://maps.app.goo.gl/example4",
  },
]

const OurLocations = () => {
  // Initialize Flowbite JS popovers
  useEffect(() => {
    initFlowbite()
  }, [])

  return (
    <div className=" xl:block">
      <div className="mx-auto py-10 px-4 md:px-10 mt-7">
        <div className="relative w-full max-w-7xl mx-auto z-0">
          <Image
            src="/completed-project/map-new.svg"
            alt="Map"
            width={1000}
            height={600}
            className="w-full"
          />

          {pinLocations.map((pin, idx) => (
            <div key={idx}>
              {/* Trigger */}
              <button
                data-popover-target={`popover-${idx}`}
                type="button"
                style={{ top: `${pin.top}px`, left: `${pin.left}px` }}
                className="absolute z-20"
              >
                <Image
                  src="/completed-project/pointer.svg"
                  alt="Location Pin"
                  width={15}
                  height={15}
                />
              </button>

              {/* Popover Content */}
              <div
                data-popover
                id={`popover-${idx}`}
                role="tooltip"
                className="absolute z-30 w-64 invisible inline-block text-sm text-primary bg-white border border-gray-200 shadow-sm transition-opacity duration-300"
                style={{ top: `${pin.top - 10}px`, left: `${pin.left + 30}px` }}
              >
                <div className="px-3 py-2 bg-[#ED1C25] border-b border-gray-200">
                  <h3 className="font-semibold text-white">{pin.title}</h3>
                </div>
                <div className="px-3 py-2">
                  <Link href={pin.location} target="_blank">
                    <p className="text-xs sm:text-sm font-light tracking-wide">
                      {pin.content}
                    </p>
                  </Link>
                </div>
                <div data-popper-arrow></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-gray-400 w-full" />
    </div>
  )
}

export default OurLocations
