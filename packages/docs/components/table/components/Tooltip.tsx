import React from "react";
import Operations from "../helper/Operations";
import BaseTable from "./BaseTable";
import { RawTableColumns } from "@hesaba/table";
import { Typography } from "@material-ui/core";
import faker from "faker";

export const simpleRows = [...Array.from({ length: 40 }, (_, i) => i)].map(
  (item) => {
    return {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      phoneNumber: faker.phone.phoneNumber(),
      address: faker.address.streetAddress(),
      timeZone: faker.address.timeZone(),

      avatar: faker.image.avatar(),
      email: faker.internet.email(),

      jobTitle: faker.name.jobTitle(),
      jobDescriptor: faker.name.jobDescriptor(),
      business: faker.image.business(),
    };
  }
);

type keys = typeof simpleRows[number];

const FirstTooltipComponent = ({ tooltipData }: any) => {
  return (
    <div style={{ backgroundColor: "#FFF" }}>
      <img src={tooltipData.avatar} style={{ width: 64, height: 64 }} />
      <Typography color="primary">{tooltipData.phoneNumber}</Typography>
      <Typography color="primary">{tooltipData.address}</Typography>
      <Typography color="primary">{tooltipData.timeZone}</Typography>
    </div>
  );
};

export const simpleSchemaColumns: RawTableColumns<keys> = [
  {
    label: "firstName",
    key: "firstName",
    TooltipComponent: FirstTooltipComponent,
  },
  {
    label: "lastName",
    key: "lastName",
  },
  {
    label: "email",
    key: "email",
  },
  {
    label: "address",
    key: "address",
    type: "tooltip",
    reference: "firstName",
  },
  {
    label: "timeZone",
    key: "timeZone",
    type: "tooltip",
    reference: "firstName",
  },
  {
    label: "phoneNumber",
    key: "phoneNumber",
    type: "tooltip",
    reference: "firstName",
  },
  {
    label: "avatar",
    key: "avatar",
    type: "tooltip",
    reference: "firstName",
  },
  {
    label: "jobTitle",
    key: "jobTitle",
    type: "string",
  },
  {
    label: "jobDescriptor",
    key: "jobDescriptor",
    type: "tooltip",
    reference: "jobTitle",
  },
  {
    label: "business",
    key: "business",
    type: "tooltip",
    reference: "jobTitle",
  },
];

export function SimpleTooltip() {
  return (
    <BaseTable
      title="Table Title"
      VTToolbarProps={{ height: 50 }}
      columns={simpleSchemaColumns}
      rows={simpleRows}
    />
  );
}
