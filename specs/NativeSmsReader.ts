import type {TurboModule} from 'react-native';
import {TurboModuleRegistry} from 'react-native';

export interface Spec extends TurboModule {
  getMessages(from: string | null, take: number): string[];
  onNewMessage(from: string | null, callback: (message: string) => void): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('NativeSmsReader');
