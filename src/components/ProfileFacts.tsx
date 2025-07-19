import React from "react";

export default function ProfileFacts() {
  return (
    <div className="flex flex-wrap justify-center gap-6 sm:gap-12 text-[#A3ABB2] font-bold my-8">
      {[
<<<<<<< HEAD
        { number: "3+", line1: "سال", line2: "سابقه کاری" },
        { number: "6+", line1: "پروژه", line2: "تکمیل شده" },
        { number: "100%", line1: "رضایت", line2: "مشتری" },
=======
        { number: "3", line1: "Years of work", line2: "experience" },
        { number: "6+", line1: "Completed", line2: "projects" },
        { number: "6+", line1: "Satisfied", line2: "customers" },
>>>>>>> 3b05ff7a44a69565096ada6b890cf057066ea792
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
