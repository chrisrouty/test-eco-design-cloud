import { Breadcrumb } from '../components/ui/Breadcrumb'
import {Title} from "../components/ui/Title";
import {Paragraph} from "../components/ui/Paragraph";
import {Line} from "../components/ui/Line";
import {Button} from "../components/ui/Button";
import {Plus} from "lucide-react";
import clsx from "clsx";
import {ProductList} from "../features/products/ProductList";

export const CurrentProjects = () => {
  return (
    <div className="space-y-8">
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'My current projects' },
        ]}
      />
      <div className={clsx(
        'flex flex-col gap-2',
        'md:flex-row md:items-end md:justify-between',
      )}>
        <div className="flex flex-col gap-2 w-full">
          <Title level={1}>My current projects</Title>
          <Paragraph size="sm">This feature shows a list of all the projects you are currently working on.</Paragraph>
        </div>
        <div className="shrink-0">
          <Button>
            <Plus
              aria-hidden="true"
              className="size-5 text-content-main"
              strokeWidth={2.4}
            />
            Create a new project
          </Button>
        </div>
      </div>
      <Line />
      <div className={clsx(
        'bg-black/24 border border-white/10 p-4 rounded-lg',
      )}>
        <ProductList />
      </div>
    </div>
  )
}
