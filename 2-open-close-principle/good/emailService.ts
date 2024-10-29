import { IMessage } from "./messageInterface";
import { MessageType } from "./messageType";

export class EmailService implements IMessage {
  sendMessage(message: MessageType) {
    console.log('enviado email');
  }
}