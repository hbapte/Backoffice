import { SortOrder } from "../../util/SortOrder";

export type InventoryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  lastRestockedDate?: SortOrder;
  productId?: SortOrder;
  quantityAvailable?: SortOrder;
  updatedAt?: SortOrder;
};
