import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, TextInput, Button } from 'react-native';

const App = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.title}>Email Assistant</Text>
      </View>
      <View style={styles.searchSection}>
        <TextInput style={styles.input} placeholder="Search emails" />
        <Button title="Search" onPress={() => {}} />
      </View>
      <View style={styles.conversation}>
        <Text style={styles.conversationText}>
          Hello! How can I assist you with your emails today?
        </Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF'
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    margin: 20
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: '#E8E8E8',
    borderRadius: 8,
    marginRight: 10
  },
  conversation: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    borderRadius: 8
  },
  conversationText: {
    fontSize: 18
  }
});
export default App;