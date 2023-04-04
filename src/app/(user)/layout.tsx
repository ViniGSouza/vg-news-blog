import { Rubik } from "next/font/google";
import Header from "@/components/Header";
import "../../styles/globals.css";
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
      <body className={`${rubik.className} bg-[#0B1118]`}>
        <Header />
        <div className="mx-auto mb-4 mt-36 max-w-7xl">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
