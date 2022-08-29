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

function getCounters() {
    return counterList;
}

// function getTitleList() {
//     const titleList = $counterList.map((item) => {
//         return item.title;
//     });
// }

export const counter = getCounters();

// export const counterList = writable<CounterState>({
//     titleList: [],
//     sumCount: 0,
//     counterList: [{ id: 0, title: 'new', number: 0 }],
// });
