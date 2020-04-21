#  :heavy_check_mark: Desafio 03 - React Native 

Neste desafio completa-se a primeira semana de estudos e desafios da Bootcamp - com a criação de uma aplicação mobile simples, porém aplicando vários conceitos fundamentais do React Native.

## O que é o React Native?

- É uma plataforma para construção de interfaces mobile;

## Sintaxe

- Não utiliza HTML, apenas componentes próprios (View, Text, Image, StyleSheet ...)
- Aplica estilo sem classes e ID´s

Exemplo de um código REACT NATIVE;

```
Import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity
} from 'react-native';

function Button(){
	return(
  
       {/*Componentes React Native*/}
		<View style ={styles.container}>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.text}>Enviar</Text>
			 </TouchableOpacity>
		</View>
	);
}

{/*Exemplo de Estilização*/} 

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	button : {
			backgroundColor: '#7159c1',	
	},
	text: {
			fontWeight: 'bold',
	}
});

```

### Axios

## O que é o Axios?

- De forma simples, é a comunicação entre a aplicação back-end com a aplicação front-end;

Algumas opções para utilizar e  conectar o emulador com o backend em Node.js

> - iOS com Emulador:
> ```localhost:porta
> - iOS  com físico: 
> ```Ip da máquina 
> - Android com Emulador: 
> ```localhost (abd reverse)
> - Android com Emulador: 
> ```10.0.2.2 (Android Studio)
> - Android com Emulador: 
> ```10.0.2.2 (Android Studio)
> - Android com Emulador:  
> ```10.0.2.2 (Android Studio)
> - Android com Emulador: 
> ```10.0.2.2 (Android Studio)
> - Android com Emulador: 
> ```10.0.3.2 (Genymotion)
> - Android com físico: 
> ```Ip da máquina


#  :pushpin: O DESAFIO: 
O objetivo da aplicação era criar um aplicativo mobile que listasse todos os repositórios criados na aplicação back-end e mostrasse na front-end e além disse adicionar uma função para curitr os repositórios;
