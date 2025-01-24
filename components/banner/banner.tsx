import Image from "next/image"

// Banner.tsx
export function Banner() {
  return (
    <div className="container relative mx-auto">
      <div className=" flex flex-col items-center md:justify-center"
     
      >
        <Image
        src="/pegasus12.webp"
        alt="Banner"
        width={840}
        height={500}
        className="object-cover   bg-no-repeat bg-cover bg-center rounded-3xl"
        />
      </div>
    </div>
  );
}
