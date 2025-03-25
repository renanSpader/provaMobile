import { Text, View, StyleSheet, Button, TextInput} from "react-native";

export default function login(){
    return(
        <View style ={styles.containerlogin}>
            
            <Text style={styles.titulo}>Login Santa Marta</Text>

            <TextInput
                style={styles.txtinput} 
                placeholder="usuario"
                placeholderTextColor={'black'}
            />

            <TextInput
                style={styles.txtinput}  
                placeholder="senha"
                placeholderTextColor={'black'}

            />

            <Button
                title="Enviar"
                color={'black'}

            />

        </View>
    )
}

const styles = StyleSheet.create({
    containertest:{
        flex: 1,
        backgroundColor: '#F5DEB3',
        padding: 20,
        justifyContent: 'space-evenly'
    },

    viewimg:{
        alignItems: 'flex-end'
    }, 

    txt:{
        fontSize: 20,
        alignSelf: 'flex-end'
    },

    row:{
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    txtcred:{
        alignSelf: 'center'
    },

    txtinput:{
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 5,
    }

})