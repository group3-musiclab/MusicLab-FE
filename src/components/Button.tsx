import React, { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string;
  label?: string;
  loading?: boolean;
  icon?: JSX.Element;
}

const Button: FC<ButtonProps> = ({ id, label, loading, icon, ...props }) => {
  return (
    <div>
      <button
        id={id}
        className={`${
          loading &&
          "btn w-full mt-4 bg-customcyan text-white disabled:bg-gray-300 disabled:text-gray-500 border-0"
        }`}
        disabled={loading}
        {...props}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
