import React from 'react';
import { Platform, View } from 'react-native';
import TransactionList from './src/TransactionList';

export default function App() {
  return (
    <View style={styles.container}>
      <TransactionList />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 24 : 0
  }
};
