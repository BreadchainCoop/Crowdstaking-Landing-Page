import type { Metadata, Viewport } from "next"
import { Kufam } from "next/font/google"
import "./globals.css"

const kufam = Kufam({
  subsets: ["latin"],
  variable: "--font-kufam",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Crowdstaking - Community-Powered Funding Protocol",
  description:
    "Transform any pool of money into a democratic, interest-generating engine for your group's shared goals. Open source, free, and customizable.",
}

export const viewport: Viewport = {
  themeColor: "#E8713A",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${kufam.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
