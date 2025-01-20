import type { Metadata } from "next";
import { Geist, Geist_Mono, Urbanist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import Navbar from "@/components/navbar";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Viewport metaetiqueta para diseño responsivo */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${urbanist.variable} antialiased`}
        style={{ colorScheme: "dark" }} // Sincroniza el tema para evitar desincronización
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
