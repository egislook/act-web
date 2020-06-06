import Actheme from 'actheme'
import { TouchableOpacity } from 'react-native'
Actheme.set(process.env.theme, { Link: TouchableOpacity })
console.log('mobile')
export { Actheme }
