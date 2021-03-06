import { Events, EventHandler } from "./Model";

type Listeners = {
  [eventName: string]: EventHandler[];
};

export class EventManager implements Events {
  private listeners: Listeners = {};

  on = (eventName: string, handler: EventHandler): void => {
    const handlers = this.listeners[eventName] || [];
    handlers.push(handler);
    this.listeners[eventName] = handlers;
  };

  trigger = (eventName: string): void => {
    const handlers: EventHandler[] = this.listeners[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }
    handlers.forEach((handler) => handler());
  };
}
