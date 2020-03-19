import { Message } from './models/Messages';

export class PostMessenger {
  private readonly targetWindow: Window;

  constructor(targetWindow: Window) {
    this.targetWindow = targetWindow;
  }

  postMessage<T>(message: Message<T>): void {
    this.targetWindow.postMessage(message, '*');
  }
}

