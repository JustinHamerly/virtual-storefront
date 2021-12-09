import { Grid, Card, Button } from "@mui/material";

function Categories(props){
  console.log(props.current.category);
  return(
    <Grid sx={{ padding: '25px 0px',}} justifyContent="center" container spacing={1}>
    {props.current.category.categories.map((category, idx) => {
      if(!category.active){
        return (
          <Grid key={idx} item>
            <Card>
              <Button sx={{ bgcolor: '#FFFFFF', height: '50px', width: '200px' }} onClick={() => {
                props.current.active(category.normalized);
              }}>{category.name}</Button>
            </Card>
          </Grid >
        )
      }else{
        return(
          <Grid key={idx} item>
            <Card>
              <Button disabled sx={{ bgcolor: '#27789A', height: '50px', width: '200px' }}>{category.name}</Button>
            </Card>
          </Grid >
        )
      }
    })}
  </Grid>
  );
}

export default Categories;
