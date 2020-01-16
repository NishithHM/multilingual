import React,{useEffect, useState} from 'react';
import {Picker, View, Text, StyleSheet} from 'react-native'
import LanguageContext from "../context";
// import get from 'lodash/get'
export default function SettingsScreen(props) {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  const {lang, index} = props
  console.log(lang)
  const [language, setLanguage] = useState(lang)
  
  const changeLanguage=((value, index)=>{
    let lang
    switch (index) {
      case 0: lang="English"
        
        break;
      case 1: lang="Kannada"
      
      break;
      case 2: lang="Hindi"
      
      break;  
    
      default:
        break;
    }
    setLanguage(lang)
    props.updateLanguage(lang,index)
  })

  return (
  <LanguageContext.Consumer>
  {(context)=>
  {
    const option = [context.settings.English, context.settings.Kannada, context.settings.Hindi]
    const selectedLanguage = option[index]
    return(
      <View>
        <Text style={styles.heading}>{context.settings.changeLang}</Text>
        <Picker
        selectedValue={selectedLanguage}
        style={{height: 50, width: 130}}
        onValueChange={(itemValue, itemIndex)=>changeLanguage(itemValue, itemIndex)
        }>
        {option.map((option,index)=>(
          <Picker.Item key={option} label={option} value={option} />
        ))}
      </Picker>
      </View>
    )
  }}

  </LanguageContext.Consumer>);
}

const styles = StyleSheet.create({
    heading:{
        fontWeight:"bold",
        textDecorationLine:"underline",
        paddingLeft:10,
        paddingTop:20
    }
})
