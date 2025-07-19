import { LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PortfolioItem({
  imageSrc,
  overlayTitle,
  overlayDescription,
  overlayLink,
}: {
  imageSrc: string;
  overlayTitle: string;
  overlayDescription: string;
  overlayLink: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl group cursor-pointer">
      <Image
        src={imageSrc}
        alt="Portfolio item"
        width={600}
        height={400}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay */}
      <Link href={overlayLink}>
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center rounded-2xl">
          <h3 className="text-xl font-bold text-white mb-2">{overlayTitle}</h3>
          <p className="text-sm text-gray-200 max-w-[80%] mb-4">
            {overlayDescription}
          </p>
          <div className="bg-white p-3 rounded-full">
            <LinkIcon className="text-black w-5 h-5" />
          </div>
        </div>
      </Link>
    </div>
  );
}
