import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string;
  label?: string;
  loading?: boolean;
}

const Button = ({ id, label, loading, ...props }: ButtonProps) => {
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
