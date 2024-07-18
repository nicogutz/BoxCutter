import DefaultFooter from "@/components/Footer";
import HomeNavbar from "@/components/HomeNavbar";
import BoxCard from "@/components/app/BoxCard";
import BoxSelector from "@/components/app/BoxSelector";
import { Progress } from "flowbite-react";

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
];

export default function SelectionPage() {
  return (
    <>
      <HomeNavbar />
      <Progress progress={45} />
      <div>
        <div className="mx-5 flex items-start">
          <div id="main-content" className={"relative h-[84vh] w-full"}>
            <div className="flex h-full w-full">
              <div className="mx-auto w-full self-center text-center">
                <div className="w-full space-y-4 self-center p-6 sm:p-8 md:space-y-6">
                  <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                    Select your box.
                  </h1>
                  <BoxSelector boxCards={boxes} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DefaultFooter />
    </>
  );
}
