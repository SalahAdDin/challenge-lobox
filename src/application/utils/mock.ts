import { ListItem } from "@domain/list.dto";
import { faker } from "@faker-js/faker";

const generateMockedListItem = (): ListItem => ({
  label: faker.lorem.sentence(),
  value: faker.datatype.uuid(),
});

const generateMockedList = (amount = 5): ListItem[] =>
  Array.from({ length: amount }, generateMockedListItem);

export default {
  generateMockedListItem,
  generateMockedList,
};
