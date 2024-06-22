import { Customer } from "../customer/Customer";
import { Product } from "../product/Product";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  orderDate: Date | null;
  product?: Product | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
