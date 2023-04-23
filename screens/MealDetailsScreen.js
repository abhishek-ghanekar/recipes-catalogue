import {ScrollView, View,Text,Image,StyleSheet} from "react-native";
import IconButton from "../components/IconButton";
import { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
function MealDetailsScreen({route,navigation}) {
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId); 
    function headerButtonPressHandler() {
        console.log("Pressed");
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon="star" color="white" onPress={headerButtonPressHandler}/>
            }
        })
    },[navigation,headerButtonPressHandler]);
    return <ScrollView style={styles.rootContainer}>
        <Image source={{uri:selectedMeal.imageUrl}} style={styles.image}/>
        <Text style={styles.title}>{selectedMeal.title}</Text>
        {/* for the details */}
        <MealDetails duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
        />
        <View style={styles.listOuterContainer}>
            <View style={styles.listContainer}>
                <Subtitle>Ingridients</Subtitle>
                <List data={selectedMeal.ingredients}/>
        
                <Subtitle>Steps</Subtitle>
                <List data={selectedMeal.steps}/>
            </View>
        </View>
        
        
          

    </ScrollView>
}
export default MealDetailsScreen;
const styles = StyleSheet.create({
    rootContainer : {
        marginBottom : 32
    },
    image : {
        width : '100%',
        height:250
    },
    title : {
        fontWeight : 'bold',
        fontSize : 24,
        margin:8,
        textAlign:"center",
        color:"white"
    },
    detailText: {
        color:"white",
    },
    listOuterContainer : {
        alignItems:"center"
    },
    listContainer : {
        width:"80%"
    }
})
