import { Poppins, Chakra_Petch } from 'next/font/google'

export const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const chakraPetch = Chakra_Petch({
  weight: ['400', '600', '700'],  // ajuste os pesos conforme sua necessidade
  subsets: ['latin'],
  display: 'swap',
})