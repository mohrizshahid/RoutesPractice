import {Stack} from 'expo-router'
import { Slot } from "expo-router";
import { Provider } from "../context/auth";

export default function HomeLayout (){
    const screens = ['parent','admin','teacher']
return (<Stack>
    <Stack.Screen name={screens[0]} options={{headerShown:false}} />
</Stack>
)
}
export function Root() {
    return (
      // Setup the auth context and render our layout inside of it.
      <Provider>
        <Slot />
      </Provider>
    );
  }