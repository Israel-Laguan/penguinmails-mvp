import { toast } from "sonner";
import { ReactNode } from "react";

type CustomToastOptions = {
  title: string;
  description?: string;
  icon?: ReactNode;
};

export const showCustomToast = ({ title, description, icon }: CustomToastOptions) => {
  toast.custom(() => (
    <div className="p-4 border border-gray-700 rounded-lg bg-white dark:bg-zinc-900 shadow-md w-full max-w-sm">
      <div className="flex items-start gap-3">
        {icon && <div className="mt-1">{icon}</div>}
        <div className="flex flex-col">
          <p className="font-medium text-gray-900 dark:text-white">{title}</p>
          {description && <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>}
        </div>
      </div>
    </div>
  ));
};
