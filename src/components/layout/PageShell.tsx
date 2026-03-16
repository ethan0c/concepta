import Header from "@/components/Header";
import Footer from "./Footer";

interface PageShellProps {
  children: React.ReactNode;
  currentPage?: string;
  headerTheme?: "default" | "light" | "transparent";
  pageClassName?: string;
  mainClassName?: string;
}

export default function PageShell({
  children,
  currentPage,
  headerTheme = "default",
  pageClassName = "bg-[var(--color-page-bg)]",
  mainClassName = "pt-16 sm:pt-20",
}: PageShellProps) {
  return (
    <div className={`min-h-screen ${pageClassName}`}>
      <Header currentPage={currentPage} theme={headerTheme} />
      <main className={mainClassName}>{children}</main>
      <Footer />
    </div>
  );
}