import localFont from "next/font/local";
import "./globals.css";

export const avenir = localFont({
  src: "../public/fonts/Avenir.ttf",
  variable: "--font-avenir",
});

export const beaufort = localFont({
  src: "../public/fonts/Beaufort.otf",
  variable: "--font-beaufort",
});

export const metadata = {
  title: "Summoner Frames - Configurator",
  description: "Create your own Summoner Frames",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${avenir.variable} ${beaufort.variable}`}
      data-theme="custom-dark"
    >
      <body className="antialiased ">{children}</body>
    </html>
  );
}
