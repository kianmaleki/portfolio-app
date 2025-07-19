import React from "react";

export default function ProfileFacts() {
  return (
    <div className="flex flex-wrap justify-center gap-6 sm:gap-12 text-[#A3ABB2] font-bold my-8">
      {[
        { number: "1", line1: "Years of work", line2: "experience" },
        { number: "6+", line1: "Completed", line2: "projects" },
        { number: "6+", line1: "Satisfied", line2: "customers" },
      ].map((fact, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-1 text-center min-w-[100px]"
        >
          <p className="text-2xl">{fact.number}</p>
          <p>{fact.line1}</p>
          <p>{fact.line2}</p>
        </div>
      ))}
    </div>
  );
}
