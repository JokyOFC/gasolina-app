import { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

export default class Calculo extends Component {

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.topimg}>
                    <Image style={styles.logo} source={require('../assets/gas.png')}/>
                    <Text style={this.props.estilo}> {this.props.titulo} </Text>
                </View>
                <View style={styles.conteudo}>
                    <Text>Com os preços:</Text>
                    <View style={styles.descricao}>
                        <Text> Álcool: R$ {this.props.calc1} </Text>
                        <Text> Gasolina: R$ {this.props.calc2} </Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={this.props.fechar} style={styles.botao}>
                            <Text>Calcular novamente</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.esp_bton}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#222'
    },
    esp_bton: {

    },
    conteudo: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    descricao: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    topimg: {

    },
    logo: {

    },
    botao: {
        backgroundColor: 'red',
        marginTop: 35,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        width: 250,
    }

})