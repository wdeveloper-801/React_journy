import { create } from "zustand";

const savedCounts = JSON.parse(localStorage.getItem('counts') || '{}');

const zustand_st1 = create((set) => ({

    count: typeof savedCounts.count === 'number' ? savedCounts.count : 0,

    count2: typeof savedCounts.count2 === 'number' ? savedCounts.count2 : 0,

    Navbaropen: false,

    increment: () => set((state) => ({ count: state.count + 1 })),

    decrement: () => set((state) => ({ count: state.count > 0 ? state.count - 1 : 0 })),

    incrementby2: () => set((a) => ({ count: a.count * 2 })),

    reset: () => set({ count: 0 }),

    Navbar: () => set((state) => ({ Navbaropen: !state.Navbaropen })),

    setCount2: (value) => set({ count2: value }),
}))
export default zustand_st1;