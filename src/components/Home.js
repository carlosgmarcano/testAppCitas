import React, { useContext, useEffect } from 'react';
import {
  GridList,
  GridListTile,
  GridListTileBar,
  makeStyles,
  CircularProgress,
  CardActions,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { Context, sectoresDisponibles } from '../store';
import { fetchSectores } from '../api';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(5),
    },
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.default,
  },
  gridList: {
    width: 'auto',
  },
  loader: {
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto'
  },
  text: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    marigin: 'auto',
    color: theme.palette.primary.main
  },
  tile: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  }
}));

export const Home = () => {
  const classes = useStyles();
  const { globalState, globalDispatch } = useContext(Context);

  useEffect(() => {
    const effect = async () => {
      if (globalState.sectores) return;

      const sectores = await fetchSectores();

      globalDispatch(sectoresDisponibles(sectores.data.cur_sector));
    };

    effect();
  }, []);

  return (
    <>
      {!globalState.sectores ? (
        <div className={classes.loader}>
          <CircularProgress color="secondary.main" />
        </div>
      ) : (
          <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
              {globalState.sectores.map((sector) => (
                <Link to={`/Favoritos`} >
                  <GridListTile key={sector.id_sector} className={classes.tile}>
                    <CardActions>
                      <CardMedia
                        component="img"
                        alt={sector.name}
                        height="auto"
                        image={`${process.env.PUBLIC_URL}/images/${sector.picture_name}`}
                      />
                    </CardActions>

                    {/* //<GridListTileBar title={sector.name} subtitle={sector.descr} /> */}
                  </GridListTile>
                  <Typography variant="caption" className={classes.text} >{sector.name}</Typography>
                </Link>
              ))}
            </GridList>
          </div>
        )}
    </>
  );
};
