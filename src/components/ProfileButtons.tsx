import React from "react";
import { Button } from "./ui/button";
import { DownloadIcon } from "lucide-react";
import Container from "./Container";
import Link from "next/link";

export default function ProfileButtons() {
  return (
    <Container className="flex-col sm:flex-row text-center">
      <Button
        asChild
        className="bg-[#FFE071] text-black text-sm sm:text-base p-8 sm:py-6 sm:px-10 rounded-2xl hover:bg-[#FFD54F] transition-colors w-full sm:w-auto"
      >
        <Link href="#" className="flex items-center justify-center gap-2">
          دانلود رزومه <DownloadIcon size={30} />
        </Link>
      </Button>
      <Button
        asChild
        className="bg-[#171F26] text-[#A3ABB2] text-sm sm:text-base p-8 sm:py-6 sm:px-10 rounded-2xl hover:bg-[#1F2937] transition-colors w-full sm:w-auto"
      >
        <Link href="#" className="flex items-center justify-center gap-2">
          ارتباط با من
        </Link>
      </Button>
    </Container>
  );
}
