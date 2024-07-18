import { Card } from "flowbite-react";

export default function BoxCard() {
  return (
    <div className="flex w-full max-w-xl justify-center">
      <Card
        className="max-w-xl"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="/image-1.jpg"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </Card>
    </div>
  );
}
