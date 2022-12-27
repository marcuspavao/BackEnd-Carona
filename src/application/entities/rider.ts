import { randomUUID } from 'node:crypto';
import { Car } from './Car';

export interface RiderProps {
  name: string;
  cpf: string;
  carId: string;
  car?: Car;
}

export class Rider {
  private _id: string;
  private props: RiderProps;

  constructor(props: RiderProps, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
    };
  }

  public get id() {
    return this._id;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get name(): string {
    return this.props.name;
  }

  public set car(car: Car) {
    this.props.car = car;
  }
  public get car(): Car {
    return this.props.car;
  }

  public set cpf(cpf: string) {
    this.props.cpf = cpf;
  }

  public get cpf(): string {
    return this.props.cpf;
  }

  public update(carId: string) {
    this.props.carId = carId;
  }

  public set carId(carId: string) {
    this.props.carId = carId;
  }

  public get carId(): string {
    return this.props.carId;
  }
}
