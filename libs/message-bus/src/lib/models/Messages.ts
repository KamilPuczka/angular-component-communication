import { Notification } from './Notification';
import { Request } from './Request';
import { Response } from './Response';

export type Message<T = any> = Notification<T> | Request<T> | Response<T>;

export interface IMessageTypeMap<T = any> {
  request: Request;
  response: Response;
  notification: Notification;
}

export type MessageType = keyof IMessageTypeMap;
export type MappedMessage<T extends MessageType> = IMessageTypeMap[T];
