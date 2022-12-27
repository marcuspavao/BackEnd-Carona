import { randomUUID } from 'node:crypto';
import { Replace } from '../../helpers/Replace';

export interface RideProps {
  riderId: string;
  info: string;
  departureLocal: string;
  arrivalLocal: string;
  arrivingDate: string;
  isFull?: boolean;
  departureDate: string;
  canceledAt?: Date | null;
  createdAt: Date;
}

export class Ride {
  private _id: string;
  private props: RideProps;

  constructor(props: Replace<RideProps, { createdAt?: Date }>, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public set riderId(riderId: string) {
    this.props.riderId = riderId;
  }

  public get riderId(): string {
    return this.props.riderId;
  }

  public set isFull(isFull: boolean) {
    this.props.isFull = isFull;
  }

  public get isFull(): boolean {
    return this.props.isFull;
  }

  public set departureLocal(departureLocal: string) {
    this.props.departureLocal = departureLocal;
  }

  public get departureLocal(): string {
    return this.props.departureLocal;
  }

  public set arrivalLocal(arrivalLocal: string) {
    this.props.arrivalLocal = arrivalLocal;
  }

  public get arrivalLocal(): string {
    return this.props.arrivalLocal;
  }

  public set arrivingDate(arrivingDate: string) {
    this.props.arrivingDate = arrivingDate;
  }

  public get arrivingDate(): string {
    return this.props.arrivingDate;
  }

  public set departureDate(departureDate: string) {
    this.props.departureDate = departureDate;
  }

  public get departureDate(): string {
    return this.props.departureDate;
  }

  public set info(info: string) {
    this.props.info = info;
  }

  public get info(): string {
    return this.props.info;
  }

  public cancel() {
    this.props.canceledAt = new Date();
  }

  public get canceledAt(): Date | null | undefined {
    return this.props.canceledAt;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
