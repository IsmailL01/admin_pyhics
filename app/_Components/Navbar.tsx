import Link from 'next/link';
import React from 'react';

const fields = [
  {
    path: 'Programmist',
    text: 'Профессиональные заболеавния',
  },
  {
    path: 'pyhics',
    text: 'Сайты по физике',
  },
];

const Navbar = () => {
  return (
    <div className='w-full flex justify-center items-center gap-4 bg-gray-800'>
      {fields.map((field) => {
        return (
          <div key={field.path}>
            <Link href={field.path}>
              <p>{field.text}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
