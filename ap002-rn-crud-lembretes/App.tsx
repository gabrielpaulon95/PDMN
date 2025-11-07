
import { Button, TextInput, StyleSheet, View, Pressable } from 'react-native';
import { useState } from 'react';

interface Lembrete{
  id: string;
  texto: string;
}


export default function App() {
  const [lembrete, setLembrete] = useState<string>('')
  const [lembretes, setLembretes] = useState<Lembrete[]>([])

  const adicionar = () => {
    const novoLembrete: Lembrete = {
      id: new Date().getTime().toString()
      texto: {lembrete}
    }
    setLembretes((listaAtual)) => ([ novoLembrete, ...listaAtual ])
    setLembrete('')
  }
  return (
    <View style={styles.container}>
      <TextInput 
      value={lembrete}
      onChangeText={setLembrete}
      style={styles.input}
      placeholder='Digite meu cuzinho'/>
      <Pressable 
        onPress={() => {adicionar()}}
        style = {styles.button}>
        <Text style = {styles.buttonText}>Salvar lembrete</Text>
      </Pressable> 
      {
        lembretes.map(l => <Text:{l.texto}</Text>)
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
      width: '80%',
      borderColor: 'gray',
      borderWidth: 3,
      marginBottom: 12,
      padding: 12,
      textAlign: 'center',
      borderRadius: 10
  },
  button: {
    width: '80%',
    backgroundColor: '#0096F3',
    padding: 12,
    borderRadius: 4
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  }
});
