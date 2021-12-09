import { Grid, Card, Button } from "@mui/material";

function Categories(props){
  return(
    <Grid sx={{ margin: '50px 0px',}} justifyContent="center" container spacing={1}>
    {props.current.category.categories.map((category, idx) => {
      if(!category.active){
        return (
          <Grid key={idx} item>
            <Card>
              <Button onClick={() => {
                props.current.active(category.normalized);
              }}>{category.name}</Button>
            </Card>
          </Grid >
        )
      }else{
        return(
          <Grid key={idx} item>
            <Card>
              <Button disabled>{category.name}</Button>
            </Card>
          </Grid >
        )
      }
    })}
  </Grid>
  );
}

export default Categories;
