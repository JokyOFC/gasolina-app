import { StatusBar } from 'expo-status-bar';
import { Component } from 'react'
import { StyleSheet, Text, View, Modal, TextInput, Image, Alert, TouchableOpacity } from 'react-native';
import Calculo from './src/Calculo.js'

class App extends Component {
 
  constructor(props){
    super(props);
    this.state = {
      modalVisible: false,
      nAlcool: '',
      nGasol: '',
      nCalc1: '',
      nCalc2: ''
    }
    this.calcular = this.calcular.bind(this)
  }

  calcular(){
    var Alcool = this.state.nAlcool
    var Gasolina = this.state.Gasol

    var result = (Alcool / Gasolina)

    if(this.state.nAlcool == '' || this.state.nGasol == ''){
      Alert.alert('ERRO!', 'Os campos devem ser preenchidos!')
      return false;
    } else if(result < 0.7){
      //Alert.alert('a', result)
      this.setState({modalVisible: true})
    }
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
            <TextInput onChangeText={(nAlcool) => this.setState({nAlcool})} keyboardType='numeric' maxLength={10} style={styles.inputTexto} placeholder='Digite um valor' underlineColorAndroid="transparent"/>
            <Text style={styles.texto}>Gasolina (preco por litro):</Text>
            <TextInput onChangeText={(nGasol) => this.setState({nGasol})} keyboardType='numeric' maxLength={10} style={styles.inputTexto} placeholder='Digite um valor'/>
            <TouchableOpacity  style={styles.btnClick} onPress={this.calcular}>
              <Text style={styles.textoBtn}> Calcular </Text>
            </TouchableOpacity>
          </View>
          <Modal animationType='slide' styel={{backgroundColor: '#222'}} visible={this.state.modalVisible} >
            <Calculo />
          </Modal>
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