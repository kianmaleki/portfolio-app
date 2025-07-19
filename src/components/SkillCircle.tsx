import { useEffect, useState } from "react";

const PROGRESS_ANIMATION_DELAY_MS = 300;

interface SkillCircleProps {
  label: string;
  percentage: number;
}

export default function SkillCircle({ label, percentage }: SkillCircleProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(
      () => setProgress(percentage),
      PROGRESS_ANIMATION_DELAY_MS
    );
    return () => clearTimeout(timeout);
  }, [percentage]);

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <svg className="w-24 h-24 rotate-[-90deg]" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#2A2F36"
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#FFD54F"
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="text-sm text-white">{label}</div>
    </div>
  );
}
