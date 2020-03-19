import { BaseMessage } from './BaseMessage';

export class Notification<T = any> extends BaseMessage<T> {
  readonly type = 'notification';

  constructor(command: string, payload?: T) {
    super(command, payload);
  }
}
