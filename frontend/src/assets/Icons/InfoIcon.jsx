export const InfoIcon = ({ width, height, color }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#7htqo6hbna)">
        <path
          d="M8 .5a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8zm-6.5 8C1.5 12.09 4.41 15 8 15s6.5-2.91 6.5-6.5S11.59 2 8 2 1.5 4.91 1.5 8.5z"
          fill={color}
        />
        <path
          d="M8 11.833v-4M8 5.5v-.333"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="7htqo6hbna">
          <path fill="#fff" transform="translate(0 .5)" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
