import faker from 'faker';
// import faker from 'faker/locale/en';
export const LoremIpsum =
  'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.';

export const shortVersion = 'Contrary to popular belief';

export const loremShort = faker.lorem.lines(1);
// export const vendors = [
//   {
//     title,
//   },
// ];

export const vendors = [...Array(5)].map((_, index) => ({
  _id: faker.datatype.uuid(),
  image: faker.image.abstract(40, 40),
  title: faker.commerce.productName(),
  description: faker.commerce.department(),
}));

export const products = [...Array(8)].map((_, index) => ({
  _id: faker.datatype.uuid(),
  title: faker.commerce.productName(),
  price: faker.commerce.price(10, 60, 1, '$'),
  rating: faker.datatype.number(120),
  description: faker.commerce.productAdjective(),
  isFavourite: faker.datatype.boolean(),
  image: `assets/prod${index + 1}.jpg`,
}));

export const decreaseBy = [1, 5, 4, 3, 1, 5, 4, 3, 1, 5, 4, 3, 1, 5, 4, 3];
