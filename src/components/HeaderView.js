import { StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors, parameters } from '../global/styles';
export default function HeaderView({title,name}) {
  return (
    <View style={styles.header}>
      <View>
        <MaterialCommunityIcons
          name={name}
          size={40}
          style={{marginLeft: 20, color:'white', fontSize:30}}
          onPress={()=> {}}
        />
        
      </View>
      <View>
          <Text style={styles.headerText}>{title}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.buttons,
    flexDirection: 'row',
    height: parameters.headerHieght,
    alignItems:'center',
    gap:30,
  },
  headerText: {
    color: colors.headerText,
    fontSize: 23,
    fontWeight: 'bold',
    
  },
});
