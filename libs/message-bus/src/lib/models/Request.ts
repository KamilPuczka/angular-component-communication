import { BaseMessage } from './BaseMessage';
import { Response } from './Response';
import { PostMessenger } from '../post-messenger';

export class Request<T = any> extends BaseMessage<T> {
  readonly type = 'request';
  id: string;

  set responder(messenger: PostMessenger) {
    this._responder = messenger;
  }

  // tslint:disable-next-line:variable-name
  private _responder: PostMessenger;

  constructor(command: string,
              payload?: T,
              id: string = crypto.getRandomValues(new Uint32Array(4)).join('-')) {
    super(command, payload);
    this.id = id;
  }

  respond<U>(payload?: U): void {
    const response = new Response(this.command, this.id, payload);
    this._responder.postMessage(response);
  }


}
