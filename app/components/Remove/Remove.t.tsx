export interface PizzaType {
  _id: string;
  name: string;
  ingredients: Array<string>;
  price: number;
  image: string;
  [prop: string]: any;
}

export interface SauceType {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  [prop: string]: any;
}
