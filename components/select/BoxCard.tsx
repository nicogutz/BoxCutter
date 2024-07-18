import { Button, Card } from "flowbite-react";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";

interface BoxCardProps extends React.HTMLProps<HTMLDivElement> {
  id: string;
  boxType: string;
  description: string;
  imagePath: string;
}

export default function BoxCard(props: BoxCardProps) {
  return (
    <div className="flex w-full max-w-xl justify-center">
      <Card
        className="max-w-xl"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={props.imagePath}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.boxType}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {props.description}
        </p>
        <Button as={Link} href={`/app/${props.id}`}>
          Select
          <HiOutlineArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </Card>
    </div>
  );
}
