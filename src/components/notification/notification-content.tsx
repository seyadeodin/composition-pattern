interface NotificationContentProps {
  text: string;
}

export function NotificationContent({ text }: NotificationContentProps) {
  return (
        <div className="flex-1 flex flex-col gap-2">
          <p className="text-sm leading-relaxed dark:text-zinc-100 text-zinc-900">
            {text}
          </p>
          <div className="text-2xs dark:text-zinc-400 text-zinc-500 flex items-center gap-2">
            <span>Convite</span>
            <span>Há 3 min</span>
          </div>
        </div>
  )
}
