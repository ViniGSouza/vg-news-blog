import { Rubik } from "next/font/google";
import Header from "@/components/Header";
import "../../styles/globals.css";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'VG News - Your Tech Blog',
  description: 'Created by Vinicius Gonçalves.',
}

const rubik = Rubik({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${rubik.className} max-w-7xl mx-auto`}>
        <Header />
        <Banner />
          {children}
        <Footer />
      </body>
    </html>
  )
}
