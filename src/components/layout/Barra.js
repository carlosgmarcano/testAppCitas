import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { TextField, Grid, Container} from '@material-ui/core';

const Barra = () => {
    return (
        <Container maxWidth="xs">
            <div>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <TextField
                            //className={classes.margin}
                            variant="filled"
                            name="buscar"
                            label="Buscar"
                            fullWidth
                            InputProps={{
                                endAdornment: (
                                    //<InputAdornment position="start">
                                    <SearchIcon />
                                //</InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
}

export default Barra;
