import { create } from "zustand";
const zustand_st1 = create((set) => ({
    count: localStorage.getItem('count'),
    Navbaropen: false,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count > 0 ? state.count - 1 : 0 })),
    incrementby2: () => set((a) => ({ count: a.count * 2 })),
    reset: () => set({ count: 0 }),
    Navbar: () => set((state) => ({ Navbaropen: !state.Navbaropen })),
}))
export default zustand_st1;