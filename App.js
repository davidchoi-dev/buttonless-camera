import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { KeepAwake, Camera } from "expo";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <KeepAwake />
        <StatusBar hidden={true} />
        <Camera
          style={styles.cameraStyles}
          type={Camera.Constants.Type.front}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cameraStyles: {
    flex: 1
  }
});
