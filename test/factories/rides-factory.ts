import { Ride, RideProps } from '../../src/application/entities/ride';

type Override = Partial<RideProps>;

export function makeRide(override: Override = {}) {
  return new Ride({
    arrivalLocal: 'Ouro Preto',
    arrivingDate: '1999-09-19 17:00:21',
    departureDate: '1999-09-20 17:00:20',
    departureLocal: 'Mariana',
    info: 'Primeira',
    riderId: 'OAISDNASD',
    ...override,
  });
}
