import { writable } from 'svelte/store';

export type CounterItem = {
    id: number;
    title: string;
    number: number;
};

export type CounterState = {
    titleList: string[];
    sumCount: number;
    counterList: CounterItem[];
};

export const counterList = writable<CounterItem[]>([
    { id: 0, title: 'new', number: 0 },
]);