//thiet ke model gom 1 anh + 4 text: props
import React from "react";
import { Text,View,TouchableWithoutFeedback,StyleSheet,Image } from "react-native";
//dinh nghia model gom 1 anh va 4 text: props 
// va 1 su kien khi click
//can co 1 data chua 5 thuoc tinh
//can co 1 su kien
//goi la props
const ProductTL6 = (props) =>{
     const {dataProd, handlePress}=props;
     //dataProd: chua 5 thuoc tinh
     //handlePress: chua 1 su kien
     //----
     //1.khai bao ham khi xu ly su kien
     const fun_handlePress = ()=>{
          //neu click thi chuyen du lieu dataProd
          //neu khong click thi du lieu = null
          handlePress ? handlePress(dataProd) : null;
     }
     //2. khai bao thuoc tinh du lieu
     return(
          <View style={styles.container}>
               <TouchableWithoutFeedback onPress={fun_handlePress}>
                    <View>
                         <Image source={{uri: dataProd.search_image}}
                         style={styles.image}/>
                         <Text>{dataProd.styleid}</Text>
                         <Text>{dataProd.brands_filter_facet}</Text>
                         <Text>{dataProd.price}</Text>
                         <Text>{dataProd.product_additional_info}</Text>
                    </View>
               </TouchableWithoutFeedback>
          </View>
     );
}
export default ProductTL6;
//viet css
const styles=StyleSheet.create({
     container: {
          flex:1, // container chiem toan bo khong gian man hinh
     },
     image:{
          width:200,
          height:200,
          borderWidth:1,
     },
});