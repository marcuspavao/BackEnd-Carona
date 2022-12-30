import { InMemoryRideRepository } from '../../../../test/repositories/in-memory-rides-repository';
import { CreateRide } from './create-ride';

describe('Create Ride', () => {
  it('should be able to send a ride', async () => {
    const rideRepository = new InMemoryRideRepository();
    const createRide = new CreateRide(rideRepository);

    const { ride } = await createRide.execute({
      arrivalLocal: 'Mariana',
      arrivingDate: '2020/08/08',
      departureDate: '2020/09/09',
      departureLocal: 'Ouro Preto',
      info: 'Saindo da arena',
      riderId: 'fa6854ce-86ef-11ed-a1eb-0242ac120002',
    });

    expect(rideRepository.rides).toHaveLength(1);
    expect(rideRepository.rides[0]).toEqual(ride);
  });
});
