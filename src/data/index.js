import faker from 'faker';
// import faker from 'faker/locale/en';

export const LoremIpsum =
  'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.';

export const shortVersion = 'Contrary to popular belief';

export const loremShort = faker.lorem.lines(1);
export const loremlong = faker.lorem.paragraph(5);
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

export const products = [...Array(45)].map((_, index) => ({
  dummyId: 123,
  _id: faker.datatype.uuid(),
  title: faker.commerce.productName(),
  price: faker.commerce.price(10, 60, 0, '$'),
  rating: faker.datatype.number(120),
  description: faker.commerce.productAdjective(),
  isFavourite: faker.datatype.boolean(),
  image: `assets/prod${index + 1}.jpg`,
  type: 'product',
}));

export const services = [...Array(4)].map((_, index) => ({
  dummyId: 123,
  _id: faker.datatype.uuid(),
  title: 'Signature Thai Massage',
  price: faker.commerce.price(30, 70, 1, '$'),
  oneHourRate: `60-min (U.P. ${faker.commerce.price(120, 200, 1, '$')})`,
  rating: faker.datatype.number(500),
  isFavourite: faker.datatype.boolean(),
  description: 'Service from Bamboo Spa',
  image: `assets/serv${index + 1}.svg`,
  type: 'service',
}));

export const productsB = [...Array(4)].map((_, index) => ({
  dummyId: 123,
  _id: faker.datatype.uuid(),
  title: faker.commerce.productName(),
  price: faker.commerce.price(10, 60, 1, '$'),
  rating: faker.datatype.number(120),
  description: 'Product from Bamboo Spa',
  isFavourite: faker.datatype.boolean(),
  image: `assets/prod${index + 1}.jpg`,
  type: 'product',
}));

export const cartProd = [...Array(2)].map((_, index) => ({
  dummyId: 123,
  _id: faker.datatype.uuid(),
  title: faker.commerce.productName(),
  price: faker.commerce.price(10, 60, 1, '$'),
  rating: faker.datatype.number(120),
  description: 'Product from Bamboo Spa',
  isFavourite: faker.datatype.boolean(),
  image: `assets/prod${index + 1}.jpg`,
  type: 'product',
}));

export const cartServ = [...Array(2)].map((_, index) => ({
  dummyId: 123,
  _id: faker.datatype.uuid(),
  title: faker.commerce.productName(),
  price: faker.commerce.price(10, 60, 1, '$'),
  rating: faker.datatype.number(120),
  description: 'Product from Bamboo Spa',
  isFavourite: faker.datatype.boolean(),
  image: `assets/prod${index + 1}.jpg`,
  type: 'service',
  date: faker.date.recent(3, new Date()),
}));

export const mixedProdServ = [...productsB, ...services];

export const decreaseBy = [1, 5, 4, 3, 1, 5, 4, 3, 1, 5, 4, 3, 1, 5, 4, 3];

export const bannerContent = [...Array(4)].map((_, index) => ({
  _id: faker.datatype.uuid(),
  title:
    index === 1 || index === 3
      ? 'Welcome To the Royal Thai Spa'
      : 'Welcome to Land of Smiles',
  description: faker.lorem.lines(3),
}));

export const dropDownNumbers = [...Array(8)].map((_, index) => index + 1);
