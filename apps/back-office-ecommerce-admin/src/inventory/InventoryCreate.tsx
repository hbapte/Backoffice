import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { ProductTitle } from "../product/ProductTitle";

export const InventoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="LastRestockedDate" source="lastRestockedDate" />
        <ReferenceInput source="product.id" reference="Product" label="Product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <NumberInput
          step={1}
          label="QuantityAvailable"
          source="quantityAvailable"
        />
      </SimpleForm>
    </Create>
  );
};
