import React, { useContext, useEffect } from 'react';
import {
  GridList,
  GridListTile,
  GridListTileBar,
  ListSubheader,
  makeStyles,
} from '@material-ui/core';
import { Context, sectoresDisponibles } from '../store';
import { fetchSectores } from '../api';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export const Home = () => {
  const classes = useStyles();
  const { globalState, globalDispatch } = useContext(Context);

  console.log(globalState);

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
        <h1>LOADING sectores ....</h1>
      ) : (
        <div className={classes.root}>
          <GridList cellHeight={220} className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
              <ListSubheader component="div">Sectores</ListSubheader>
            </GridListTile>
            {globalState.sectores.map((sector) => (
              <GridListTile key={sector.id_sector}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/${sector.picture_name}`}
                  alt={sector.name}
                />
                <GridListTileBar title={sector.name} subtitle={sector.descr} />
              </GridListTile>
            ))}
          </GridList>
        </div>
      )}
    </>
  );
};
