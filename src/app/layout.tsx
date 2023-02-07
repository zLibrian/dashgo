import { Roboto } from '@next/font/google';
import { Chakra } from '@/context/chakra';

type RootLayoutProps = {
  children: React.ReactNode;
};

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head />
      <body className={roboto.className}>
        <Chakra>{children}</Chakra>
      </body>
    </html>
  );
}
