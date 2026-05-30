import clsx from 'clsx'
import { ChevronRight } from 'lucide-react'
import { JSX } from 'react'
import { Button } from '../Button'
import { BreadcrumbProps } from './type'

export const Breadcrumb = ({ items, className }: BreadcrumbProps): JSX.Element => {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ul className="flex flex-wrap items-center font-medium">

        {items.map((item, index) => {

          const isCurrent = index === items.length - 1

          return (
            <li
              className="flex items-center gap-2"
              key={`${item.label}-${index}`}
            >
              {index > 0 && (
                <ChevronRight
                  aria-hidden="true"
                  className="size-4 text-content-main"
                  strokeWidth={2.4}
                />
              )}

              {item.href && !isCurrent ? (
                <Button
                  className="h-auto p-0 text-content-muted"
                  href={item.href}
                  variant="link"
                >
                  {item.label}
                </Button>
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
