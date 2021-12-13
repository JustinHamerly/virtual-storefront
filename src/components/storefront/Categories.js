import { Grid, Card, Button, Typography } from "@mui/material";

function Categories(props){
  return(
    <Grid sx={{ padding: '25px 0px',}} justifyContent="center" container spacing={1}>
    {props.current.category.categories.map((category, idx) => {
      if(!category.active){
        return (
          <Grid key={idx} item>
            <Card>
              <Button sx={{ bgcolor: '#FFFFFF', height: '50px', width: '200px' }} onClick={() => {
                props.current.changeCategory(category.normalized);
                props.current.changeProducts(category.normalized);
              }}><Typography>{category.name}</Typography></Button>
            </Card>
          </Grid >
        )
      }else{
        return(
          <Grid key={idx} item>
            <Card>
              <Button disabled sx={{ color: 'primary.active', bgcolor: '#0f2a36', height: '50px', width: '200px' }}><Typography sx={{ color: 'primary.active'}}>{category.name}</Typography></Button>
            </Card>
          </Grid >
        )
      }
    })}
  </Grid>
  );
}

export default Categories;
