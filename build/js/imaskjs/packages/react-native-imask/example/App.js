import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { IMaskTextInput } from 'react-native-imask';


export default class App extends React.Component {
  constructor () {
    super();
    this.state = {
      phone: '999'
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <IMaskTextInput
          style={{
            height: 40,
            width: '100%',
            borderColor: 'gray',
            borderWidth: 1
          }}
          mask='+{7}(000)000-00-00'
          value={this.state.phone}
          unmask={true}
          lazy={false}
          onAccept={value => {
            console.log('accept value', value);
            this.setState({phone: value});
          }}
          editable={true}
        />
        <Text>Changes you make will automatically reload.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
