import React from "react";
import {
  View,
  StyleSheet
} from "react-native";
import Title from './title'
import Description from './description'
import Author from './author'

export default Card=(props)=>{
    const {title, desc, author, value} = props
    return(
        <View style={styles.container} key={value}>
        <Title title={title}/>
        <Description desc={desc}/>
        <Author author={author}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e6ddd8',
      borderColor:'black',
      borderWidth:2,
      padding:10,
      margin:10
    }})