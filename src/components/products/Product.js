import { Card, Typography } from '@mui/material';

export default function Product(props){
  return(
    <Card sx={{width: '200px', height: '400px'}}>
      <Typography>{props.product.name}</Typography>
      <Typography>{`$${props.product.price}`}</Typography>
      <Typography>{props.product.description}</Typography>
    </Card>
  )
}
