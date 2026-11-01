import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <div className="bg-glow-gold top-[10%] left-[-15%]" />
      <div className="bg-glow-emerald top-[50%] right-[-15%]" />

      <Navbar />

      <div className="page-container">{children}</div>

      <Footer />
    </div>
  );
}
