import { Component, OnInit } from '@angular/core';
import { MessageBus } from '@angular-communication/message-bus';
import { NOTIFICATIONS, REQUESTS } from '../../../../messages';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'angular-communication-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit {
  messages = [];

  constructor(private readonly messageBus: MessageBus) {
    this.messageBus.listenToNotifications(NOTIFICATIONS.clear)
      .subscribe(_=>this.messages=[]);
    this.messageBus.listenToNotifications(NOTIFICATIONS.notificationFromB)
      .subscribe(x => this.messages.push(x));

    this.messageBus.listenToRequest(REQUESTS.sumNumbers).pipe(
      tap(x => this.messages.push({type:x.type, payload:x.payload, command:x.command})),
    )
      .subscribe(x => x.respond(x.payload.a+x.payload.b));
  }

  ngOnInit(): void {
  }

  notifyB(): void {
    this.messages.push(`Sending: ${NOTIFICATIONS.notificationFromA}`);
    this.messageBus.notify(NOTIFICATIONS.notificationFromA, 'Payload from A');
  }

  askForDate(): void {
    this.messages.push(`Sending request: ${REQUESTS.askForDate}`);
    this.messageBus.request(REQUESTS.askForDate)
      .subscribe(x => this.messages.push(x));
  }

}
