import { CreateUserDto } from "./createUserDto";
import { EmailService } from "./emailService";
import { UserValidationService } from "./userValidationService";

class UserService {
  constructor(
    private userValidationService: UserValidationService = new UserValidationService(),
    private emailService: EmailService = new EmailService()
  ) {}

  createUser(createUserDto: CreateUserDto): CreateUserDto {
    this.userValidationService.isValid(createUserDto);

    this.emailService.notify(createUserDto.email);
    
    return createUserDto;
  }
}

const userService = new UserService();

const create = userService.createUser({
  name: "Jhon Doe",
  email: "jhondoegmail.com",
  document: "10018273647",
  password: "@Jhon123"
});

console.log(create);