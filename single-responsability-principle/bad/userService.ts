import { CreateUserDto } from "./createUserDto";

class UserService {
  createUser(createUserDto: CreateUserDto): CreateUserDto {
    this.validateEmail(createUserDto.email);
    
    this.validateDocument(createUserDto.document);

    this.validatePassword(createUserDto.password);

    this.notify(createUserDto.email);

    return createUserDto;
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

  notify(email: string) {
    console.log(`Seja bem-vindo ${email}!`);
  }
}

const userService = new UserService();

const create = userService.createUser({
  name: "Jhon Doe",
  email: "jhondoe@gmail.com",
  document: "10018273647",
  password: "@Jhon123"
});

console.log(create);