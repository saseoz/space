'use client';
import Header from "./components/header/page";
import "./globals.css";
import { usePathname } from 'next/navigation';


export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  const path = usePathname();

  const pageClass = () => {
    switch (path) {
      case '/destination':
        return 'destination-bg';
      case '/crew':
        return 'crew-bg';
      case '/tech':
        return 'tech-bg';
      default:
        return 'home-bg';
    }
  };

  return (
    <html lang="en">
      <body className={`${pageClass()} flex min-h-screen text-white bg-no-repeat bg-cover`}>
        <div className="flex flex-col w-full">
          <Header />
          <main className="flex h-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
