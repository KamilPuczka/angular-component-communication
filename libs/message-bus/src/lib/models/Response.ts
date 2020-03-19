import { BaseMessage } from './BaseMessage';

export class Response<T = any> extends BaseMessage<T> {
  readonly type = 'response';
  id: string;

  constructor(command: string, id: string, payload?: T) {
    super(command, payload);
    this.id = id;
  }
}
