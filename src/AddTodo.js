import React from 'react'
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native'
import { useState } from 'react'

export const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState('')


    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue('')
        } else {
            Alert.alert('Title cant be blank')
        }

    }

    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder='Write what you need tood'
                autoCorrect={false}
                autoCapitalize='none'

            />
            <Button title='Dobavit' onPress={pressHandler} />
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        width: '80%',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: '#3949ab'
    }
});


export default AddTodo;


