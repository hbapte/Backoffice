import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type InventoryWhereInput = {
  id?: StringFilter;
  lastRestockedDate?: DateTimeNullableFilter;
  product?: ProductWhereUniqueInput;
  quantityAvailable?: IntNullableFilter;
};
