import React from "react";
import { FlatList,View,Text } from "react-native";
import ProductTL6 from "./ProductTL6";
export default class ListProductTL6 extends React.Component{
     //1. Ham khoi tao chua state
     constructor(props)
     {
          super(props); //truyen props tu model
          this.state={
               products: null, //tap hop cac state co the co
          };
          //Khoi tao 1 so ham
          //ham lay du lieu tu server
          this.getProducts=this.getProducts.bind(this);
          //ham ket xuat cac item
          this.renderItems=this.renderItems.bind(this);
          //ham xu ly su kien khi click (navigation)
          this.handlePress=this.handlePress.bind(this);

     }
     //2. Ham load du lieu (giong OnCreate trong Android)
     componentDidMount()
     {
          this.getProducts();//goi ham doc du lieu tu server
     }
     //3. Dinh nghia cac ham
     async getProducts() //ham doc du lieu khong dong bo tu server
     {
          const url="https://batdongsanabc.000webhostapp.com/thanglong/API.php";
          let response = await fetch(url,{method:'GET'});//doc du lieu
          let responseJSON=await response.json();//chuyen sang json
          //update du lieu vao state
          this.setState({
               products: responseJSON.products, //products la ten bang du lieu
          });
     }
     renderItems({index,item})
     {
          return(
               <ProductTL6
               dataProd={item}
               handlePress={this.handlePress}
               />
          );
     }
     handlePress(dataProd){//navigation
          this.props.navigation.navigate('DetailProductTL6',{data: dataProd});
          //chu y: neu thieu thu vien thi can cai nhu sau
          //npm install -g tenThuVien
     }
     //4. Ket xuat du lieu
     render()
     {
          return(
               <FlatList
                    data={this.state.products}
                    renderItem={this.renderItems}
                    numColumns={3}
                    removeClippedSubviews
               />
          );
     }
}