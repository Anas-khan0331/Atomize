import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import cardPic1 from "../../assets/images/one.svg"
import cardPic2 from "../../assets/images/two.svg"
import cardPic3 from "../../assets/images/three.svg"
import cardPic4 from "../../assets/images/four.svg"


const MyFeatures = () => {
  return (
    <>
        <Grid container spacing={1}>
            <Grid item lg={3} md={4} sm={6} xs={12}>
                <Card sx={{p:4,boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'}}>
                    <CardMedia image={cardPic1} sx={{width:"40px" ,height:'40px'}}/>
                    <CardContent sx={{px:0,pt:5, }}>
                    <Typography variant='h6'>Flexible Grid</Typography>
                    <Typography paragraph >Change grid variables or give decimal column size.</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size='small'>See How</Button>
                    </CardActions>
                </Card>
            </Grid>



            <Grid item lg={3} md={4} sm={6} xs={12}>
                <Card sx={{p:4,boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'}}>
                    <CardMedia image={cardPic2} sx={{width:"40px" ,height:'40px'}}/>
                    <CardContent sx={{px:0,pt:5, }}>
                    <Typography variant='h6'>Style guide</Typography>
                    <Typography paragraph >Update theme throughout the application easily.</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size='small'>See How</Button>
                    </CardActions>
                </Card>
            </Grid>





            <Grid item lg={3} md={4} sm={6} xs={12}>
                <Card sx={{p:4,boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'}}>
                    <CardMedia image={cardPic3} sx={{width:"40px" ,height:'40px'}}/>
                    <CardContent sx={{px:0,pt:5, }}>
                    <Typography variant='h6'>Spacing</Typography>
                    <Typography paragraph >A better and controlled way of update spacing.</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size='small'>See How</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
                <Card sx={{p:4,boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'}}>
                    <CardMedia image={cardPic4} sx={{width:"40px" ,height:'40px'}}/>
                    <CardContent sx={{px:0,pt:5, }}>
                    <Typography variant='h6'>Responsive</Typography>
                    <Typography paragraph >Better control to make the app responsive.</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size='small'>See How</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    </>
  )
}

export default MyFeatures