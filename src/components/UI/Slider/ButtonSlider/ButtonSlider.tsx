import React from "react";
import "./ButtonSlider.scss";

export const ButtonSlider: React.FC<{
  position: "left" | "right";
  status: "active" | "unactive";
  onClick: React.MouseEventHandler;
}> = ({ position, status, onClick }) => {
  let icon;
  let style = "slider-button";

  if (position === "left") {
    icon = (
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0_189_4824)'>
          <path
            d='M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z'
            fill='currentColor'
          />
        </g>
        <defs>
          <clipPath id='clip0_189_4824'>
            <rect width='24' height='24' fill='white' />
          </clipPath>
        </defs>
      </svg>
    );
  }
  if (position === "right") {
    icon = (
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0_98_1152)'>
          <path
            d='M8.59003 16.59L13.17 12L8.59003 7.41L10 6L16 12L10 18L8.59003 16.59Z'
            fill='currentColor'
          />
        </g>
        <defs>
          <clipPath id='clip0_98_1152'>
            <rect width='24' height='24' fill='white' />
          </clipPath>
        </defs>
      </svg>
    );
  }

  if (status === "active") {
    style = "slider-button-active";
  }

  if (status === "unactive") {
    style = "slider-button-unactive";
  }

  return (
    <button className={style} onClick={onClick}>
      {icon}
    </button>
  );
};
