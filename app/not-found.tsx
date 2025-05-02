import { LandingLayout } from "@/components/layout/landing";
import Link from "next/link";

const NotFound = () => {
  return (
    <LandingLayout>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
          <Link href="/">Return to Home</Link>
        </div>
      </div>
    </LandingLayout>
  );
};

export default NotFound;
