import "./globals.css";
import Prehero from "./Components/p~reHero";

export const metadata = {
  title: "Tech Evangelism",
  description: "Bridging the digital divide, One skill at a time",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Prehero />
        {children}
      </body>
    </html>
  );
}
