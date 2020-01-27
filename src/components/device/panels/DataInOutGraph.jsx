import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography, Box, Paper, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({});

const DEVICE_DATA_QUERY = gql`
  query UpDownData($uuid: String!) {
    deviceStatByUuid(uuid: $uuid) {
      httpsPacketCount
      dataTransferred
      dataOut
      dataIn
    }
  }
`;

function convertBytesToHumanReadable(byteCount) {
  if (byteCount < 1000) {
    return `${byteCount} Bytes`;
  }

  const KbCount = byteCount / 1000;
  if (KbCount > 1000) {
    const MbCount = KbCount / 1000;
    return `${MbCount} Mb`;
  }
  return `${KbCount} Kb`;
}

function DataUpDownLivePanel(props) {
  const classes = useStyles();
  const { device } = props;
  const { uuid } = device;
  const { data, loading, error } = useQuery(DEVICE_DATA_QUERY, {
    variables: { uuid },
    skip: !uuid,
    pollInterval: 500,
  });

  if (loading)
    return <CircularProgress id="loading" className={classes.load} />;
  if (error) {
    console.log(error);
    return (
      <p id="error" className={classes.load}>
        Error :(
      </p>
    );
  }

  return (
    <Paper className={classes.root}>
      <Tooltip title="tbc" arrow>
        <Box display="flex" width="100%" height="100%">
          <Typography component="h1" variant="h6" align="center" noWrap>
            In: {convertBytesToHumanReadable(data.deviceStatByUuid.dataIn)}
            Out: {convertBytesToHumanReadable(data.deviceStatByUuid.dataOut)}
          </Typography>
        </Box>
      </Tooltip>
    </Paper>
  );
}

DataUpDownLivePanel.propTypes = {
  device: PropTypes.shape({
    uuid: PropTypes.string,
  }),
};

export default DataUpDownLivePanel;
