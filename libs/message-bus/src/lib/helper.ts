export class Helper {
  static validateMessage(message: MessageEvent): boolean {
    return message instanceof MessageEvent
      && this.validateData(message.data);
  }

  private static validateData(data: any): boolean {
    return (typeof data === 'object')
      && 'command' in data
      && 'type' in data
      && ['request', 'response', 'notification'].indexOf(data.type) !== -1
      && (data.type !== 'response' || (data.id !== undefined && data.id !== ''));
  }
}
