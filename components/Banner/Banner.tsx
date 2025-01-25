import Image from "next/image";
import { FloatedSearch } from "@/components/FloatedSearch"

export function Banner() {
  return (
    <div className="container relative mx-auto">
      {/* Contenedor de la imagen con posición relativa */}
      <div className="relative w-full h-[80vh] rounded-3xl overflow-hidden">
        {/* Imagen de fondo */}
        <Image
          src="/pngwing.com.png"
          alt="Banner"
          layout="fill"
          objectFit="cover"
          className="rounded-3xl"
        />

        {/* Contenedor del texto sobre la imagen */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-5 bg-black/50 rounded-3xl">
          <h1 className="text-3xl text-white font-bold drop-shadow-lg">
            Pegasus Sportware - Roupa Esportiva e Sublimação
          </h1>
          <p className="text-white font-semibold max-w-2xl mt-4 drop-shadow-lg">
            Com mais de 6 anos de experiência na produção de uniformes esportivos em todas as modalidades, trazendo a melhor qualidade e serviços aos nossos clientes.
          </p>
        </div>
        <FloatedSearch />
      </div>
    </div>
  );
}
