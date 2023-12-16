import { StyleSheet, Text, View } from 'react-native';

export const Header = () => {
    return(
        <View style={styles.header}>
            <Text style={styles.headtext}>Shopping List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#ff7f50',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headtext:{
        fontWeight: 'bold',
        color:'white',
        fontSize: 30,
    }
})
