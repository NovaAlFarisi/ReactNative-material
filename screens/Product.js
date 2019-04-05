import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Product extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Saved navigation | Content here</Text>
      </View>
    );
  }
}
export default Product;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
