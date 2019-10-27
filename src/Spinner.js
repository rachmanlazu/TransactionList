import React, { Component } from 'react'
import { ActivityIndicator, View } from 'react-native'

export default class Spinner extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#fc6866" />
      </View>
    )
  }
}

const styles ={
  container: {
    flex: 1,
    height: 100,
    justifyContent: 'center',
    alignItems:'center'
  }
}