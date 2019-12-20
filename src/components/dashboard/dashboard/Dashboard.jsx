import React from 'react';
// import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { indigo } from '@material-ui/core/colors';
import HomePanel from '../../home-panel/index';
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import DrawerBar from './DrawerBar.jsx';
// import Charts from './Charts.jsx';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    background: indigo,
  },
  fixedHeight: {
    height: 600,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <DrawerBar />
      <main className={classes.content}>
        {/* <Container maxWidth="lg" className={classes.container} /> */}
        <HomePanel />
      </main>
    </div>
  );
}

// {/* <Grid container spacing={3}>
// {/* Chart */}
// <Grid item xs={12} md={8} lg={9}>
//   <Paper className={fixedHeightPaper}>
//     <Charts />
//   </Paper>
// </Grid>
// </Grid> */}
