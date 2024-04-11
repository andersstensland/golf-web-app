import React from 'react';
import viktor from "../bilder/viktor2.jpeg"
import Image from 'next/image';

const Header = () => {
  return (
    <div
        className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center">
         
    <div
    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
    <div className="flex h-full items-center justify-center">
      <div className="text-white">
        <h2 className="mb-4 text-4xl font-semibold">Heading</h2> 
      </div>
    </div>
  </div>
</div>
  );
};

export default Header;
