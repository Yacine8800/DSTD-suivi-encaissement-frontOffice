import React from 'react';

export type IndicateurCadreProps = {
  title: string;
  value: string;
};

const IndicateurCadre = ({ title, value }: IndicateurCadreProps) => {
  return (
    <div className="min-w-[170px] w-full h-[80px] border-1 bg-[#FFFFFF] border-gray-400 rounded-[5px] m-2">
      <div className="p-3">
        <p className="font-open-sans text-[14px] lg:text-[13px] leading-[19.07px] text-left text-gray-600">
          {title}
        </p>
        <p className="font-open-sans text-[14px] lg:text-[13px] font-bold leading-[22px] text-left text-gray-900">
          {value} {'FCFA'}
        </p>
      </div>
    </div>
  );
};

export default IndicateurCadre;
