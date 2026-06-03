import { Modal } from '../../../../components/ui/Modal'
import { Label } from '../../../../components/ui/Label'
import { ecoScoreClassName } from '../../../../utils/ecoScoreClassName'
import { pefMetrics } from './pefMetrics'
import { ProductModalProps } from './type'
import {Button} from "../../../../components/ui/Button";

export const ProductModal = ({
  isOpen,
  onClose,
  product
}: ProductModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={product.name}>
      <div className="flex flex-col gap-5">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="flex flex-col gap-2 rounded-lg border border-white/10 bg-glass/20 p-3">
            <Label className="text-content-paragraph">Eco score</Label>
            <p className={`mt-2 inline-flex w-fit rounded-md px-3 py-1 text-lg font-semibold ${ecoScoreClassName[product.ecoScore]}`}>
              {product.ecoScore}
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-glass/20 p-3">
            <Label className="text-content-paragraph">Updated</Label>
            <p className="mt-1 text-sm font-semibold">
              {new Date(product.updatedAt).toLocaleDateString('fr-FR')}
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          {pefMetrics.map( (metric) => (
            <div
              className="flex items-center justify-between gap-3 border-t border-white/10 px-3 py-3"
              key={metric.key}
            >
              <Label className="text-content-paragraph">{metric.label}</Label>
              <span className="text-sm font-semibold">
                {product.pef[metric.key]} {metric.unit}
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-end">
          <Button onClick={onClose}>
            Fermer
          </Button>
        </div>
      </div>
    </Modal>
  )
}
