import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './theme-provider'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

const metadataUA: Metadata = {
  title: {
    default: 'Опера пасаж готель та апартаменти',
    template: '%s | Опера пасаж готель та апартаменти'
  },
  description: 'Опера Пасаж готель та апартаменти.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon.png",
  },
  keywords:
    "готель, апартаменти, Львів, сніданки, парковка, контакти, правила.",
}

const metadataEN: Metadata = {
  title: {
    default: 'Opera Passage hotel and apartments',
    template: '%s | Opera Passage hotel and apartments'
  },
  description: 'Opera Passage hotel and apartments.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon.png",
  },
  keywords:
    "hotel, apartments, Lviv, breakfast, parking, contacts, rules.",
}

export async function generateMetadata({ params }: { params: any }) {
  return params.lang === "en-US" ? metadataUA : metadataEN;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shorcut icon" href="./favicon.ico" />
        <meta name="robots" content="all" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
