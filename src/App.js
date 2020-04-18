import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { SearchBar } from './components/SearchBar';
import { RepoList } from './components/RepoList';
import { Paginator } from './components/Paginator';
import { Message } from './components/Message';
import { Loader } from './components/Loader';

const useStyles = makeStyles((theme) => ({
    searchArea: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    cardGrid: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(8),
    },
    pagination: {
        backgroundColor: theme.palette.background.paper,
        paddingTop: theme.spacing(2),
        padding: theme.spacing(36),
    },
}));

function App() {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  return (
      <React.Fragment>
          <CssBaseline />
          <AppBar position="relative">
              <Toolbar>
                  <Typography variant="h6" color="inherit" noWrap>
                      GitHub Search
                  </Typography>
              </Toolbar>
          </AppBar>

          <main>
              <div className={classes.searchArea}>
                  <Container maxWidth="md">
                      <SearchBar page={page}/>
                  </Container>
              </div>

              <Container className={classes.cardGrid} maxWidth="md">
                  <Grid container spacing={4}>
                      <RepoList/>
                  </Grid>
              </Container>

              <Container className={classes.pagination} maxWidth="md">
                  <Paginator setPage={setPage}/>
              </Container>

          </main>

          <Message/>
          <Loader/>

      </React.Fragment>
  );
}

export default App;
