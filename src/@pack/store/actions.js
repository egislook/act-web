import AsyncStorage from '@react-native-community/async-storage'

export default ({ store, act, action }) => ({
  APP_INIT: async () => {
    await store.set({ count: 1, ready: true })
  },
	APP_COUNT: () => store.set({ count: store.get('count') + 1 }),
  APP_SET_VALUE: async value => {
    await AsyncStorage.setItem('@token', value)
    const token = await AsyncStorage.getItem('@token')
    console.log({ token })
  }
})
