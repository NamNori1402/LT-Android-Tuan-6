//chu y khi cai navigation: vao thu muc ung dung
//npm install -g react-navigation-stack
//npm install -g react-navigation
//file nay giong android manifest
import ListProductTL6 from "./ListProductTL6";
import DetailProductTL6 from "./DetailProductTL6";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
const RootNavigator = createStackNavigator(
     //danh sach cua cac activity
     {
          ListProductTL6:
          {
               screen: ListProductTL6,
               navigationOptions: ()=>({title:'ListProductTL6'}),
          },
          DetailProductTL6:
          {
               screen: DetailProductTL6,
               navigationOptions: ()=>({title: 'DetailProductTL6'})
          },

     },
     //activity khoi chay dau tien
     {
          initialRouteName: 'ListProductTL6',
     }
);
export default createAppContainer(RootNavigator);