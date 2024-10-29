import { IMessage } from "./messageInterface";
import { MessageType } from "./messageType";

export class SmsService implements IMessage {
  sendMessage(message: MessageType) {
    console.log('enviado sms');
  }
}