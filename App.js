import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#ffffff', fontSize: 20 }}>"Everything is practice." &mdash; Pele</Text>
      <Text style={{ color: '#ffffff', fontSize: 20 }}>"You are what you practice most." &mdash; Richard Carlson</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12
  },
});
