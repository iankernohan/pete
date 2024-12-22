export default function RoofLogo({
  width = 200,
  color = "#f8ce78",
  style = {},
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="svg2"
      width={width}
      height={width * 0.47}
      version="1.1"
      viewBox="0 0 346.679 162.825"
      style={style}
    >
      <defs id="defs6">
        <clipPath id="clipPath16" clipPathUnits="userSpaceOnUse">
          <path id="path14" d="M0 122.119h260.009V0H0Z"></path>
        </clipPath>
      </defs>
      <g id="g8" transform="matrix(1.33333 0 0 -1.33333 0 162.825)">
        <g id="g10">
          <g id="g12" clipPath="url(#clipPath16)">
            <g id="g18" transform="translate(124.68 73.39)">
              <path
                id="path20"
                fill={color}
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c45.048-24.262 90.281-48.308 135.329-72.614-12.732 13.643-28.844 23.96-42.085 37.084l-.236 36.799c.036 2.155.041 4.31-.042 6.459-8.472 0-16.945.086-25.417.172 0-7.166-.139-14.332-.139-21.499C44.492 5.354 22.131 24.824-.324 44.25-41.437 7.685-83.753-27.672-124.68-64.455-83.058-43.084-41.575-21.456 0 0"
              ></path>
            </g>
            <path
              id="path22"
              fill={color}
              fillOpacity="1"
              fillRule="nonzero"
              stroke="none"
              d="M121.856 0h-21.204v18.736h21.204z"
            ></path>
            <path
              id="path24"
              fill={color}
              fillOpacity="1"
              fillRule="nonzero"
              stroke="none"
              d="M149.936 0h-21.205v18.736h21.205z"
            ></path>
            <path
              id="path26"
              fill={color}
              fillOpacity="1"
              fillRule="nonzero"
              stroke="none"
              d="M121.856 23.917h-21.204v18.736h21.204z"
            ></path>
            <path
              id="path28"
              fill={color}
              fillOpacity="1"
              fillRule="nonzero"
              stroke="none"
              d="M149.936 23.917h-21.205v18.736h21.205z"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
}
