import { copyText as t } from "./copy";

export function AnalyticsOverview() {
  return (
    <div className="mt-8 bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">{t.overview.title}</h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>{t.overview.description}</p>
        </div>
      </div>
    </div>
  );
}
