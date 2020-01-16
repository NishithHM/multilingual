import React from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import LanguageContext from "../context";
import get from 'lodash/get'

export default Author=(props)=>{
    const {author} = props
    const {container, text, heading} = styles
    return(
        <LanguageContext.Consumer>
        {(context)=>(
        <View style={container}>
            <Text style={heading}>{get(context,"list.author")}</Text>
            <Text style={text}>{author}</Text>
        </View>
        )}
        </LanguageContext.Consumer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"row"
      },
      text:{
          paddingLeft:5
      },
      heading:{
          fontWeight:"bold",
          textDecorationLine:"underline"
      }
})