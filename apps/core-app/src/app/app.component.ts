import { Component } from '@angular/core';
import { MessageBus } from '@angular-communication/message-bus';
import { NOTIFICATIONS } from '../../../../libs/messages';

@Component({
  selector: 'angular-communication-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private readonly messageBus: MessageBus) {
    messageBus.initializeWindow(window);
  }

  clear(): void {
    this.messageBus.notify(NOTIFICATIONS.clear);
  }
}
