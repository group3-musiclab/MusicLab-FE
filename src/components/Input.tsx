import { InputHTMLAttributes, TextareaHTMLAttributes, FC } from "react";
import { icons } from "react-icons/lib";

interface Props extends InputHTMLAttributes<HTMLElement> {
  id: string;
}

const Input: FC<Props> = ({ id, ...props }) => {
  return (
    <input
      id={id}
      className="bg-white rounded-lg text-black focus:outline-none focus:ring-1 focus:ring-black"
      {...props}
    />
  );
};

export default Input;

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
