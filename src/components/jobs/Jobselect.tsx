// components/Select.tsx
import { ChangeEvent, FC } from "react";

interface SelectProps {
  options: string[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const JobSelect: FC<SelectProps> = ({ options, onChange }) => {
  return (
    <select
      title="_"
      onChange={onChange}
      className="w-full p-2 border border-gray-300 rounded-md shadow-sm mt-4 focus:outline-none focus:border-blue-500"
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default JobSelect;
