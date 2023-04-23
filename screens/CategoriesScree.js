import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
//navigation object is passed to any component that is binded to a screen
function CategoriesScreen({navigation}) {
    function renderCategoryItem(itemData) {
        function pressHandler() {
          // to pass the data to the screen we want to navigate we have the navigate function accepts another parameter
           navigation.navigate('MealsOverView',{
            categoryId : itemData.item.id,
           }); 
        }
        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler}/>;
    }
  return <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoryItem} numColumns={2}/>
}
export default CategoriesScreen;