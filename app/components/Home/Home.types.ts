export interface CartItem {
  _id: string;
  __v?: number;
  name: string;
  price: number;
  image: string;
  ingredients?: Array<string>;
  description?: string;
  size?: string;
  amount?: number;
}

export interface Order {
  _id: string;
  order_id: string;
  cart: Array<CartItem>;
  address: {
    city: string;
    postcode: string;
    address: string;
    phone: string;
  };
  totalPrice: number;
  paymentSuccess: boolean;
  date: Date;
  status: string;
}

export interface VievType {
  state: {
    isLoading: boolean;
    orders: Array<Order>;
  };
}
