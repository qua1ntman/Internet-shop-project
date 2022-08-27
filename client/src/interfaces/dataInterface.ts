export interface ICategory {
  name: string;
  subCategories: ISubCategory[];
}

export interface ISubCategory {
  name: string;
  products: IProduct[];
}

export interface IProduct {
  id: number;
  brand: string;
  material: string[];
  collection: string;
  status: string;
  title: string;
  kind: string | string[];
  color: string;
  price: number;
  size: string[] | number[];
  image: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  colors?: any;
  discount?: number
}
