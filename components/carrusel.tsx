"use client";

import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "./ui/card";

// Datos para el carrusel
const carouselData = [
  {
    id: 1,
    image: "/images/carousel-1.jpg",
    title: "Envío en 24/48 horas",
    description: "Como cliente VIP, tus envíos en 24/48 horas. Obtén más información y únete.",
    link: "#!",
  },
  {
    id: 2,
    image: "/images/carousel-2.jpg",
    title: "Consigue hasta un -25% en compras superiores a $40",
    description: "Descuentos especiales para ti y tus compradores. ¡Conoce más!",
    link: "#!",
  },
  {
    id: 3,
    image: "/images/carousel-3.jpg",
    title: "Devoluciones y entregas gratuitas",
    description: "Accede a toda la información de nuestra tienda virtual. ¿Quieres comprar ahora?",
    link: "#!",
  },
  {
    id: 4,
    image: "/images/carousel-4.jpg",
    title: "Compra novedades",
    description: "Si tienes dudas o consultas, no dudes en contactarnos. Estamos a tu disposición.",
    link: "#!",
  },
];

const CarouselBanner = () => {
  const router = useRouter();

  return (
    <div className="bg-gray-200 dark:bg-primary py-6">
      <Carousel
        className="w-full max-w-4xl mx-auto"
        plugins={[
          Autoplay({
            delay: 3500,
          }),
        ]}
      >
        <CarouselContent>
          {carouselData.map(({ id, title, description, link }) => (
            <CarouselItem
              key={id}
              onClick={() => router.push(link)}
              className="flex flex-col justify-center items-center cursor-pointer"
            >
              <Card className="shadow-none border-none bg-transparent">
                <CardContent className="flex flex-col justify-center p-4 items-center text-center">
                  <h2 className="text-lg sm:text-xl font-semibold dark:text-secondary">
                    {title}
                  </h2>
                  <p className="mt-2 text-sm sm:text-base dark:text-secondary">
                    {description}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselBanner;
