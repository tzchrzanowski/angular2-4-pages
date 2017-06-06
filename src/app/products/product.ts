	export interface IProduct {
		productId: number;
		productName: string;
		platform: string;
		releaseDate: string;
		price: number;
		description: string;
		starRating: number;
		imageUrl: string;
		//calculateDiscount (percent: number): number;
	}