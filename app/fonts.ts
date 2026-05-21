import { Barlow, Barlow_Condensed, Bebas_Neue, Inter } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

export const barlow = Barlow({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-barlow',
});

export const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  display: 'swap',
  weight: ['700', '800', '900'],
  variable: '--font-barlow-condensed',
});

export const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-bebas-neue',
});

export const fontVariables = [
  inter.variable,
  barlow.variable,
  barlowCondensed.variable,
  bebasNeue.variable,
].join(' ');
