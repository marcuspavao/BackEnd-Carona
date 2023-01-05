import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  await prisma.car.deleteMany({});
  await prisma.ride.deleteMany({});
  await prisma.rider.deleteMany({});

  const riders = await prisma.rider.createMany({
    data: [
      {
        id: '92eafa52-cc9b-42f7-9ce2-966af0ac0769',
        email: 'alice@prisma.com',
        name: 'Alice',
        cpf: '11702378608',
        password: '1234',
        passwordConfirmation: '1234',
      },
      {
        id: '4e6a8ae7-df7a-44f5-b5b6-89f00681793f',
        name: 'Lyla',
        cpf: '1180230945',
        email: 'fernandes@gmail.com',
        password: '3333',
        passwordConfirmation: '333',
      },
      {
        id: '9c53e3f2-579e-4192-8409-c16ed3d38473',
        name: 'Marcus',
        cpf: '33333333',
        email: 'pavao@gmail.com',
        password: '1111',
        passwordConfirmation: '1111',
      },
      {
        id: '52c0dfe7-0a91-49a8-aa76-5d60a77be418',
        name: 'Roberto',
        cpf: '22222222',
        email: 'roberto@gmail.com',
        password: '2222',
        passwordConfirmation: '2222',
      },
    ],
  });

  const cars = await prisma.car.createMany({
    data: [
      {
        id: '2b06b984-2389-4100-ac4e-a4020e8723e5',
        model: 'Lambo',
        modelYear: '2000/2011',
        plate: 'HJS-3231',
        riderId: '52c0dfe7-0a91-49a8-aa76-5d60a77be418',
      },
      {
        id: 'bcf5aca4-7209-473a-a690-f6ddf55f61c5',
        model: 'Ferrari',
        modelYear: '1999/2000',
        plate: 'FSA-4321',
        riderId: '9c53e3f2-579e-4192-8409-c16ed3d38473',
      },
      {
        id: '36b2bec6-8ca2-11ed-a1eb-0242ac120002',
        model: 'Uno',
        modelYear: '2005/2006',
        plate: 'RMS-9786',
        riderId: '92eafa52-cc9b-42f7-9ce2-966af0ac0769',
      },
    ],
  });

  await prisma.rider.update({
    where: { id: '52c0dfe7-0a91-49a8-aa76-5d60a77be418' },
    data: { carId: '2b06b984-2389-4100-ac4e-a4020e8723e5' },
  });

  await prisma.rider.update({
    where: { id: '92eafa52-cc9b-42f7-9ce2-966af0ac0769' },
    data: { carId: '36b2bec6-8ca2-11ed-a1eb-0242ac120002' },
  });

  await prisma.rider.update({
    where: { id: '9c53e3f2-579e-4192-8409-c16ed3d38473' },
    data: { carId: 'bcf5aca4-7209-473a-a690-f6ddf55f61c5' },
  });

  const rides = await prisma.ride.createMany({
    data: [
      {
        id: '9c4fb69e-8ca2-11ed-a1eb-0242ac120002',
        arrivalLocal: 'Ouro Preto',
        departureDate: new Date('1999-09-20 22:00:20'),
        arrivingDate: new Date('1999-09-19 23:00:21'),
        departureLocal: 'Mariana',
        info: 'Arena',
        riderId: '92eafa52-cc9b-42f7-9ce2-966af0ac0769',
      },
      {
        id: '9c4fb946-8ca2-11ed-a1eb-0242ac120002',
        arrivalLocal: 'Mariana',
        arrivingDate: new Date('1999-09-19 17:00:21'),
        departureDate: new Date('1999-09-20 17:00:20'),
        departureLocal: 'Ouro Preto',
        info: 'Saindo da praça da sé',
        riderId: '9c53e3f2-579e-4192-8409-c16ed3d38473',
      },
      {
        id: '9c4fbbb2-8ca2-11ed-a1eb-0242ac120002',
        arrivalLocal: 'Ouro Preto',
        arrivingDate: new Date('2022-09-20 22:40:41'),
        departureDate: new Date('2022-09-20 22:00:10'),
        departureLocal: 'Mariana',
        info: 'Vou até a UFOP',
        riderId: '52c0dfe7-0a91-49a8-aa76-5d60a77be418',
      },
      ,
    ],
  });

  console.log(riders, cars, rides);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
