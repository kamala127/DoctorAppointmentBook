import React from "react";
import { assets } from "../assets/assets";

export default function Speciality() {
  return (
    <div className=" flex flex-col justify-center pt-[2vh] pb-[10vh] mx-[18vh] gap-4">
      <div className=" flex  flex-col justify-center items-center py-6 mx-[45vh] gap-4 font-sans">
        <h2 className="font-bold text-2xl">Find by Speciality</h2>
        <p className="text-center">
          Simply browse through our extensive list of trusted doctors, schedule
          your appointment hassle-free.
        </p>
      </div>
      <div className="flex justify-center  gap-4 ">
        {[
          { img: assets.General_physician, label: "General physician" },
          { img: assets.Gynecologist, label: "Gynecologist" },
          { img: assets.Dermatologist, label: "Dermatologist" },
          { img: assets.Pediatricians, label: "Pediatricians" },
          { img: assets.Neurologist, label: "Neurologist" },
          { img: assets.Gastroenterologist, label: "Gastroenterologist" },
        ].map(({ img, label }) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center transition-transform duration-300 ease-in-out hover:scale-110 "
          >
            <img
              src={img}
              alt={label}
              className="w-[6rem] h-[6rem] block mx-auto"
            />
            <p className=" text-sm mt-1">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
