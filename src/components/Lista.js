import React from 'react';
import style from '../style/Style';
import img from '../assets/ico.png';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { Link } from 'react-router-dom';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';

const Lista = ({ items }) => {
  return (
    <Card className={style.root}>
      <Link to={`/Favoritos`}>
        <GridList cellHeight={120} className={style.gridList}>
          <GridListTile
            key="Subheader"
            cols={2}
            style={{ height: 'auto' }}
          ></GridListTile>
          {items.map((item) => (
            <GridListTile>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={item.name}
                  height="40"
                  image={img}
                  title={item.name}
                />
                <CardContent>
                  <Typography component="h6" variant="h6" color="primary">
                    {item.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </GridListTile>
          ))}
        </GridList>
      </Link>
    </Card>
  );
};

export default Lista;
