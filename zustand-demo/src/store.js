import create from 'zustand'

const useStore = create((set) => ({
    paw: true,
    firstName: "",
    lastName: "",
    users: [{firstName: 'chen', lastName: 'yu'}],
    addFirstName: (value) => set({ firstName: value}),
    addLastName: (value) => set({ lastName: value}),
    addUsers: (value) => set({ users: value}),
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
    // fishies: {},
    // fetch: async (pond) => {
    //     const response = await fetch(pond)
    //     set({ fishies: await response.json() })
    // },
}))

export default useStore
