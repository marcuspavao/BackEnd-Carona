import { randomUUID } from 'node:crypto';

export interface CarProps {
  model: string;
  modelYear: string;
  plate: string;
  riderId: string;
}
export class Car {
  private _id: string;
  private props: CarProps;

  constructor(props: CarProps, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
    };
  }

  public get id() {
    return this._id;
  }

  public get model(): string {
    return this.props.model;
  }

  public set model(model: string) {
    this.props.model = model;
  }

  public set modelYear(modelYear: string) {
    this.props.modelYear = modelYear;
  }

  public get modelYear(): string {
    return this.props.modelYear;
  }

  public set plate(plate: string) {
    this.props.plate = plate;
  }

  public get plate(): string {
    return this.props.plate;
  }

  public set riderId(riderId: string) {
    this.props.riderId = riderId;
  }

  public get riderId(): string {
    return this.props.riderId;
  }
}
