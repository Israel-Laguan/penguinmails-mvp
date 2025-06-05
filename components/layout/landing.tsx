import Navbar from "../landing/navbar";
import Footer from "../landing/footer";
import GoToTopButton from "../landing/go-to-top";

export const LandingLayout = ({ children, fullWidth = false }: { children: React.ReactNode; fullWidth?: boolean }) => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen items-center">
        <div className={`w-full ${fullWidth ? "px-0" : "max-w-7xl md:px-0"}`}>{children}</div>
      </main>
      <Footer />
      <GoToTopButton />
    </>
  );
};
