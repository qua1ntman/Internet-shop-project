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
  discount?: number;
}

export interface ICategoryData {
  id: number;
  title: string;
  description: string | null;
  thumbnail: string | null;
  subcategories: ISubCategoryData[];
}

export interface ISubCategoryData {
  id: number,
  title: string,
  description: string | null,
  thumbnail: string | null
  products?: IProductData[]
}

export interface IProductData {
  id: number,
  brand: string,
  description: string | null,
  thumbnail: string | null,
  images: string[],
  new: boolean,
  color: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  colors: any,
  price: number,
  material: string | string[],
  collection: string,
  kind: string,
  discount: number
  size: number[] | string[]
}

export interface IProductDataAndAmount {
  id: number,
  brand: string,
  description: string | null,
  thumbnail: string | null,
  images: string[],
  new: boolean,
  color: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  colors: any,
  price: number,
  material: string | string[],
  collection: string,
  kind: string,
  discount: number
  size: number | string
  amount: number
}

export interface ITeamItem {
  name: string;
  position: string;
  activity: string;
  target: string;
};

export interface IProject {
  functionality: string;
  text: string;
}

export interface ITechnologyItem {
  technology: string;
  description: string;
}