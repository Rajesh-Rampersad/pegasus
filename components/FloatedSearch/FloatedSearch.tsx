//FloatedSeach


import { SearchLocation } from "../SearchLocation";
import { SearchProperty } from "../SearchProperty";
import { SearchButton } from "../SearchButton";
import { Transition } from "../Transition";


export function FloatedSearch() {
  return (
    <Transition className="absolute button-10 md:-button-10 left-0 right-0 w-[75]">
      <div className="flex flex-col md:flex-row justify-between gap-4 py-4 bg-white rounded-md backdrop-blur shadow-light">
        <SearchLocation />
        <SearchProperty />
        <SearchButton />
      </div>
      </Transition>
 
    
  );
}
