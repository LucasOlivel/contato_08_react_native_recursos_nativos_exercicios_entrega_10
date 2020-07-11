import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


const NovoContatoTela = (props) => {
    const [contatos, setContatos] = useState([]);
    const [telefones, setTelefone] = useState([]);
    const [contadorContatos, setContadorContatos] = useState(0);
    const [contadorTelefones, setContadorTelefones] = useState(0);
    
    const adicionarContato = (contato, telefone) => {
      setContatos(contatos => {
        setContadorContatos(contadorContatos +1);
        return [{ key: contadorContatos.toString(), 
          value: contato}, ...contatos];
      })
      setTelefone(telefones => {
        setContadorTelefones(contadorTelefones +1);
        return [{ key: contadorTelefones.toString(), 
          value: telefone}, ...telefones];
      })
      console.log(contato);
      console.log(telefone);
    }

    const apagarContatos = () => {
        setContatos([]);
        setTelefone([]);
    }

    return (
      <ScrollView>
        <View>
            <ContatoInput 
                onAdicionarContato={adicionarContato}
                onApagarTudo={apagarContatos}
            />
        </View>
      </ScrollView>
    ); 
  }
  
  const estilos = StyleSheet.create({
    titulo: {
      fontSize: 18,
      marginBottom: 15
    },
    textInput: {
      borderBottomColor: '#DDD',
      borderBottomWidth: 2,
      marginBottom: 15,
      paddingVertical: 4
    },
    form: {
      margin: 30
    }
  });
  
  export default NovoContatoTela;