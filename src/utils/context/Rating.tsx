import React from "react";

export default function Rating() {
  return <div>Rating</div>;
}

// import React, { FC, useState } from "react";

// interface RatingProps {
//   className?: string;
//   count: number;
//   value: number;
//   color?: string;
//   hoverColor?: string;
//   activeColor?: string;
//   size?: string;
//   edit?: string;
//   isHalf?: string;
//   onChange?: (value: number) => void;
//   emptyIcon?: React.ReactElement;
//   halfIcon?: React.ReactElement;
//   fullIcon?: React.ReactElement;
// }

// interface IconProps {
//   size?: number;
//   color?: string;
// }

// const FullStar = ({ size = 34, color = "#000000" }: IconProps) => {
//   return (
//     <>
//       <div style={{ color: color }}>
//         <svg height={size} viewBox="0 0 24 24">
//           <path
//             d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
//             fill="currentColor"
//           />
//           <path d="M0 0h24v24H0z" fill="none" />
//         </svg>
//       </div>
//     </>
//   );
// };

// const HalfStar = ({ size = 24, color = "#000000" }: IconProps) => {
//   return (
//     <>
//       <div style={{ color: color }}>
//         <svg height={size} viewBox="0 0 24 24">
//           <path
//             d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
//             fill="currentColor"
//           />
//           <path d="M0 0h24v24H0z" fill="none" />
//         </svg>
//       </div>
//     </>
//   );
// };

// const EmptyStar = ({ size = 24, color = "#000000" }: IconProps) => {
//   return (
//     <>
//       <div style={{ color: color }}>
//         <svg height={size} viewBox="0 0 24 24">
//           <path
//             d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
//             fill="currentColor"
//           />
//           <path d="M0 0h24v24H0z" fill="none" />
//         </svg>
//       </div>
//     </>
//   );
// };

// const Rating: FC<RatingProps> = ({
//   className,
//   count,
//   color = "#ffd700",
//   hoverColor = "#ffc107",
//   activeColor = "#ffc107",
//   size = 30,
//   edit = false,
//   isHalf = true,
//   onChange,
//   emptyIcon = <EmptyStar />,
//   halfIcon = <HalfStar />,
//   fullIcon = <FullStar />,
// }) => {
//   const [hoverValue, setHoverValue] = useState<number | undefined>(undefined);

//   const handleMouse = (index: number) => {
//     if (!edit) {
//       return;
//     }
//     setHoverValue(index);
//   };

//   const handleMouseLeave = () => {
//     if (!edit) {
//       return;
//     }
//     setHoverValue(undefined);
//   };

//   const handleClick = (index: number) => {
//     if (!edit) {
//       return;
//     }
//     if (onChange) {
//       onChange(index + 1);
//     }
//   };

//   const starts = [];

//   for (let i = 0; i < count; i++) {
//     let stars: React.ReactElement;
//     if (isHalf && 5 - i > 0 && 5 - i < 1) {
//       stars = halfIcon;
//     } else if (i < 5) {
//       stars = fullIcon;
//     } else {
//       stars = emptyIcon;
//     }

//     if (hoverValue !== undefined) {
//       if (i <= hoverValue) {
//         stars = fullIcon;
//       }
//     }

//     stars.push(
//       <div
//         key={i}
//         style={{ cursor: "pointer" }}
//         onMouseMove={() => handleMouse(i)}
//         onMouseLeave={handleMouseLeave}
//         onClick={() => handleClick(i)}
//       >
//         {React.cloneElement(stars, {
//           size: size,
//           color:
//             i <= Number(hoverValue) ? hoverColor : i < 5 ? activeColor : color,
//         })}
//       </div>
//     );
//   }

//   return <div></div>;
// };
