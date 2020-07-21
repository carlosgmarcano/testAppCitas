import React from 'react';
import style from '../style/Style'
import SEAGENTE from '../assets/images/SEAGENTE.png';
import SEBELLEZ from '../assets/images/SEBELLEZ.png';
import SECONMED from '../assets/images/SECONMED.png';
import SECONVET from '../assets/images/SECONVET.png';
import SEDISCOT from '../assets/images/SEDISCOT.png';
import SEFINANC from '../assets/images/SEFINANC.png';
import SEGIMNA from '../assets/images/SEGIMNA.png';
import SEGOBIER from '../assets/images/SEGOBIER.png';
import SEPANADE from '../assets/images/SEPANADE.png';
import SERESTAU from '../assets/images/SERESTAU.png';
import SESUPER from '../assets/images/SESUPER.png';
import SETERAPI from '../assets/images/SETERAPI.png';
import SEZOOLOG from '../assets/images/SEZOOLOG.png';




import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardMedia, CardContent, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
    width: theme.spacing(2),
    height: theme.spacing(2),
  },
}));


const Lista = ({items}) => {
    
  const classes = useStyles();

    return (
      <Card className={style.root}>
        <Link to = {`/Favoritos`} >
          <GridList cellHeight={120} className={style.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            </GridListTile>
              {items.map((item) => (
              <GridListTile>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt= {item.name}
                        height="40"
                        image={SEZOOLOG}
                        title={item.name}
                    />
                    <CardContent>
                        <Typography component="h6" variant="h6" color="secundary">
                            {item.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
              </GridListTile>
            ))}
          </GridList>
        </Link>
      </Card>
    )
}



export default Lista

