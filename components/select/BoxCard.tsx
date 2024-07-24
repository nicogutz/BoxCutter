"use client";
import { Card } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface BoxCardProps extends React.HTMLProps<HTMLDivElement> {
  id: string;
  boxType: string;
  description: string;
  imagePath: string;
  subPath?: boolean;
}

export default function BoxCard(props: BoxCardProps) {
  const pathname = usePathname();
  const link = props.subPath ? `${pathname}/${props.id}` : `/app/${props.id}`;
  return (
    <Link
      href={link}
      className="flex w-full max-w-xl justify-center transition duration-100 hover:scale-95"
    >
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
      </Card>
    </Link>
  );
}
