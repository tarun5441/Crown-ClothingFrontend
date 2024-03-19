import React from 'react'
import './CollectionItem.css'

import CustomButton from '../custom-button/customButton'
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { addItem } from '../../redux/cart/action';

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cartItems)
  const handleClick = () => {
    dispatch(addItem(item))
  }
  return (
    <>
      <Card sx={{ minWidth: 280, margin: 3, marginTop: 10, boxShadow: '5px 10px 10px grey' }} className="card">
        <CardActionArea  >
          <div className='image-container'>
            <CardMedia
              component="img"
              height="250"
              width="250"
              image={item.imageUrl}
              alt={item.name}
            />
            <div className="textblock" >
              <CustomButton variant="outline" onClick={handleClick} >ADD TO CART</CustomButton>
            </div>
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: ${item.price}
            </Typography>

          </CardContent>
        </CardActionArea>
      </Card>

    </>
  )
}


export default CollectionItem
