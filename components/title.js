import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LanguageContext from "../context";
import get from 'lodash/get'

export default Title = props => {
  const { title } = props;
  const { container, text, heading } = styles;
  return (
    <LanguageContext.Consumer>
      {context => {
        return (
          <View style={container}>
            <Text style={heading}>{get(context,"list.title")}</Text>
            <Text style={text}>{title}</Text>
          </View>
        );
      }}
    </LanguageContext.Consumer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  text: {
    paddingLeft: 5
  },
  heading: {
    fontWeight: "bold",
    textDecorationLine: "underline"
  }
});
