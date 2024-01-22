import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   label: {
      color: 'green',
      marginBottom: 2,
      fontSize: 14,
      fontWeight: '500',

   },
   textInput:{
    borderRadius: 100,
    color:'black',
    padding: 14,
    width: 350,
    backgroundColor: 'rgb(220, 220, 220)',
    marginBottom:15,
    fontSize: 18,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-between',
   },
   eye: {
      width: 18,
      height: 18,
   },
});