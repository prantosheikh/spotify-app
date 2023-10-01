import Sidebar from "@/components/Sidebar";
import ModalProvider from "@/providers/ModalProvider";
import SupabaseProviders from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify App",
  description: "Listen to music!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SupabaseProviders>
          <ModalProvider />
          <UserProvider>
            <Sidebar>{children}</Sidebar>
          </UserProvider>
        </SupabaseProviders>
      </body>
    </html>
  );
}
