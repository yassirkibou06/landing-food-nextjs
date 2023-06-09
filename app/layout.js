import './globals.css';
import icon from "../public/fav.ico";

export const metadata = {
  title: 'Food',
  description: 'Generated by create next app',
  icons: {
    icon: "/fav.ico"
  },
}

export default function RootLayout({
  children
}) {
  return (
    <html >
      <head >
      <link rel="shortcut icon" href="#" />
      </head>
      <body dir="rtl">
        {children}
      </body>
    </html>
  )
}