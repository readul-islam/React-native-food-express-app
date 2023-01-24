import { Image, StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import Swiper from 'react-native-swiper'
import { colors, parameters } from '../../global/styles'



export default function SignInWelcomeScreen(){
return (<>
<View style={{flex:3, justifyContent:'flex-start', alignItems:"center",padding:20}}>
    <Text style={styles.headingText}>DISCOVER RESTAURNATS</Text>
    <Text style={styles.headingText}>IN YOUR AREA</Text>

</View>

<View style={{flex:4,justifyContent:'center' }}>

    <Swiper>
        <View style={styles.slide1}>
            <Image
            source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/800px-Good_Food_Display_-_NCI_Visuals_Online.jpg"}}
            style={{height:"100%",width:"100%"}}
            />
        </View>
        <View style={styles.slide2}>
            <Image
            source={{uri:"http://cdn.cnn.com/cnnnext/dam/assets/140430115517-06-comfort-foods.jpg"}}
            style={{height:"100%",width:"100%"}}
            />
        </View>
        <View style={styles.slide3}>
            <Image
            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfpZB0_3qGRT0vx7Jlw662goIgQc9en4esg&usqp=CAU"}}
            style={{height:"100%",width:"100%"}}
            />
        </View>
    </Swiper>
</View>
<View style={{flex:4, justifyContent:"flex-end", marginBottom:15, gap:20,marginHorizontal:15}}>
    <Button
    
    buttonStyle={parameters.styledButton}

            title="SIGN IN"
            titleStyle={parameters.buttonTitle}
    ></Button>
          <Button titleStyle={{
    color: colors.gray4,
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  }} buttonStyle={{
    backgroundColor:'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 20,
    width: '100%',
    borderColor: colors.grey3
  }} title='Create new account'></Button>
</View>



</>)
}



const styles = StyleSheet.create({
headingText:{
    fontSize:26,
    fontWeight:'bold',
  color:colors.buttons
}
,
wrapper: {},
slide1: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#9DD6EB'
},
slide2: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#97CAE5'
},
slide3: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#92BBD9'
},
text: {
  color: '#fff',
  fontSize: 30,
  fontWeight: 'bold'
}
})