import React from 'react';
import { FaCheck } from 'react-icons/fa';

export const BenefitItem = ({ text }) => {
  return (
    <div className="flex gap-2 mt-1">
      <FaCheck className="shrink-0 w-6 h-6 text-cyan-400" />
      <div className="my-auto">{text}</div>
    </div>
  );
}
