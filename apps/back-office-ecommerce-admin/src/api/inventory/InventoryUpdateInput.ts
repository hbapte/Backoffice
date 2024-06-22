import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type InventoryUpdateInput = {
  lastRestockedDate?: Date | null;
  product?: ProductWhereUniqueInput | null;
  quantityAvailable?: number | null;
};
