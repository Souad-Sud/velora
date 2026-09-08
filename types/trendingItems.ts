export type TrendingItemsVariant = {
    id: number;
    image: string;
};

export type TrendingItems = {
    id: number;
    image : string;
    title: string;
    description: string;
    color?: string;
    price: number;
    size?: string;
    variants: TrendingItemsVariant[];
}