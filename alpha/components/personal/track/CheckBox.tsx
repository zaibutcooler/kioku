import React from "react";
import { IoCheckmarkOutline } from "react-icons/io5";

interface CheckboxProps {
  checked: boolean;
  onChange?: (value: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
  return (
    <div
      className="cursor-pointer"
      onClick={() => onChange && onChange(!checked)}>
      <div
        className={`w-[14px] h-[14px] flex items-center justify-center rounded border border-gray-300 ${
          checked ? "bg-slate-600 border-slate-600" : "bg-white"
        }`}>
        {checked && <IoCheckmarkOutline className="text-white w-4 h-4" />}
      </div>
    </div>
  );
};

export default Checkbox;
