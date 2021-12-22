import { createStackNavigator, createAppContainer } from 'react-navigation'
import Search from '../components/Search'

const searchStack = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: 'Rechercher un film'
        }
    }
})

export default createAppContainer(searchStack)





