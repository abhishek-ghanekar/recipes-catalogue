import {View,Text,StyleSheet} from "react-native"
//we can also 
// import { useRoute } from "@react-navigation/native";
//instead of using route params
import { MEALS } from "../data/dummy-data";
function MealsOverviewScreen({route}) {
    // const route = useRoute();
    // this will give the same route params
   const catId =  route.params.categoryId;
   return <View style={styles.container}><Text>
       Meals OverView Screen - {catId}
    </Text>
    </View>
}
export default MealsOverviewScreen;
const styles = StyleSheet.create({
    container : {
        flex:1,
        padding:16
    }
})
