import { Button } from '../../../../components/ui/Button'
import { Card } from '../../../../components/ui/Card'
import { Title } from '../../../../components/ui/Title'
import { ProductCardProps } from './type'
import { ecoScoreClassName } from './utils'
import { Label } from "../../../../components/ui/Label";

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="flex h-full flex-col gap-3">
      <div className="flex flex-col gap-1">
        <Title className="text-base" level={4}>
          { product.name }
        </Title>
      </div>

      <div className="flex flex-col gap-2 border-t border-white/5 pt-2">
        <div className="flex items-center justify-between">
          <Label className="text-content-paragraph">Updated</Label>
          <span className="text-sm font-semibold">{ new Date(product.updatedAt).toLocaleDateString('fr-FR') }</span>
        </div>
        <div className="flex items-center justify-between ">
          <Label className="text-content-paragraph">Eco score</Label>
          <span className={`rounded-md px-2 py-1 text-sm font-semibold ${ecoScoreClassName[product.ecoScore]}`}>
            { product.ecoScore }
          </span>
        </div>
      </div>


      <Button className="mt-auto" size="sm" variant="glass">
        Show detail
      </Button>
    </Card>
  )
}
