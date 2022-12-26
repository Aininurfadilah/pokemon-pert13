import create from "zustand";

const useStore = create(set => ({
    love: 0,
    addLove: () => set(state => ({ love: state.love + 1 })),
}))

export default useStore;