import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchPage from './Pages/SearchPage';
import React, { useState } from 'react';
import { UsersResponse } from './interfaces';

const Stack = createStackNavigator()

export default function App() {

  const [user, setUser] = useState<UsersResponse | null>(null)
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home'>
          {() => (<><SearchPage user={user} setUser={setUser}/></>)}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}