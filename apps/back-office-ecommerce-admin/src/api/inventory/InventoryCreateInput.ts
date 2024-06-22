import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type InventoryCreateInput = {
  lastRestockedDate?: Date | null;
  product?: ProductWhereUniqueInput | null;
  quantityAvailable?: number | null;
};
