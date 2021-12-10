import { Grid, Card, Button } from "@mui/material";

function Categories(props){
  return(
    <Grid sx={{ padding: '25px 0px',}} justifyContent="center" container spacing={1}>
    {props.current.category.categories.map((category, idx) => {
      if(!category.active){
        return (
          <Grid key={idx} item>
            <Card>
              <Button sx={{ bgcolor: '#FFFFFF', height: '50px', width: '150px' }} onClick={() => {
                props.current.changeCategory(category.normalized);
                props.current.changeProducts(category.normalized);
              }}>{category.name}</Button>
            </Card>
          </Grid >
        )
      }else{
        return(
          <Grid key={idx} item>
            <Card>
              <Button disabled sx={{ bgcolor: '#bcdeec', height: '50px', width: '150px' }}>{category.name}</Button>
            </Card>
          </Grid >
        )
      }
    })}
  </Grid>
  );
}

export default Categories;
