// import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import{createNativeStackNavigator} from "@react-navigation/native-stack" 
// import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native'
import CategoriesScreen from './screens/CategoriesScree';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
// import FavoritesScreen from './screens/FavoritesScreen';


const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
// function DrawerNavigator() {
//   return <DrawerNavigator>
//     <Drawer.Screen name="Categories" component={CategoriesScreen} />
//     <Drawer.Screen name="Favorites" component={FavoritesScreen}/>
//   </DrawerNavigator>

export default function App() {
  return (
    <>
    <StatusBar style='light'/>
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor : '#351401'
          },
          headerTintColor: "white",
          contentStyle: {
          backgroundColor:"#3f2f25"
          }
        }}>
      {/* first screen */}
        <Stack.Screen name="MealsCategories" component={CategoriesScreen} options={{
          title : 'All Categories',
        }}/>
        {/* second screen */}
        <Stack.Screen name="MealsOverView" component={MealsOverviewScreen}/>
        {/* third screen */}
        <Stack.Screen name="MealDetails" component={MealDetailsScreen} options={{
            headerRight : () => {
              return <Button title="tap me"/>;
            }
        }} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
    
  );
}

const styles = StyleSheet.create({
  
});
