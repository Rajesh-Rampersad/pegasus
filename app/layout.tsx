import type { Metadata } from "next";
import { Geist, Geist_Mono, Urbanist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import Image from "next/image";



const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PegasusSportware - Ropa Deportiva y Sublimación",
  description:
    "PegasusSportware es tu tienda ideal para confección de ropa deportiva, sublimación personalizada, y venta de productos como banderas de diferentes países, gorras, camisas deportivas, empresariales y más.",
  keywords: [
    "PegasusSportware",
    "ropa deportiva",
    "sublimación",
    "banderas",
    "gorras personalizadas",
    "camisas deportivas",
    "camisas empresariales",
    "ropa personalizada",
  ],
  author: "PegasusSportware Team",
  openGraph: {
    title: "PegasusSportware - Ropa Deportiva y Sublimación",
    description:
      "Descubre ropa deportiva de calidad, sublimación personalizada, banderas de diferentes países y más en PegasusSportware.",
    // url: "https://www.pegasussportware.com", // Ajusta esta URL según tu dominio
    // images: [
    //   {
    //     url: "/pegasus1.jpg", // Imagen representativa de la marca
    //     width: 800,
    //     height: 600,
    //     alt: "PegasusSportware Logo",
    //   },
    // ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "PegasusSportware - Ropa Deportiva y Sublimación",
  //   description: "PegasusSportware: Ropa deportiva, sublimación y más.",
  //   image: "/pegasus1.jpg", // URL de la imagen para Twitter
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${urbanist.variable} antialiased text-white relative h-screen w-full`}>
        {/* Imagen de fondo */}
        <Image
          src="/blackGrey.jpg" // Reemplaza con la ruta correcta de tu imagen
          alt="Fondo PegasusSportware"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="-z-10"
        />
        
        {/* Contenido de la app */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
