import {ProductFilter} from "./components/ProductFilter";
import {ProductSort} from "./components/ProductSort";
import {ProductPaginate} from "./components/ProductPaginate";
import {TextField} from "../../components/ui/Input/TextField";
import { PRODUCTS_MOCK } from "../../data/mockProducts";
import { ProductCard } from "./components/ProductCard";

export const ProductList = () => {
	return (
		<>
			{/*header*/}
			<div className="flex items-center justify-between py-3 gap-3">
				<div className="w-full max-w-108">
					<TextField />
				</div>
				<div className="flex items-center gap-2">
					<ProductFilter />
					<ProductSort />
				</div>
			</div>

			{/*prduct list*/}
			<div className="grid auto-rows-fr grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3">
				{ PRODUCTS_MOCK.map((product) => (
					<ProductCard key={product.id} product={product} />
				)) }
			</div>

			{/*pagination*/}
			<ProductPaginate />
		</>
	)
}
