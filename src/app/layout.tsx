import type { Metadata } from "next";
import { Norican, Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/NavBar/NavBar";
import Footer from "@/components/shared/Footer/Footer";
import { Toaster } from "sonner";

const poppinsSans = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ["400", "500", "600", "700", "800"],
});

const noricanSans = Norican({
    subsets: ["latin"],
    variable: "--font-norican",
    weight: ["400"],
});

export const metadata: Metadata = {
    title: "Mahfuz Zayn - Portfolio",
    description:
        "Hey, I'm a Frontend Developer skilled in Next.js, React.js, Redux, Node.js, and MongoDB, building fast, dynamic, and scalable web applications.",
    icons: {
        icon: "/favicon-32x32.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${poppinsSans.className} ${noricanSans.variable} antialiased`}
            >
                <main className="main-layout container max-w-[1920px] mx-auto">
                    <NavBar />
                    {children}
                    <Footer />
                    <h1>For Debugging Purpose</h1>
                </main>
                <Toaster richColors />
            </body>
        </html>
    );
}
