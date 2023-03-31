export const BlockedIcon = ({ width, height, color }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#hkrw99lp1a)">
        <path
          d="M16.875 12a1.125 1.125 0 0 1-1.125 1.125h-7.5a1.125 1.125 0 1 1 0-2.25h7.5A1.125 1.125 0 0 1 16.875 12z"
          fill={color}
        />
        <path
          d="M12 .5C18.352.5 23.5 5.648 23.5 12S18.352 23.5 12 23.5.5 18.352.5 12 5.648.5 12 .5zM1.75 12c0 5.662 4.588 10.25 10.25 10.25S22.25 17.662 22.25 12 17.662 1.75 12 1.75 1.75 6.338 1.75 12z"
          fill="#000"
          stroke={color}
        />
      </g>
      <defs>
        <clipPath id="hkrw99lp1a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
