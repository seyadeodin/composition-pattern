'use client'
import { Check, Rocket, X } from 'lucide-react'
import { Notification } from './notification'

export function Widget() {

  return (
    <div className="w-[448px] rounded overflow-hidden">
      {/* HEADER */}
      <div className="dark:bg-zinc-800 bg-zinc-200 py-4 px-6 flex items-center justify-between">
        <span className="font-bold">Notificações</span>
        <button className="text-violet-500 uppercase font-bold text-xs hover:text-violet-400">marcar todas como vistas</button>
      </div>
      {/* RECENT SECTION */}
      <div>
        <div className="dark:bg-zinc-950 bg-zinc-50 px-5 py-2 text-sm text-zinc-400 dark:text-zinc-400">
          Recentes
        </div>

        <Notification.Root>
          <Notification.Icon icon={Rocket} />
          <Notification.Content text="Você recebeu um convite para a empresa RacketPocket"/>
          <Notification.Actions>
            <Notification.Action icon={X}/>
            <Notification.Action icon={Check} className="bg-violet-500 hover:bg-violet-600 dark:bg-violet-500 dark:hover:bg-violet-600"/>
          </Notification.Actions>
        </Notification.Root>

        <Notification.Root>
          <Notification.Content text="Você recebeu um convite para a empresa RacketPocket"/>
        </Notification.Root>


      </div>

      {/* OLDER SECTION */}
      <div>
        <div className="dark:bg-zinc-950 bg-zinc-50 px-5 py-2 text-sm text-zinc-400 dark:text-zinc-400">
          Antigas
        </div>

        <Notification.Root>
          <Notification.Content text="Você recebeu um convite para a empresa RacketPocket"/>
          <Notification.Actions/>
        </Notification.Root>

        <Notification.Root>
          <Notification.Icon icon={Rocket} />
          <Notification.Content text="Você recebeu um convite para a empresa RacketPocket"/>
        </Notification.Root>

    </div>
  </div>
  )
}
