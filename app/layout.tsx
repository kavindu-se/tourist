import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"]
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://serenesrilanka.example"),
  title: {
    default: "Sri Lanka Tours | Premium Travel Experiences",
    template: "%s | Serene Sri Lanka"
  },
  description:
    "Discover Sri Lanka with curated beach escapes, wildlife safaris, cultural heritage tours, and luxury hill-country itineraries.",
  keywords: [
    "Sri Lanka tourism",
    "Sri Lanka tours",
    "Sri Lanka travel packages",
    "Sri Lanka safari",
    "Sri Lanka beach holidays",
    "Sri Lanka itinerary"
  ],
  openGraph: {
    title: "Serene Sri Lanka",
    description: "Premium Sri Lanka tourism experiences crafted by local experts.",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 900,
        alt: "Sri Lanka coastline"
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${manrope.variable} ${playfair.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
