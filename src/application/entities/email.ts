import validator from 'validator';

export class Email {
  private readonly email: string;

  public get getemail(): any {
    return this.email;
  }

  private validateEmail(email: string): boolean {
    return validator.isEmail(email);
  }

  constructor(email: string) {
    const isEmailValid = this.validateEmail(email);

    if (!isEmailValid) {
      console.log(email);
      throw new Error('Email invalid.');
    }
    this.email = email;
  }
}
