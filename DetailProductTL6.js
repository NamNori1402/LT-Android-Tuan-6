import React from "react";
import { ScrollView,FlatList,Text,View,Button,StyleSheet } from "react-native";
import ProductTL6 from "./ProductTL6";//import model
const DetailProductTL6 = (props) =>{//props duoc truyen tu listProduct
     //getIntent
     const {navigation}=props; //truyen cai navigation
     //lay du lieu
     const data=navigation.getParam('data','');//getBundle
     //xu ly su kien (neu co)
     const handlePress = () =>{
          props.navigation.navigate('Cart',{data:data});
     }
     //tra ve du lieu
     return(
          <ScrollView>
               <ProductTL6
                    dataProd={data}
               />
               <Button
                    title="Add To Cart"
                    onPress={handlePress}
               />
          </ScrollView>
     );

}
export default DetailProductTL6;