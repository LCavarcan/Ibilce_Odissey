import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginBottom:100,
        flex:1,
        backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    formTitle:{
        fontSize: 36,
        fontWeight: 'bold', 
        color: 'blueviolet', 
        margin: 10,
    },
    formInput:{
        borderColor: 'blueviolet',
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 22,
        width:'80%',
        padding: 10,
        margin: 10,
    },
    formButton:{
        backgroundColor: 'blueviolet',
        alignItems: 'center',
        borderRadius: 10,
        width:'80%',
        padding: 10,
        margin: 10,
    },
    textButton:{
        color: 'white', 
        fontSize: 20,
        fontWeight: 'bold',
    },
    subContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    subButton:{
        padding:10,
    },
    subTextButton:{
        color: 'blueviolet',
    },
})