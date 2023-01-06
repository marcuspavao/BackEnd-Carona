import { randomUUID } from 'node:crypto';
import { Email } from './email';
import { hashSync } from 'bcryptjs';
import { Role } from '@prisma/client';
import { Car } from './car';

export interface RiderProps {
  name: string;
  cpf: string;
  email: Email;
  password: string;
  passwordConfirmation: string;
  carId: string;
  role?: Role;
  car?: Car;
}

export class Rider {
  private _id: string;
  private props: RiderProps;
  static props: any;

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
  public set role(role: Role) {
    this.props.role = role;
  }

  public get role(): Role {
    return this.props.role;
  }

  public set password(password: string) {
    this.props.password = hashSync(password, 12);
  }

  public get password(): string {
    return this.props.password;
  }
  public set passwordConfirmation(passwordConfirmation: string) {
    this.props.passwordConfirmation = passwordConfirmation;
  }

  public get passwordConfirmation(): string {
    return this.props.passwordConfirmation;
  }

  public set email(email: Email) {
    this.props.email = email;
  }

  public get email(): Email {
    return this.props.email;
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
