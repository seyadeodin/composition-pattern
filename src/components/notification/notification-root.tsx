import { ReactNode } from "react";

interface NotificationRootProps {
  children: ReactNode
}

export function NotificationRoot({ children }: NotificationRootProps) {
    return(
      <div className="dark:bg-zinc-900 bg-zinc-100 px-8 py-4 flex items-start gap-6">
        {children}
      </div>
    )
}

