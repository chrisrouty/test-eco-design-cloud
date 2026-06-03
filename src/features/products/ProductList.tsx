import { useMemo, useState } from 'react'
import { TextField } from '../../components/ui/Input/TextField'
import { PRODUCTS_MOCK } from '../../data/mockProducts'
import { EcoScore, Product } from '../../types/products'
import { ProductCard } from './components/ProductCard'
import { ProductFilter } from './components/ProductFilter'
import { ProductScoreFilter } from './components/ProductFilter/type'
import { ProductPaginate } from './components/ProductPaginate'
import { ProductSort } from './components/ProductSort'
import { ProductSortValue } from './components/ProductSort/type'
import clsx from "clsx";

const scoreValue: Record<EcoScore, number> = {
	A: 1,
	B: 2,
	C: 3,
	D: 4,
	E: 5,
}

const filterProductsByScore = (
	products: Product[],
	filter: ProductScoreFilter
): Product[] => {
	if (filter === 'A-B') {
		return products.filter((product) => product.ecoScore === 'A' || product.ecoScore === 'B')
	}

	if (filter === 'C-D') {
		return products.filter((product) => product.ecoScore === 'C' || product.ecoScore === 'D')
	}

	if (filter === 'E') {
		return products.filter((product) => product.ecoScore === 'E')
	}

	return products
}

const sortProducts = (
	products: Product[],
	sort: ProductSortValue
): Product[] => {
	return [...products].sort((firstProduct, secondProduct) => {
		if (sort === 'score-asc') {
			return scoreValue[firstProduct.ecoScore] - scoreValue[secondProduct.ecoScore]
		}

		if (sort === 'score-desc') {
			return scoreValue[secondProduct.ecoScore] - scoreValue[firstProduct.ecoScore]
		}

		if (sort === 'name') {
			return firstProduct.name.localeCompare(secondProduct.name)
		}

		return new Date(secondProduct.updatedAt).getTime() - new Date(firstProduct.updatedAt).getTime()
	})
}

export const ProductList = () => {
	const [scoreFilter, setScoreFilter] = useState<ProductScoreFilter>('all')
	const [productSort, setProductSort] = useState<ProductSortValue>('score-asc')

	const products = useMemo(() => {
		return sortProducts(filterProductsByScore(PRODUCTS_MOCK, scoreFilter), productSort)
	}, [scoreFilter, productSort])

	return (
		<>
			<div className={clsx(
				'flex flex-col items-center justify-between py-3 gap-3',
				'md:flex-row'
			)}>
				<div className={clsx(
					'w-full',
					'md:max-w-108'
				)}>
					<TextField />
				</div>
				<div className={clsx(
					'flex items-center gap-2 w-full',
					'md:w-fit'
				)}>
					<ProductFilter onChange={setScoreFilter} value={scoreFilter} />
					<ProductSort onChange={setProductSort} value={productSort} />
				</div>
			</div>

			<div className="grid auto-rows-fr grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3">
				{ products.map((product) => (
					<ProductCard key={product.id} product={product} />
				)) }
			</div>

			<ProductPaginate />
		</>
	)
}
