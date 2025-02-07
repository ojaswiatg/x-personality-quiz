import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "X Personality Quiz",
    description: "Created by Arsh",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html data-theme="dim" lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen overflow-hidden`}
            >
                {children}
                <Footer />
            </body>
        </html>
    );
}
