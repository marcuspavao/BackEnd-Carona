import { GetRiderRides } from './get-riders-rides';
import { makeRide } from '../../../test/factories/rides-factory';
import { InMemoryRideRepository } from '../../../test/repositories/in-memory-rides-repository';

describe('Get recipient notifications', () => {
  it('should be able to recipient notifications', async () => {
    const rideRepository = new InMemoryRideRepository();
    const getRiderRides = new GetRiderRides(rideRepository);

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

    const { rides } = await getRiderRides.execute({
      riderId: 'recipient-1',
    });

    expect(rides).toHaveLength(2);
    expect(rides).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ riderId: 'recipient-1' }),
        expect.objectContaining({ riderId: 'recipient-1' }),
      ]),
    );
  });
});
