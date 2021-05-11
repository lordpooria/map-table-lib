import { RawTableColumns } from "../../src";
import faker from "faker";

export const simpleRows = [...Array.from({ length: 40 }, (_, i) => i)].map(
  (item) => {
    return {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      phoneNumber: faker.phone.phoneNumber(),
      gender: faker.name.gender(),
      avatar: faker.image.avatar(),
      email: faker.internet.email(),

      jobTitle: faker.name.jobTitle(),
      jobDescriptor: faker.name.jobDescriptor(),
      business: faker.image.business(),
    };
  }
);

type keys = typeof simpleRows[number];

export const simpleSchemaColumns: RawTableColumns<keys> = [
  {
    label: "firstName",
    key: "firstName",
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
    label: "gender",
    key: "gender",
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
