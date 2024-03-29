import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Box, Tooltip } from '@material-ui/core';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  root: {
    height: '100%',
  },
  text: {
    display: 'table-cell',
    jusitfyContent: 'center',
    verticalAlign: 'middle',
  },
  marginAutoContainer: {
    width: 500,
    height: 80,
    display: 'flex',
    backgroundColor: 'gold',
  },
});

const DEVICE_LIST_QUERY = gql`
  {
    allDevices {
      nodes {
        uuid
        lastSeen
      }
    }
  }
`;

const tooltipText =
  'Each device on the network is given a unique IP ' +
  'address in a range (normally 1-256). This address is supplied by your ' +
  'router, and is used to direct traffic to each specific device.';

function DevicesConnected() {
  const classes = useStyles();
  const { loading, error, data } = useQuery(DEVICE_LIST_QUERY, {
    pollInterval: 5000,
  });

  if (loading) return <CircularProgress />;
  if (error) return <p>Error :(</p>;
  return (
    <Paper className={classes.root}>
      <Tooltip title={tooltipText} arrow>
        <Box display="flex" width="100%" height="100%">
          <Box m="auto">
            <Typography component="h1" variant="h6" align="center" noWrap>
              Active Devices:{' '}
              {
                data.allDevices.nodes.filter(
                  x =>
                    new Date().getTime() - new Date(x.lastSeen).getTime() <
                    60000,
                ).length
              }
            </Typography>
          </Box>
        </Box>
      </Tooltip>
    </Paper>
  );
}

DevicesConnected.propTypes = {};

export default DevicesConnected;
