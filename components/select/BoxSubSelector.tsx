"use client";

import BoxCard from "./BoxCard";

const boxes = [
  <BoxCard
    id="1"
    boxType="Square"
    description="Rounadslkk"
    imagePath="/image-1.jpg"
    key={1}
  />,
  <BoxCard
    id="1"
    boxType="Square"
    description="Rounadslkk"
    imagePath="/image-1.jpg"
    key={2}
  />,
  <BoxCard
    id="1"
    boxType="Square"
    description="Rounadslkk"
    imagePath="/image-1.jpg"
    key={3}
  />,
  <BoxCard
    id="1"
    boxType="Square"
    description="Rounadslkk"
    imagePath="/image-1.jpg"
    key={4}
  />,
  <BoxCard
    id="1"
    boxType="Square"
    description="Rounadslkk"
    imagePath="/image-1.jpg"
    key={5}
  />,
  <BoxCard
    id="1"
    boxType="Square"
    description="Rounadslkk"
    imagePath="/image-1.jpg"
    key={5}
  />,
  <BoxCard
    id="1"
    boxType="Square"
    description="Rounadslkk"
    imagePath="/image-1.jpg"
    key={5}
  />,
];

export default function BoxSubSelector() {
  return (
    <>
      <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white sm:text-5xl">
        Pick a box.
      </h1>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {boxes.map((box) => (
          <div key={box.key}>{box}</div>
        ))}
      </div>
    </>
  );
}
