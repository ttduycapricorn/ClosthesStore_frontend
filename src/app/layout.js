import { Jost } from 'next/font/google';
import { Toaster } from 'sonner';
import 'bootstrap/dist/css/bootstrap.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'tippy.js/dist/tippy.css';
import 'react-range-slider-input/dist/style.css';

import FooterComponent from '@/layouts/footer';
import HeaderComponent from '@/layouts/header';

import './globals.css';

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export const roboto_Jostmono = Jost({
    subsets: ['latin'],
    display: 'swap',
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={roboto_Jostmono.className}>
                <Toaster position="top-center" />
                <HeaderComponent />
                {children}
                <FooterComponent />
            </body>
        </html>
    );
}