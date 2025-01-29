import { useState } from "react";
import { GrLocation, GrFormDown, GrFormUp } from "react-icons/gr";

export function SearchLocation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between cursor-pointer text-white hover:bg-gray-100" 
      onClick={() => setIsOpen(!isOpen)} 
      aria-haspopup="listbox" 
      aria-expanded={isOpen} 
      role="button" 
    >
      <GrLocation />
      <div>
        <p>Localição</p>
        <p className="text-xs">Seleciona sua sua Localição</p>
      </div>
      {isOpen ? <GrFormUp /> : <GrFormDown />}
    </div>
  );
}
