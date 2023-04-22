import {View,FlatList,StyleSheet} from "react-native"
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";
// import { useEffect } from "react";
//we can also 
// import { useRoute } from "@react-navigation/native";
//instead of using route params
import { MEALS,CATEGORIES } from "../data/dummy-data";
function MealsOverviewScreen({route,navigation}) {
    // const route = useRoute();
    // this will give the same route params
    // this is done to receive the data sent by the navigate function 
   const catId =  route.params.categoryId;
   const displayMeals = MEALS.filter((mealItem) => {return mealItem.categoryIds.indexOf(catId) >= 0});
   const categoryTitle = CATEGORIES.find((category) => category.id == catId).title;
   // when we use use effect the component loads after the page is rendered ,so we use useLayout effect
   useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id == catId).title;

    navigation.setOptions({
        title:categoryTitle
      });
   },[catId,navigation]);
   
   function renderMealItem(itemData) {
    const item = itemData.item;

    

    const mealItemProps = {
        id: item.id,
        title : item.title,
        imageUrl : item.imageUrl,
        duration : item.duration,
        complexity : item.complexity,
        affordability : item.affordability
    }
      return <MealItem {...mealItemProps}/>
   }
   return <View style={styles.container}><FlatList data={displayMeals} keyExtractor={(item) => {
        return item.id;
   }} renderItem={renderMealItem}/>
    </View>
}
export default MealsOverviewScreen;
const styles = StyleSheet.create({
    container : {
        flex:1,
        padding:16
    }
})
