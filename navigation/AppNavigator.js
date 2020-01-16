import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Router, Scene, ActionConst, Actions } from "react-native-router-flux";
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ListScreen from '../screens/List'
import LanguageContext from '../context'
import LanguageJson from '../constants/language'

const pages = ['home', 'links', 'settings', 'list']
export default class AppNav extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      language:LanguageJson['English'],
      lang:'English',
      index:0
    }
  }

  onTabPress=(page)=>{
    if(Actions.currentScene!==page)
       Actions[page].call()
  }

  updateLanguage=(language,index)=>{
    this.setState({
      language:LanguageJson[language],
      index:index
    })
  }

  render() {
    const {tabBar, tabButton, textBar} = styles
    const {language,lang, index} = this.state
    return (
      <LanguageContext.Provider value={language}>
      <>
      <Router>
        <Scene key="root" hideNavBar>
          <Scene
            key="home"
            component={() => <HomeScreen/>}
            initial
          />
           <Scene
            key="links"
            component={() => <LinksScreen/>}
          />
           <Scene
            key="settings"
            component={() => <SettingsScreen lang={lang} updateLanguage={this.updateLanguage} index={index} />}
            
          />
           <Scene
            key="list"
            component={() => <ListScreen/>}
          />
        </Scene>
      </Router>
      </>
      <View style={tabBar}>
          {pages.map(page=>(
            <View key={page} style={tabButton} >
            <TouchableOpacity onPress={()=>this.onTabPress(page)}>
              <Text style={textBar}>{page}</Text>
            </TouchableOpacity>
            </View>
          ))}
      </View>
      </LanguageContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  tabBar: {
    flex: 0.07,
    flexDirection:'row',
    borderTopColor:'black',
    borderTopWidth:1
  },
  tabButton: {
    flex: 1,
    borderColor:'black',
    borderWidth:1
  },
  textBar:{
    alignContent:'center',
    textAlign:"center",
    paddingTop:15
  }
})
