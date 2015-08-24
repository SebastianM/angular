import {Type} from 'angular2/src/facade/lang';
import {GetterFn, SetterFn, MethodFn} from './types';
import {List} from 'angular2/src/facade/collection';

export interface PlatformReflectionCapabilities {
  isReflectionEnabled(): boolean;
  factory(type: Type): Function;
  interfaces(type: Type): any[];
  parameters(type: Type): any[];
  annotations(type: Type): any[];
  getter(name: string): GetterFn;
  setter(name: string): SetterFn;
  method(name: string): MethodFn;
}
