import React, { useState } from 'react';

import Processor from '../../interfaces/Processor';
import GraphicsCard from '../../interfaces/GraphicsCard';

interface DetailsDisplayProps {
  details: Processor['details'] | GraphicsCard['details'];
}

const DetailsDisplay = (props: DetailsDisplayProps) => {
  const { details } = props;
  const [selectedCategory, setSelectedCategory] = useState<
    keyof Omit<Processor['details'] | GraphicsCard['details'], 'key_points'>
  >(
    Object.keys(details)[1] as keyof Omit<
      Processor['details'] | GraphicsCard['details'],
      'key_points'
    >
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { key_points, ...categories } = details;
  console.log(categories[selectedCategory]);

  return (
    <div>
      <div className='grid grid-flow-col auto-cols-max'>
        {Object.values(details)
          .filter((section) => !Array.isArray(section))
          .map((section, idx) => {
            return (
              <div
                key={idx}
                className={`p-4 font-bold text-lg${
                  idx === 0 ? ' border border-b-0' : ''
                }`}>
                {section.section_name}
              </div>
            );
          })}
      </div>
      <div className='grid grid-cols-3 gap-4 border text-sm p-8'>
        {Object.values(categories[selectedCategory].data).map((detail, idx) => {
          return (
            <div key={idx} className='flex gap-2'>
              <span className='inline font-bold'>{detail[0]}:</span>
              <span>{detail[1]}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailsDisplay;
