import faker from 'faker'

export default (options) => {
  return {
    order   :faker.random.number() % 8,
    type    :faker.internet.userName(),
    heading :faker.lorem.sentence(),
    subtitle:faker.lorem.sentence(),
    content :faker.lorem.paragraphs(2),
    media   :faker.image.imageUrl(),
    cta     :faker.company.bs(),
    image   :{
      alt     :faker.lorem.sentence(),
      fullPath:faker.image.imageUrl(),
    },
    flag1:true,
    flag2:true,
    ...options

  }
}

