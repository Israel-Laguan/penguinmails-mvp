import { copyText as t } from "./copy";

export function Header() {
  return (
    <h1 className="text-2xl font-semibold text-gray-900">{t.pageTitle}</h1>
  );
}
