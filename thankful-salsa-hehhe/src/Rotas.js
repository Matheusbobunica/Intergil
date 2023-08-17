import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './pages/home/index'
import Modalidades from './pages/modalidades/Esports'
import Profile from './pages/profile/index'
import Inscricao from './pages/inscricao/index'
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

function Rotas() {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarInactiveTintColor: '#fff',
      tabBarShowLabel: false,
      tabBarStyle:{
        position: 'absolute',
        backgroundColor: '#171626',
        borderTopWidth: 0,
      }
    }}
    >
        <Tab.Screen 
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused}) => {
            if(focused){
              return <Ionicons name="home" size={size} color={color} />
            }

            return <Ionicons name="home-outline" size={size} color={color} />
          }
        }}
        />

        <Tab.Screen 
        name="Modalidades"
        component={Modalidades}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused}) => {
            if(focused){
              return <Ionicons name="medal" size={size} color={color} />
            }

            return <Ionicons name="medal-outline" size={size} color={color} />
          }
        }}
        />
        
        <Tab.Screen 
        name="Inscrição"
        component={Inscricao}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused}) => {
            if(focused){
              return <Ionicons name="clipboard" size={size} color={color} />
            }

            return <Ionicons name="clipboard-outline" size={size} color={color} />
          }
        }}
        />

        <Tab.Screen 
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused}) => {
            if(focused){
              return <Ionicons name="person" size={size} color={color} />
            }

            return <Ionicons name="person-outline" size={size} color={color} />
          }
        }}
        />

    </Tab.Navigator>
  );
}


export default Rotas