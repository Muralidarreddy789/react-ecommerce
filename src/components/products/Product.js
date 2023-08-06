import ListItem from "./ListItem/ListItem";

const items=[{
    name:'Woodland Shoes',
    price:40,
    discount:20
   },{
    name:'Woodland Shoes',
    price:1500,
    discount:1000
   }]
const Product=()=>{
    return (
        <div className={'main'}>
          <ListItem data={items[0]}></ListItem>
          <ListItem data={items[1]}></ListItem>
        </div>
      );
}

export default Product;