import { Timestamp } from "firebase/firestore";

export interface IProduct {
  id: string;
  name: string;
  price: number;
  status: string;
  category: string;
  desc?: string;
  images?: string[],
  createdAt?: Timestamp;
  deleted?: boolean;
}

export interface IAddProduct {
  name: string;
  price: number;
  status: string;
  category: string;
  desc?: string;
  images?: string[]
}
