import { EmailService } from "./emailService";
import { IMessage } from "./messageInterface";
import { MessageType } from "./messageType";
import { PusherService } from "./pusherService";
import { SmsService } from "./smsService";

export class MessageService {
  constructor(
    private messageService: IMessage
  ) {}

  sendMessage(message: MessageType) {
    this.messageService.sendMessage(message);
  }
}

const messageService = new MessageService(new PusherService());

messageService.sendMessage({
  message: 'mensage',
  to: 'phone'
})
