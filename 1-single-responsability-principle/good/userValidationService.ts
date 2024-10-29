import { CreateUserDto } from "./createUserDto";

export class UserValidationService {
  isValid(createUserDto: CreateUserDto): boolean {
    this.validateEmail(createUserDto.email);

    this.validateDocument(createUserDto.document);

    this.validatePassword(createUserDto.password);

    return true;
  }

  validateEmail(email: string): boolean {
    if (!email.includes('@')) {
      throw 'Invalid email';
    }

    return true;
  }

  validateDocument(document: string): boolean {
    if (document.length < 11) {
      throw 'Invalid document';
    }

    return true;
  }

  validatePassword(password: string): boolean {
    const regexExpression = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if (!regexExpression.test(password)) {
      throw 'Password not strong enough';
    }

    return true;
  }
}