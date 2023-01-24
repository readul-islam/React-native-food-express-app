import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Button } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HeaderView from '../../components/HeaderView';
import SignInMethod from '../../components/SignInMethod';
import { colors, parameters, title } from '../../global/styles';
export default function SignInScreen() {
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);
  const [textInpu2Focus, setTextInput2Focus] = useState(false);
  const [visiblity, setVisiblity] = useState(false);
  return (
    <View style={styles.container}>
      <HeaderView name="arrow-left" title="MY ACCOUNT" />
      <Text style={title}>Sign-In</Text>

      <View style={{marginHorizontal: 15}}>
        <View style={styles.text1}>
          <Text>Please enter the email and password</Text>
          <Text>registered with your account</Text>
        </View>
        <View style={{marginTop: 20}}>
          <TextInput
            style={styles.textInput1}
            ref={textInput1}
            placeholder="Email"
          />
        </View>

        <View style={styles.textInput2}>
          <Animatable.View
           
            duration={400}>
            <MaterialCommunityIcons
              name="lock"
              style={{fontSize: 22, color: colors.grey3}}
            />
          </Animatable.View>
          <TextInput
            secureTextEntry={visiblity ? false : true}
            style={{width: '80%'}}
            ref={textInput2}
            placeholder="Password"
          />

          <TouchableOpacity onPress={() => setVisiblity(!visiblity)}>
            {visiblity ? (
              <MaterialCommunityIcons
                name="eye"
                style={{fontSize: 22, color: colors.grey3, marginRight: 10}}
              />
            ) : (
              <MaterialCommunityIcons
                name="eye-off"
                style={{fontSize: 22, color: colors.grey3, marginRight: 10}}
              />
            )}
          </TouchableOpacity>
        </View>

        <View>
          <Button
            buttonStyle={parameters.styledButton}

            title="Sign In"
            titleStyle={parameters.buttonTitle}
          />
        </View>
        <Text
        style={{
          textAlign: 'center',
          marginTop: 20,
          textDecorationLine: 'underline',
          fontSize: 17,
          fontWeight: '500',
        }}>
        Forgot Password ?
      </Text>

     
      
      <SignInMethod />

        <Text style={{ marginVertical: 15,
         
          fontSize: 17,
          fontWeight: '500',}}>New on expressFood ?</Text>
      
      
      
      <Button titleStyle={{color:'#ff8c52', fontWeight:'700'}} buttonStyle={{backgroundColor:'white',borderWidth:1,borderColor:"#ff8c52", width:'50%',borderRadius:10, alignSelf:"flex-end"}} title='Create new account'></Button>
   
      </View>

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text1: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.grey3,
    fontSize: 16,
    marginTop: 10,
  },
  textInput1: {
    borderWidth: 1,
    borderColor: '#86939e',

    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
  },
  textInput2: {
    borderWidth: 1,
    borderColor: '#86939e',
    borderRadius: 12,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
  },
});
