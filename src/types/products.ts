export type EcoScore = 'A' | 'B' | 'C' | 'D' | 'E';

export interface ProductPef {
	climateChange: number;
	waterUse: number;
	resourceUse: number;
	uac: number;
}

export interface Product {
	id: string;
	name: string;
	ecoScore: EcoScore;
	updatedAt: string;
	pef: ProductPef;
}