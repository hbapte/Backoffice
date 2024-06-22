import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderWhereInput = {
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  orderDate?: DateTimeNullableFilter;
  product?: ProductWhereUniqueInput;
  status?: "Option1";
};
