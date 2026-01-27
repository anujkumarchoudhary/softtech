"use client";
import React, { useEffect, useState } from "react";
import MaxWidth from "./layout/MaxWidth";
import logoipsum from "../../public/images/clients/logoipsum-286-1.png";
import logoipsum_2 from "../../public/images/clients/logoipsum-287-2.png";
import logoipsum_3 from "../../public/images/clients/logoipsum-297-1.png";
import logoipsum_4 from "../../public/images/clients/logoipsum-286-1.png";
import logoipsum_5 from "../../public/images/clients/logoipsum-286-1.png";
import Image from "next/image";

const Client = () => {
  const clients = [
    { id: 1, img: logoipsum },
    { id: 2, img: logoipsum_2 },
    { id: 3, img: logoipsum_3 },
    { id: 4, img: logoipsum_4 },
    { id: 5, img: logoipsum_5 },
    { id: 6, img: logoipsum_2 },
  ];
  const VISIBLE_COUNT = 4;
  const [startIndex, setStartIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % clients.length);
    }, 2500); // change speed here

    return () => clearInterval(interval);
  }, [clients.length]);

  // Create infinite slice
  const visibleClients = Array.from({ length: VISIBLE_COUNT }, (_, i) => {
    return clients[(startIndex + i) % clients.length];
  });
  return (
    <div className="bg-[#001845] border-b border-b-white text-white py-[3rem]">
      <MaxWidth>
        <div className="grid grid-cols-6 gap-[1rem]">
          <div className="col-span-2 flex gap-[1rem]">
            <span className="bg-[#0466C8] h-1.5 w-20 my-auto"></span>
            <h2 className="text-4xl font-bold my-auto">Our Clients</h2>
          </div>
          <div className="col-span-4 flex items-center justify-between">
            {visibleClients.map((img, index) => (
              <div
                key={index}
                className="transition-all duration-500 ease-in-out"
              >
                <Image
                  src={img?.img}
                  alt="Client logo"
                  className="h-8 w-auto object-contain opacity-90 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </MaxWidth>
    </div>
  );
};

export default Client;
