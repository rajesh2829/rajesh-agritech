import { cn } from "@/lib/utils";

interface TopographicPatternProps {
  className?: string;
  opacity?: number;
}

export function TopographicPattern({
  className,
  opacity = 0.08,
}: TopographicPatternProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden select-none",
        className
      )}
      style={{ opacity }}
    >
      <svg
        className="h-full w-full object-cover text-primary"
        viewBox="0 0 1000 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M-100 120 C 150 180, 280 80, 520 140 C 760 200, 890 100, 1100 160"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="4 6"
        />
        <path
          d="M-100 180 C 120 250, 310 140, 560 210 C 810 280, 860 160, 1100 230"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M-100 240 C 90 320, 340 200, 600 280 C 860 360, 840 220, 1100 300"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M-100 300 C 60 390, 370 260, 640 350 C 910 440, 820 280, 1100 370"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />
        <path
          d="M-100 360 C 30 460, 400 320, 680 420 C 960 520, 800 340, 1100 440"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M-100 420 C 0 530, 430 380, 720 490 C 1010 600, 780 400, 1100 510"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M-100 480 C -30 600, 460 440, 760 560 C 1060 680, 760 460, 1100 580"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M-100 540 C -60 670, 490 500, 800 630 C 1110 760, 740 520, 1100 650"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="5 5"
        />
        <path
          d="M-100 600 C -90 740, 520 560, 840 700 C 1160 840, 720 580, 1100 720"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        {/* Concentric elevation nodes */}
        <circle cx="380" cy="220" r="45" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="380" cy="220" r="90" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="380" cy="220" r="140" stroke="currentColor" strokeWidth="1.2" />

        <circle cx="750" cy="480" r="60" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
        <circle cx="750" cy="480" r="120" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="750" cy="480" r="190" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </div>
  );
}
