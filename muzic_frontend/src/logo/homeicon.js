import React from 'react';

export function LineMdHomeAltTwotone(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="currentColor" fillOpacity={0} d="M10 13h4v8h-4Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="1.1s"
          dur="0.15s"
          values="0;0.3"
        ></animate>
      </path>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path strokeDasharray={16} strokeDashoffset={16} d="M4.5 21.5h15">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="16;0"
          ></animate>
        </path>
        <path
          strokeDasharray={16}
          strokeDashoffset={16}
          d="M4.5 21.5v-13.5M19.5 21.5v-13.5"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="16;0"
          ></animate>
        </path>
        <path strokeDasharray={28} strokeDashoffset={28} d="M2 10l10 -8l10 8">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.4s"
            dur="0.4s"
            values="28;0"
          ></animate>
        </path>
        <path strokeDasharray={24} strokeDashoffset={24} d="M9.5 21.5v-9h5v9">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.7s"
            dur="0.4s"
            values="24;0"
          ></animate>
        </path>
      </g>
    </svg>
  );
}
