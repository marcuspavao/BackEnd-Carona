import { randomUUID } from 'crypto';
import { Ride } from './ride';

describe('Notification', () => {
  it('should be able to create a ride', () => {
    const ride = new Ride({
      riderId: randomUUID(),
      info: 'Fake info',
      departureLocal: 'Mariana',
      arrivalLocal: 'Ouro Preto',
      arrivingDate: new Date(),
      departureDate: new Date(),
    });

    expect(ride).toBeTruthy();
  });
});
