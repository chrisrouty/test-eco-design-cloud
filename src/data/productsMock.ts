import {Product} from "../types/products";

export const PRODUCTS_MOCK: Product[] = [
	{
		id: 'prod-001',
		name: 'T-shirt en Coton Biologique',
		ecoScore: 'A',
		updatedAt: '2026-05-15T08:30:00Z',
		pef: {
			climateChange: 2.5,
			waterUse: 45,
			resourceUse: 1.2,
			uac: 0.15
		}
	},
	{
		id: 'prod-002',
		name: 'Jean Denim Standard',
		ecoScore: 'D',
		updatedAt: '2026-05-12T14:15:00Z',
		pef: {
			climateChange: 15.4,
			waterUse: 2500,
			resourceUse: 5.8,
			uac: 0.72
		}
	},
	{
		id: 'prod-003',
		name: 'Gourde en Inox Isotherme',
		ecoScore: 'A',
		updatedAt: '2026-05-20T09:00:00Z',
		pef: {
			climateChange: 1.8,
			waterUse: 12,
			resourceUse: 2.1,
			uac: 0.08
		}
	},
	{
		id: 'prod-004',
		name: 'Chaise de Bureau Ergonomique',
		ecoScore: 'C',
		updatedAt: '2026-05-02T11:45:00Z',
		pef: {
			climateChange: 28.0,
			waterUse: 180,
			resourceUse: 8.4,
			uac: 0.45
		}
	},
	{
		id: 'prod-005',
		name: 'Bureau en Bois Certifié FSC',
		ecoScore: 'B',
		updatedAt: '2026-05-18T16:20:00Z',
		pef: {
			climateChange: 12.5,
			waterUse: 60,
			resourceUse: 3.2,
			uac: 0.22
		}
	},
	{
		id: 'prod-006',
		name: 'Smartphone Reconditionné',
		ecoScore: 'B',
		updatedAt: '2026-05-25T10:00:00Z',
		pef: {
			climateChange: 9.2,
			waterUse: 35,
			resourceUse: 4.0,
			uac: 0.18
		}
	},
	{
		id: 'prod-007',
		name: 'Chargeur Solaire Portable',
		ecoScore: 'B',
		updatedAt: '2026-05-22T13:10:00Z',
		pef: {
			climateChange: 4.1,
			waterUse: 22,
			resourceUse: 6.5,
			uac: 0.29
		}
	},
	{
		id: 'prod-008',
		name: 'Câble USB Standard',
		ecoScore: 'E',
		updatedAt: '2026-04-30T17:40:00Z',
		pef: {
			climateChange: 7.8,
			waterUse: 95,
			resourceUse: 9.1,
			uac: 0.85
		}
	},
	{
		id: 'prod-009',
		name: 'Sac à Dos Recyclé',
		ecoScore: 'A',
		updatedAt: '2026-05-19T07:15:00Z',
		pef: {
			climateChange: 3.8,
			waterUse: 28,
			resourceUse: 1.9,
			uac: 0.11
		}
	},
	{
		id: 'prod-010',
		name: 'Bouteilles Plastique (Pack de 6)',
		ecoScore: 'E',
		updatedAt: '2026-05-24T11:00:00Z',
		pef: {
			climateChange: 18.2,
			waterUse: 450,
			resourceUse: 11.2,
			uac: 0.95
		}
	}
];