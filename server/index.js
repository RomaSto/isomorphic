const faker = require('faker');

module.exports = () => {
  const db = {};
  db.scrapers = [];
  for (let i = 0; i < 1000; i += 1) {
    db.scrapers.push({
      name: faker.name.findName(),
      id: faker.random.number(),
      image: faker.image.business(),
      lastExecution: faker.date.past(),
      duration: faker.random.number(),
      locations: faker.random.number(),
      link: faker.internet.url(),
      warnings: faker.random.number(),
      errors: faker.random.number(),
      status: faker.random.number() % 2 === 0 ? 'Disabled' : 'Active',
    });
  // const randomName = faker.name.findName(); // Rowan Nikolaus
  // const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
  }
  return db;
};
