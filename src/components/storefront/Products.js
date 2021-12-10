import { Grid } from '@mui/material';
import Product from '../products/Product';

function Products(props){
  console.log(props); 
  return(
    <Grid justifyContent="center" alignItems="center" height="600px" container spacing={1}>
      {props.current.product.displayedProducts.map((product, idx) => {
        return (
          <Grid key={idx} item>
            <Product product={product} />
          </Grid >
        )
       })
      }
    </Grid>
  )
}

export default Products;
