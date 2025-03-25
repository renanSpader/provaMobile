import { Text, View, StyleSheet, Image,} from "react-native";
import { ImageBackground } from "react-native-web";

export default function home(){
    return(
        <View style ={styles.containerhome}>

            

            <Text style={styles.txt}>Santa Marta</Text>
            
            <View style={styles.viewimg}>
                <Image style={styles.img} source={require("../assets/ftprisiongrime.webp")}/>
                <Image style={styles.img} source={require("../assets/ftestatua.webp")}/>
            </View>

            <Text style={styles.txt}>Camiseta Streetwear</Text>

            <Text style={styles.txt}>Santa Marta, 2025</Text>

            <View style={styles.row}>
                <Image style={styles.img} source={{uri: "https://acdn-us.mitiendanube.com/stores/001/886/076/products/20220703_161757-copiar1-d70471e86a3192a09016571379383997-1024-1024.jpg"}} />
            
                <Image style={styles.img} source={{uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fshopee.com.br%2FCamiseta-Streetwear-Gangster-Hip-Hop-Masculina-Streetwear-Solto-Gr%25C3%25A1fico-Gangster-i.770442471.21699232225&psig=AOvVaw3jjbvcipjRnEQyCh-eZ7P5&ust=1743007152017000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMCBrOXVpYwDFQAAAAAdAAAAABAZ"}} /> 

            </View> 

            

        </View>
    )
}

const styles = StyleSheet.create({
    containertest:{
        flex: 1,
        padding: 20,
        justifyContent: 'center'
    },

    img:{
        width: 100,
        height: 100,
        borderRadius: 5,
        alignSelf: 'center'
    },

    viewimg:{
        alignItems: 'center'
    }, 

    txt:{
        fontSize: 20,
        alignSelf: 'center'
    },

    row:{
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    txtcred:{
        alignSelf: 'center'
    },

})