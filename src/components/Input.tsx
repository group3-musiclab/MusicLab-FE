import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  placeholder?: string;
}

const Input = ({ id, placeholder, ...props }: InputProps) => {
  return (
    <>
      <input
        id={id}
        placeholder={placeholder}
        type="text"
        className="bg-white rounded-lg text-black p-2 border focus:outline-none focus:ring-1 focus:ring-black"
        {...props}
      />
    </>
  );
};

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id?: string;
  label?: string;
  placeholder?: string;
  value?: string;
}

const TextArea = ({
  id,
  label,
  placeholder,
  value,
  ...props
}: TextAreaProps) => {
  return (
    <>
      <label>{label}</label>
      <textarea
        id={id}
        className="textarea textarea-bordered"
        placeholder={placeholder}
        value={value}
        {...props}
      />
    </>
  );
};

export { Input, TextArea };
