import { Text, View, StyleSheet, ImageBackground } from "react-native-web"

import moment from "moment"
import '/moment/locale/pt-br'

import todayImage from '../../assets/today.jpg'

export default function TaskList(){
    const today = moment().local('pt-br').format('ddd, D [de] MMMM')

    return(
        <View style={styles.container}>

            <View style={styles.titleBar}></View>
                <ImageBackground source={todayImage} style={styles.background}>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subtitle}>{today}</Text>
                    </View>
                </ImageBackground>

                <View style ={styles.taskList}>

                </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    background: {
        flex: 3
    },
    taskList:{
        flex:7
    },
    titleBar:{
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: 'black'
    },
    title:{
        color: 'white',
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 20
    },
    subtitle:{
        color: 'white',
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30
    }
})