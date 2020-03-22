import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CirclePicker } from 'react-color';


export default function App() {



  const [color, setColor] = useState('#ff0000');
  console.log(color)
  console.log(setColor)

  return (
    <View style={styles.container}>

     <CirclePicker 
      color={color}
      onChangeComplete={ () => {setColor(color.hex)} }/>
      <button type="button">Click Me!</button>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '50%',
    width: '50%',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
