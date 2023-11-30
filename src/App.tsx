import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchPage from './Pages/SearchPage';
import React, { useState } from 'react';
import { UserDetail, UsersResponse } from './interfaces';
import HistoricPage from './Pages/HistoricPage';
import RepositoriesPage from './Pages/RepositoriesPage';


const Stack = createStackNavigator()

export default function App() {

  const [user, setUser] = useState<UsersResponse | null>(null)
  const [screen, setScreen] = useState<string>("home")
  const [userHistoric, setUserHistoric] = useState<Array<string> | null>(null)
  const [repository, setRepository] = useState<UserDetail | null>(null);
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name='home' options={{ headerShown: false }} >
          {() => (<><SearchPage user={user} setUser={setUser} screen={screen}
            setScreen={setScreen} setRepository={setRepository} /></>)}
        </Stack.Screen>
        <Stack.Screen name='time' options={{ headerShown: false }} >
          {() => (<><HistoricPage userHistoric={userHistoric} setUserHistoric={setUserHistoric}
            screen={screen} setScreen={setScreen} setRepository={setRepository} /></>)}
        </Stack.Screen>
        <Stack.Screen name='repo' options={{ headerShown: false }} >
          {() => (<><RepositoriesPage repository={repository} /></>)}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}