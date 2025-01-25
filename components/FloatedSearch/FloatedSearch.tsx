//FloatedSeach

import { Transition } from "../Transition";
import { SearchLocation } from "../SearchLocation";
import { SearchProperty } from "../SearchProperty";
import { SearchButton } from "../SearchButton";

export function FloatedSearch() {
  return (
    <Transition className="absolute bottom-10 left-0 right-0 w-[75%] mx-auto">
      <div className="flex flex-col md:flex-row justify-between gap-4 py-4 bg-white rounded-md backdrop-blur shadow-light">
        <SearchLocation />
        <SearchProperty />
        <SearchButton />
      </div>
    </Transition>
  );
}
