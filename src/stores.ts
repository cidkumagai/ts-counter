import { writable } from 'svelte/store';
import type { CounterItem } from './types/types';

export const counterList = writable<CounterItem[]>([
  { id: 0, title: 'new', number: 0 },
]);
