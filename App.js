import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import CategoriesScreen from './screens/CategoriesScree';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import {createNativeStackNavigator} from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator();
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
        <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
    
  );
}

const styles = StyleSheet.create({
  
});
