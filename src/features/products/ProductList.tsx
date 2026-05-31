import {ProductFilter} from "./components/ProductFilter";
import {ProductSort} from "./components/ProductSort";
import {ProductPaginate} from "./components/ProductPaginate";
import {TextField} from "../../components/ui/Input/TextField";

export const ProductList = () => {
	return (
		<>
			<div className="flex items-center justify-between py-3 gap-3">
				<div className="w-full max-w-108">
					<TextField />
				</div>
				<div className="flex items-center gap-2">
					<ProductFilter />
					<ProductSort />
				</div>
			</div>
			<div>
				content
			</div>
			<ProductPaginate />
		</>
	)
}