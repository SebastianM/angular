import {AST} from 'angular2/src/change_detection/change_detection';
import {List, ListWrapper} from 'angular2/src/facade/collection';
import {isPresent} from 'angular2/src/facade/lang';

export class DomElementBinder {
  textNodeIndices: number[];
  hasNestedProtoView: boolean;
  eventLocals: AST;
  localEvents: Event[];
  globalEvents: Event[];
  hasNativeShadowRoot: boolean;

  constructor({textNodeIndices, hasNestedProtoView, eventLocals, localEvents, globalEvents,
               hasNativeShadowRoot}: {
    textNodeIndices?: number[],
    hasNestedProtoView?: boolean,
    eventLocals?: AST,
    localEvents?: Event[],
    globalEvents?: Event[],
    hasNativeShadowRoot?: boolean
  } = {}) {
    this.textNodeIndices = textNodeIndices;
    this.hasNestedProtoView = hasNestedProtoView;
    this.eventLocals = eventLocals;
    this.localEvents = localEvents;
    this.globalEvents = globalEvents;
    this.hasNativeShadowRoot = isPresent(hasNativeShadowRoot) ? hasNativeShadowRoot : false;
  }
}

export class Event {
  constructor(public name: string, public target: string, public fullName: string) {}
}

export class HostAction {
  constructor(public actionName: string, public actionExpression: string, public expression: AST) {}
}
