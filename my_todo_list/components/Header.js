import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Header = () => {
    return (
        <View style={styles.container}>
            <Icon style={{marginHorizontal:10}} name="bars" size={30} color="#900" />
            <Text style={{fontWeight:'bold',fontSize:20,marginHorizontal:50}}>Todo List</Text>
        </View>
    )
}

export { Header};

const styles = StyleSheet.create({
    container:{
        // flex:1,
        flexDirection:"row",
        alignItems:'baseline',
        
    }
})
