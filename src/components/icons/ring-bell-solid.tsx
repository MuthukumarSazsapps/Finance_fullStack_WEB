import React from 'react';

export default function RingBellSolidIcon({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none" {...props}>
      <path
        className="fill-current opacity-40"
        d="M16.5 8.162a.75.75 0 0 1-.75-.75 7.824 7.824 0 0 0-2.306-5.569.75.75 0 0 1 1.06-1.06 9.315 9.315 0 0 1 2.746 6.629.752.752 0 0 1-.75.75ZM1.5 8.162a.75.75 0 0 1-.751-.75c0-2.505.975-4.86 2.746-6.63a.751.751 0 0 1 1.061 1.06 7.824 7.824 0 0 0-2.306 5.57.75.75 0 0 1-.75.75Z"
      />
      <path
        fill="currentColor"
        d="M16.034 12.684A5.025 5.025 0 0 1 14.25 8.84V6.75c0-2.64-1.96-4.824-4.5-5.19V.75a.75.75 0 1 0-1.5 0v.81c-2.54.366-4.5 2.55-4.5 5.19v2.091c0 1.484-.65 2.885-1.792 3.85a1.312 1.312 0 0 0 .854 2.31h12.375a1.314 1.314 0 0 0 .847-2.317Z"
      />
      <path
        className="fill-current opacity-40"
        d="M9 18a2.816 2.816 0 0 0 2.755-2.25H6.244A2.818 2.818 0 0 0 9 18Z"
      />
    </svg>
  );
}
