import React from 'react';
import WebView from 'react-native-webview';

const WebviewScreen = ({route}) => {
  const {sid} = route.params;
  return (
    <WebView
      source={{
        uri: 'http://sess.testmysite.icu/content.php',
        headers: {'Auth-Key': sid},
      }}
      style={{marginTop: 20}}
    />
  );
};

export default WebviewScreen;
