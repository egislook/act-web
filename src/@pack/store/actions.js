export default ({ store }) => ({
  APP_INIT: async () => {
    await store.set({ count: 1, ready: true })
  },
	APP_COUNT: () => store.set({ count: store.get('count') + 1 })
})
