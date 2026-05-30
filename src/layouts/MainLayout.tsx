import clsx from 'clsx'
import { HomeView } from '../views/HomeView'

const mainClassName = clsx(
  'min-h-screen bg-background p-6 text-foreground',
  'sm:p-8',
  'md:p-10',
)

export const MainLayout = () => {
  return (
    <main className={mainClassName}>
      <HomeView />
    </main>
  )
}
