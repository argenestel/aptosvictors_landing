import { Inter ,Climate_Crisis, DM_Mono, Lato, Big_Shoulders_Stencil_Text } from 'next/font/google'

const cc = Climate_Crisis({
  subsets: ['latin'],
  variable: '--font-cc',
  display: 'swap',
})
 
const dm_mono = DM_Mono({
  weight:['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dmmono',
})

const lato = Lato({
  weight:['100','300','400','700'],
  style:['italic','normal'],
  subsets:['latin','latin-ext'],
  variable: '--font-lato',
})

const bsst = Big_Shoulders_Stencil_Text({
  weight:['900'],
  subsets:['latin'],
  variable:'--font-bsst'
})

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aptos Victors",
  description: "Welcome to Playsphere, a cutting-edge web3 organization that specializes in gaming, web3 superapp development on the Aptos blockchain, and a variety of other exciting projects. We are passionate about pushing the boundaries of what's possible in the world of decentralized technology.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${cc.variable} ${dm_mono.variable} ${lato.variable} ${bsst.variable}`}>{children}</body>
    </html>
  );
}
