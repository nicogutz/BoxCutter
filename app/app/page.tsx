import DefaultFooter from "@/components/Footer";
import HomeNavbar from "@/components/HomeNavbar";
import BoxSelector from "@/components/app/BoxSelector";
import { Progress } from "flowbite-react";

export default function HomePage() {
  return (
    <>
      <HomeNavbar />
      <Progress progress={45} />
      <div>
        <div className="mx-5 flex items-start">
          <div id="main-content" className={"relative h-[84vh] w-full"}>
            <BoxSelector />
          </div>
        </div>
      </div>
      <DefaultFooter />
    </>
  );
}
