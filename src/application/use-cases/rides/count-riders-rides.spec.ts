import { CountRides } from './count-riders-rides';
import { makeRide } from '../../../../test/factories/rides-factory';
import { InMemoryRideRepository } from '../../../../test/repositories/in-memory-rides-repository';

describe('Get recipient notifications', () => {
  it('should be able to recipient notifications', async () => {
    const rideRepository = new InMemoryRideRepository();
    const countRidersRides = new CountRides(rideRepository);

    await rideRepository.create(
      makeRide({
        riderId: 'recipient-1',
      }),
    );

    await rideRepository.create(
      makeRide({
        riderId: 'recipient-1',
      }),
    );

    await rideRepository.create(
      makeRide({
        riderId: 'recipient-2',
      }),
    );

    const { count } = await countRidersRides.execute({
      riderId: 'recipient-1',
    });

    expect(count).toBe(2);
  });
});
