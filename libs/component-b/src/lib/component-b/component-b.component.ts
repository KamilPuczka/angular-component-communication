import { Component, OnInit } from '@angular/core';
import { MessageBus } from '@angular-communication/message-bus';
import { NOTIFICATIONS, REQUESTS } from '../../../../messages';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'angular-communication-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit {
  messages = [];

  constructor(private readonly messageBus: MessageBus) {
    this.messageBus.listenToNotifications(NOTIFICATIONS.clear)
      .subscribe(_=>this.messages=[]);

    this.messageBus.listenToNotifications(NOTIFICATIONS.notificationFromA)
      .subscribe(x => this.messages.push(x));

    this.messageBus.listenToRequest(REQUESTS.askForDate).pipe(
      tap(x => this.messages.push(x.command))
    )
      .subscribe(x => x.respond(new Date().toDateString()));
  }

  ngOnInit(): void {
  }

  sum2Numbers(): void {
    const a = Math.round(Math.random()*100);
    const b = Math.round(Math.random()*100);
    this.messages.push(`Sending: ${REQUESTS.sumNumbers}  ${a}+${b}`);
    this.messageBus.request(REQUESTS.sumNumbers, { a: a, b: b })
      .subscribe(x => this.messages.push(x));
  }

  notifyA(): void {
    this.messages.push(`Sending: ${NOTIFICATIONS.notificationFromB}`);
    this.messageBus.notify(NOTIFICATIONS.notificationFromB, 'Payload from B');
  }

}
