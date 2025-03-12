import {Lato} from "next/font/google";
import "./globals.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";

const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

export const metadata = {
  title: "Nacar_bisuteria",
  description: "Explora productos hechos con amor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable}  antialiased`}
      >
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
