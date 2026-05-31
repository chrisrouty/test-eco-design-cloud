import clsx from 'clsx'
import { CurrentProjects } from '../views/currentProjects'

const mainClassName = clsx(
  'min-h-screen bg-background p-6',
  'sm:p-8',
  'md:p-10',
)

export const MainLayout = () => {
  return (
    <main className={mainClassName}>
      <CurrentProjects />
    </main>
  )
}
