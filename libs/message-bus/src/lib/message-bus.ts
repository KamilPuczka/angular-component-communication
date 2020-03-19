import { fromEvent, Observable } from 'rxjs';
import { filter } from 'rxjs/internal/operators/filter';
import { MappedMessage, Message, MessageType } from './models/Messages';
import { map, pluck, take } from 'rxjs/operators';
import { Notification } from './models/Notification';
import { Request } from './models/Request';
import { Response } from './models/Response';
import { Helper } from './helper';
import { PostMessenger } from './post-messenger';
import { Injectable } from '@angular/core';

@Injectable(
  { providedIn: 'platform' }
)
export class MessageBus {
  private readonly inboundMessages$: Observable<Message>;
  private readonly inboundNotifications$: Observable<Notification>;
  private readonly inboundResponses$: Observable<Response>;
  private readonly inboundRequests$: Observable<Request>;

  private postMessenger: PostMessenger;

  constructor() {
    this.inboundMessages$ = fromEvent<MessageEvent>(window, 'message')
      .pipe(
        filter((message) => Helper.validateMessage(message)),
        pluck('data')
      );
    this.inboundNotifications$ = this.messagesOfType('notification');
    this.inboundResponses$ = this.messagesOfType('response');
    this.inboundRequests$ = this.messagesOfType('request');
  }

  initializeWindow(targetWindow: Window): void {
    this.postMessenger = new PostMessenger(targetWindow);
  }

  notify<T = null>(command: string, payload?: T): void {
    this.postMessenger.postMessage(new Notification(command, payload));
  }

  request<T = any, U = any>(command: string, payload?: T): Observable<Response<U>> {
    const message = new Request(command, payload);
    const response$: Observable<Response<U>> = this.inboundResponses$.pipe(
      filter((response): response is Response<U> => response.id === message.id),
      take(1)
    );
    this.postMessenger.postMessage(message);
    return response$;
  }

  listenToRequest<T = any>(command: string): Observable<Request<T>> {
    return this.inboundRequests$.pipe(
      filter(request => request.command === command),
      map(req => {
        const request = new Request(req.command, req.payload, req.id);
        request.responder = this.postMessenger;
        return request;
      })
    );
  }

  listenToNotifications<T = null>(command: string): Observable<Notification<T>> {
    return this.inboundNotifications$.pipe(
      filter(notification => notification.command === command)
    );
  }


  private messagesOfType<T extends MessageType>(type: T): Observable<MappedMessage<T>> {
    return this.inboundMessages$.pipe(
      filter((message): message is MappedMessage<T> => message.type === type)
    );
  }
}
