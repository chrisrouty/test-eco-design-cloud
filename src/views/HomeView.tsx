import { Breadcrumb } from '../components/ui/Breadcrumb'
import {Title} from "../components/ui/Title";
import {Paragraph} from "../components/ui/Paragraph";
import {Line} from "../components/ui/Line";

export const HomeView = () => {
  return (
    <div className="space-y-8">
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'My current projects' },
        ]}
      />
      <div className="flex flex-col gap-2">
        <Title level={1}>My current projects</Title>
        <Paragraph>This feature shows a list of all the projects you are currently working on.</Paragraph>
        <Line />
      </div>
    </div>
  )
}
