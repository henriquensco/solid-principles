import { MessageType } from "./messageType";

export interface IMessage {
  sendMessage(message: MessageType): any;
}