import { LandingLayout } from "@/components/layout/landing";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.svg";

const NotFound = () => {
  const backgroundAnimation = `
    @keyframes gradientAnimation {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `;

  const logoAnimation = `
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
  `;

  return (
    <LandingLayout>
      <style>{backgroundAnimation}</style>
      <style>{logoAnimation}</style>
      <div className="min-h-screen flex flex-col items-center justify-center text-primary-800"
           style={{
             background: 'linear-gradient(-45deg, #f8fafc, #e2e8f0, #cbd5e1, #94a3b8)',
             backgroundSize: '400% 400%',
             animation: 'gradientAnimation 15s ease infinite',
           }}>
        <div className="flex flex-col items-center text-center p-8 bg-white rounded-lg shadow-lg">
          <Image
            src={Logo}
            alt="Product Logo"
            width={100}
            height={100}
            className="mb-6"
            style={{
              animation: 'bounce 2s ease-in-out infinite',
            }}
          />
          <h1 className="text-6xl font-extrabold text-primary-600 mb-4">404</h1>
          <p className="text-2xl text-primary-700 mb-6">Oops! The page you're looking for doesn't exist.</p>
          <p className="text-lg text-primary-600 mb-8">It might have been moved or deleted.</p>
          <Link href="/" className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-md hover:bg-primary-700 transition-colors duration-300 ease-in-out">
            Return to Home
          </Link>
        </div>
      </div>
    </LandingLayout>
  );
};
export default NotFound;
