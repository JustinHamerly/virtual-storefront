import { Card, Typography, Button } from '@mui/material';

export default function Product(props){
  return(
    <Card sx={{width: '200px', height: '400px'}}>
      <Typography variant="h4" >{props.product.name}</Typography>
      <Typography variant="h4" >{`$${props.product.price}`}</Typography>
      <Typography variant="h6" >{props.product.description}</Typography>
      <Button>+CART</Button>
    </Card>
  )
}
