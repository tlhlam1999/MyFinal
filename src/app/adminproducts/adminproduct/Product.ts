export interface Product {
    IDProduct: string;
    IDProductType: string;
    IDProvider: string;
    ProductName: string;
    Barcode: string;
    Image: [];
    Price: number;
    Discription: string;
    Rating: number;
    Disabled: boolean;
    Stock: number,
    PriceIn: number;
}