import { Order } from "../order/Order";

export type Customer = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orders?: Array<Order>;
  phoneNumber: string | null;
  updatedAt: Date;
};
