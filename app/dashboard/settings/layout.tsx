"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navigation = [
    { name: "Profile", href: "/dashboard/settings/profile" },
    { name: "Appearance", href: "/dashboard/settings/appearance" },
    { name: "Billing", href: "/dashboard/settings/billing" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Settings</h1>
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
        <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
          <nav className="space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  ${pathname === item.href
                    ? "bg-gray-50 text-blue-700 hover:bg-white"
                    : "text-gray-900 hover:text-gray-900 hover:bg-gray-50"}
                  group rounded-md px-3 py-2 flex items-center text-sm font-medium
                `}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                <span className="truncate">{item.name}</span>
              </Link>
            ))}
          </nav>
        </aside>

        <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
          {children}
        </div>
      </div>
    </div>
  );
}

