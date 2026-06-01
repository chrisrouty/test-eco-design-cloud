import clsx from 'clsx'
import { ChevronRight } from 'lucide-react'
import { JSX } from 'react'
import { BreadcrumbProps } from './type'

export const Breadcrumb = ({ items, className }: BreadcrumbProps): JSX.Element => {

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ul className="flex flex-wrap items-center font-medium">

        {items.map((item, index) => {

          const isCurrent = index === items.length - 1

          return (
            <li
              className="flex items-center gap-2 text-content-main"
              key={`${item.label}-${index}`}
            >
              {index > 0 && (
                <ChevronRight
                  aria-hidden="true"
                  size={16}
                  className="text-content-main"
                />
              )}

              {item.href && !isCurrent ? (
                <a
                  className="flex h-[32px] items-center rounded-lg p-2 text-xs font-semibold text-content-muted hover:underline hover:underline-offset-4"
                  href={item.href}
                >
                  {item.label}
                </a>
              ) : (
                <span
                  className={clsx(
                    isCurrent && 'text-sm underline underline-offset-4 text-content-main'
                  )}
                >
                  {item.label}
                </span>
              )}
            </li>
          )

        })}

      </ul>
    </nav>
  )
}
