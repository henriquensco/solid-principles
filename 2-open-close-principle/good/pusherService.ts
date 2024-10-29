import { IMessage } from "./messageInterface";
import { MessageType } from "./messageType";

export class PusherService implements IMessage {
  sendMessage(message: MessageType) {
    console.log('enviado pusher');
  }
}