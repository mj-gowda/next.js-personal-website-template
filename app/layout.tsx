"use client"
import "../styles/globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ThemeProvider } from "next-themes"

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body>
      <div className="dark:bg-zinc-700">
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          <div>
          {children}
          </div>
          <Footer />
        </ThemeProvider>
      </div>
    </body>
    </html>
  )
}
