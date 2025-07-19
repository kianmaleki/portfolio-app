import Image from "next/image";
import React from "react";

export default function PortfolioItem({ imageSrc }: { imageSrc: string }) {
  return (
    <Image
      src={imageSrc}
      alt="Portfolio item"
      width={600}
      height={400}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      className="rounded-2xl w-full h-auto object-cover"
    />
  );
}
