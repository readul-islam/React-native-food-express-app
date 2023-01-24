import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SocialIcon } from 'react-native-elements';

export default function SignInMethod() {
  return (
    <>
      <Text style={styles.orText}>OR</Text>
      <SocialIcon
        style={styles.Button}
        title="Sign In With Facebook"
        button
        type="facebook"
      />
      <SocialIcon
      
        style={styles.Button}
        title="Sign In With Google"
        button
        type="google"
      />
    </>
  );
}

const styles = StyleSheet.create({
  Button: {
    borderRadius: 12,
    height: 50,
    fontSize: 28,
    width: '100%',
    marginBottom: 10,
  },


 
  orText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 14,
  },
});
