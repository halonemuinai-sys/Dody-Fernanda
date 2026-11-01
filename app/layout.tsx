import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dody Fernanda — Senior Purchasing & Procurement Professional | Cost Control Portfolio",
  description: "Senior Purchasing & Procurement Professional with 12+ years of experience in vendor sourcing, commercial negotiation, cost control, COGS, and inventory management.",
  keywords: [
    "Dody Fernanda",
    "Senior Purchasing",
    "Procurement Specialist",
    "Buyer",
    "Cost Control",
    "COGS",
    "ALSOK Indonesia",
    "A3000 Group",
    "CGV Cinemas",
    "KFC",
    "PT Fast Food Indonesia",
    "Supply Chain",
    "Portfolio"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
