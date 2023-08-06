function ListItem(props)
{
    const {data}=props;
   return (
   <div className={"card"}>
      <div className={"image-container"}>
        <img className={"image"} src="image/woodland.jpeg" alt="" />
      </div>
      <div className="card-details">
          <p>₹{data.name}</p>
        <div className='price-details'>
          <span>₹{data.discount}</span>
          <small>
            <strike>{data.price}</strike>
          </small>
        </div>
        <button className='button'>add to cart</button>
      </div>
  </div>);
}

export default ListItem;