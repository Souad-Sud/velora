export type ProductVariant = {
    id: number;
    image: string;
    title?: string;
    color?: string;
    parfume?: string;
    size?: string;
    price?: number;
}

export type Summerproducts = {
    id: number;
    title: string;
    description: string;
    color?: string;
    price: number;
    image: string;
    size?: string;
    variants:  ProductVariant[];
}