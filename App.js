import { StatusBar } from 'expo-status-bar';
import { Component } from 'react'
import { StyleSheet, Text, View, Modal, TextInput, Image, Button, TouchableOpacity } from 'react-native';

class App extends Component {
 
  constructor(props){
    super(props);
  }
  
  render(){

    return (
      <View style={styles.container}>
          <View style={styles.imgTop}>
            <Image style={styles.logo} source={require('./assets/logo.png')}/>
            <Text style={{fontSize: 30,fontWeight: 'bold', color: 'white', paddingTop: 25}}>Qual a melhor opção?</Text>
          </View>
          <View style={styles.bot}>
            <Text style={styles.texto}>Alcool (preco por litro):</Text>
            <TextInput style={styles.inputTexto} placeholder='Digite um valor' underlineColorAndroid="transparent"/>
            <Text style={styles.texto}>Gasolina (preco por litro):</Text>
            <TextInput style={styles.inputTexto} placeholder='Digite um valor'/>
            <TouchableOpacity style={styles.btnClick}>
              <Text style={styles.textoBtn}> Calcular </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottom}/>
        <StatusBar style="light" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgTop: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    paddingTop: 150
  },
  logo: {
    width: 250,
    height: 250
  },
  bot: {
    paddingTop: 150,
    flex: 1
  },
  bottom: {
    flex: 1
  },
  texto: {
    color: 'white',
    fontSize: 15,
    marginTop: 10,
    fontWeight: 'bold'
  },
  inputTexto: {
    marginTop: 10,
    backgroundColor: 'white',
    height: 45,
    width: 450,
    fontSize: 20,
    borderRadius: 10,
    paddingLeft: 10
  },
  btn: {
    paddingTop: 25,
  },

  btnClick: {
    marginTop: 20,
    
    backgroundColor: 'red',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50
  },
  textoBtn: {
    fontSize: 16,
    color: 'white'
  }

});

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
  top: {
    height: 90,
    backgroundColor: '#222'
  },
  middle: {
    flex:1,
    backgroundColor: '#292929'
  },
  bottom: {
    height: 65,
    backgroundColor: '#222'
  },
  textoTop: {
    paddingTop: "10%",
    paddingLeft: "2%",
    color: '#FFF',
    fontSize: 20
  },
  imageTop: {
    flex:1
  }
});*/

export default App;