import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  orderDate?: Date | null;
  product?: ProductWhereUniqueInput | null;
  status?: "Option1" | null;
};
