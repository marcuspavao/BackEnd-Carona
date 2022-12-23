export class RideNotFound extends Error {
  constructor() {
    super('Ride not found.');
  }
}
