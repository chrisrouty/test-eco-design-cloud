import clsx from 'clsx'
import { X } from 'lucide-react'
import { JSX, useEffect, useRef } from 'react'
import { Button } from '../Button'
import { Title } from '../Title'
import { ModalProps } from './type'

export const Modal = ({
  children,
  className = '',
  isOpen,
  onClose,
  title
}: ModalProps) => {

  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (isOpen) {
      dialog.showModal()
    } else {
      dialog.close()
    }
  }, [isOpen])

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className={clsx(
        'fixed inset-0 m-auto max-h-[90vh] w-full max-w-[95%] md:max-w-xl flex-col overflow-hidden rounded-lg',
        'text-content-main border border-white/10 bg-background shadow-2xl p-0',
        'backdrop:bg-black/60 backdrop:backdrop-blur-sm',
        className,
      )}
    >
      <header className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
        <Title className="text-lg" level={3}>
          {title}
        </Title>
        <Button
          aria-label="Close modal"
          className="size-8 p-0"
          onClick={onClose}
          size="sm"
          type="button"
          variant="glass"
        >
          <X aria-hidden="true" size={16} />
        </Button>
      </header>

      <div className="overflow-y-auto p-5">
        {children}
      </div>
    </dialog>
  )
}
