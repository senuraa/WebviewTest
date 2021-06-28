import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

const HomeScreen = ({navigation: {navigate}}) => {
  const [sid, setSid] = useState('');
  return (
    <View style={styles.container}>
      <TextInput style={styles.sidInput} onChangeText={text => setSid(text)} />
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => navigate('Webview', {sid: sid})}>
        <View style={styles.button}>
          <Text>Login</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  sidInput: {
    backgroundColor: '#f8f8f8',
    borderWidth: 1,
    color: '#333',
  },
});

export default HomeScreen;
