import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Navbar = ({ title }) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#3949AB',
        padding: 15,
    },
    text: {
        color: '#fff',
        fontSize: 16,
    }
});


export default Navbar;


