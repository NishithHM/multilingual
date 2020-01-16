import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import LanguageContext from "../context"
// import get from 'lodash/get'
// import { Ionicons } from '@expo/vector-icons';

export default class ExpoLinksScreen extends React.Component {
  render() {
    return (
     <LanguageContext.Consumer> 
     {(context) => {
      return( 
      <View>
        <Text style={styles.optionsTitleText}>{context.links.resource}</Text>

        <TouchableOpacity
          style={styles.option}
          onPress={this._handlePressDocs}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionIconContainer}>
              <Image
                source={require('../assets/images/robot-dev.png')}
                resizeMode="contain"
                fadeDuration={0}
                style={{ width: 20, height: 20, marginTop: 1 }}
              />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>{context.links.read}</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={this._handlePressForums}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionIconContainer}>
              {/* <Ionicons name="ios-chatboxes" size={22} color="#ccc" /> */}
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>{context.links.ask}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      )}}
     </LanguageContext.Consumer> 
    );
  }

  _handlePressDocs = () => {
    WebBrowser.openBrowserAsync('http://docs.expo.io');
  };

  _handlePressForums = () => {
    WebBrowser.openBrowserAsync('http://forums.expo.io');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  optionsTitleText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
  },
  optionIconContainer: {
    marginRight: 9,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  optionText: {
    fontSize: 15,
    marginTop: 1,
  },
});
