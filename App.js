import { StatusBar } from 'expo-status-bar';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import react, { useState } from 'react';
import styles from './styles'

export default function App() {
  const [valorA, setValorA] = useState(0);
  const [valorB, setValorB] = useState(0);
  const [resultado, setResult] = useState(0);

  function addition() {
    let value = Number.parseFloat(valorA.toString().replace(',', '.')) +
      Number.parseFloat(valorB.toString().replace(',', '.'));
    setResult(value);
  }

  function subtraction() {
    let value = Number.parseFloat(valorA.toString().replace(',', '.')) -
      Number.parseFloat(valorB.toString().replace(',', '.'));
    setResult(value);
  }

  function multiplication() {
    let value = Number.parseFloat(valorA.toString().replace(',', '.')) *
      Number.parseFloat(valorB.toString().replace(',', '.'));
    setResult(value);
  }

  function division() {
    let value = Number.parseFloat(valorA.toString().replace(',', '.')) /
      Number.parseFloat(valorB.toString().replace(',', '.'));
    setResult(value);
  }


  return (
    <View style={styles.container}>

      <Text style={styles.header} >Calculadora</Text>

      <View style={styles.containerField}>
        <View>
          <Text style={styles.text} >Primeiro valor</Text>
          <TextInput
            style={styles.texBox}
            placeholder='Digite algo...'
            keyboardType='decimal-pad'
            onChangeText={(text) => setValorA(text)}
            value={valorA.toString()}
          />
        </View>
        <View style={styles.containerFieldIcon}>
          <TouchableOpacity onPress={() => setValorA(0)}  >
            <Text style={styles.text}>
              🗑️
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.containerField}>
        <View>
          <Text style={styles.text} >Segundo valor</Text>
          <TextInput
            style={styles.texBox}
            placeholder='Digite algo...'
            keyboardType='decimal-pad'
            onChangeText={(text) => setValorB(text)}
            value={valorB.toString()}
          />
        </View>
        <View style={styles.containerFieldIcon}>
          <TouchableOpacity onPress={() => setValorB(0)}  >
            <Text style={styles.text}>
              🗑️
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity onPress={() => addition()}>
          <Text style={styles.text}>
            ➕
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => subtraction()}>
          <Text style={styles.text}>
            ➖
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => multiplication()}>
          <Text style={styles.text}>
            ✖️
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => division()}>
          <Text style={styles.text}>
            ➗
          </Text>
        </TouchableOpacity>

      </View>

      <Text style={styles.text}>
        Resultado: {resultado.toFixed(2)}
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}