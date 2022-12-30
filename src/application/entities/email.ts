import validator from 'validator';

export class Email {
  private readonly email: string;

  get value(): string {
    return this.email;
  }

  private validateEmail(email: string): boolean {
    return validator.isEmail(email);
  }

  constructor(email: string) {
    const isEmailValid = this.validateEmail(email);

    if (!isEmailValid) {
      throw new Error('Email invalid.');
    }

    this.email = email;
  }
}
