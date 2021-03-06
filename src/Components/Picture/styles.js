/* eslint-disable prettier/prettier */
import {StyleSheet,Dimensions} from 'react-native'

const largura = Dimensions.get('window').width
const style=StyleSheet.create({
    imagem:{
      width: largura,
      height: largura,
    },
    like:{
      width:largura/14,
      height:largura/14
    },
    numLikes:{
      flexDirection:'row',
      alignItems:'center'
    },
    desc:{
      marginHorizontal:largura*0.02,
      marginTop:5,
    }
})

export default style