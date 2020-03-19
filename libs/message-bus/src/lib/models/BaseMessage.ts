import { MessageType } from './Messages';

export abstract class BaseMessage<T = null> {
  command: string;
  payload?: T;

  abstract readonly type: MessageType;

  protected constructor(command: string, payload?: T) {
    this.command = command;
    this.payload = payload;
  }

}
