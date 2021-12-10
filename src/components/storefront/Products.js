import { Grid, Card } from '@mui/material';

function Products(props){
  console.log(props);
  return(
    <Grid sx={{ padding: '25px 0px',}} justifyContent="center" container spacing={1}>
      {props.current.product.displayedProducts.map((product, idx) => {
        return (
          <Grid key={idx} item>
            <Card>
              {product.name}
            </Card>
          </Grid >
        )
       })
      }
    </Grid>
  )
}

export default Products;
