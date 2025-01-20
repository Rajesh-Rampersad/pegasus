import CarouselBanner from "@/components/carrusel";
import CoverParticles from "@/components/cover-particles";
import Image from "next/image";

export default function Home() {

    return (
      <div className="h-screen bg-gradient-cover flex flex-col items-center justify-center text-center text-foreground">
        <CoverParticles />
        {/* <Image
          src="/pegasus1.jpg"
          alt="PegasusSportware Logo"
          width={200}
          height={200}
          className="mb-4"
        /> */}
        <h1 className="text-5xl font-bold mb-4">
          Bienvenido a PegasusSportware
        </h1>
        <p className="text-lg max-w-xl">
          Confección de ropa deportiva y sublimación personalizada. También
          ofrecemos banderas, gorras, camisas deportivas y empresariales.
        </p>
        <CarouselBanner />
        
      </div>
    );
}
