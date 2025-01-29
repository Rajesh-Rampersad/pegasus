//FloatedSeach


import { SearchLocation } from "../SearchLocation";
import { SearchProperty } from "../SearchProperty";
import { SearchButton } from "../SearchButton";
// import { Transition } from "../Transition";


export function FloatedSearch() {
  return (
  
    <div className="flex flex-col md:flex-row justify-between gap-4 py-4 bg-gray-900/50 backdrop-blur rounded-md text-white"> 
      <SearchLocation />
      <SearchProperty />
      <SearchButton />
</div>
 
    
  );
}
