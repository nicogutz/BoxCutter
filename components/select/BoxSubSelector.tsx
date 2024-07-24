"use client";

import { Button } from "flowbite-react";
import Link from "next/link";
import { HiOutlineArrowLeft } from "react-icons/hi";
import BoxCard from "./BoxCard";

const boxes = [
  <BoxCard
    subPath
    id="1"
    boxType="Square"
    description="Rounadslkk"
    imagePath="/image-1.jpg"
    key={1}
  />,
  <BoxCard
    subPath
    id="1"
    boxType="Square"
    description="Rounadslkk"
    imagePath="/image-1.jpg"
    key={2}
  />,
  <BoxCard
    subPath
    id="1"
    boxType="Square"
    description="Rounadslkk"
    imagePath="/image-1.jpg"
    key={3}
  />,
  <BoxCard
    subPath
    id="1"
    boxType="Square"
    description="Rounadslkk"
    imagePath="/image-1.jpg"
    key={4}
  />,
  <BoxCard
    subPath
    id="1"
    boxType="Square"
    description="Rounadslkk"
    imagePath="/image-1.jpg"
    key={5}
  />,
  <BoxCard
    subPath
    id="1"
    boxType="Square"
    description="Rounadslkk"
    imagePath="/image-1.jpg"
    key={6}
  />,
  <BoxCard
    subPath
    id="1"
    boxType="Square"
    description="Rounadslkk"
    imagePath="/image-1.jpg"
    key={7}
  />,
];

export default function BoxSubSelector() {
  return (
    <div className="mx-5 mt-[10vh] h-fit pb-[10vh] text-center">
      <div className="grid grid-cols-3">
        <div className="flex items-center justify-center">
          <Button as={Link} href={"/app"} color="light">
            <HiOutlineArrowLeft className="mr-2 h-5 w-5" />
            Back
          </Button>
        </div>

        <h1 className="my-6 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Pick a box
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {boxes.map((box) => (
          <div key={box.key}>{box}</div>
        ))}
      </div>
    </div>
  );
}
