import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Collapse from '@material-ui/core/Collapse';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { green } from '@material-ui/core/colors';
// import data from '../../data/data.json';
import data from '../../data/healthdata.json';

var nodeID = 0;

function MinusSquare(props) {
  return (
    <SvgIcon fontSize="inherit" {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
    </SvgIcon>
  );
}

function PlusSquare(props) {
  return (
    <SvgIcon fontSize="inherit" {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
    </SvgIcon>
  );
}

function CloseSquare(props) {
  return (
    <SvgIcon className="close" fontSize="inherit" {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
    </SvgIcon>
  );
}

function TransitionComponent(props) {
  const style = useSpring({
    from: { opacity: 0, transform: 'translate3d(20px,0,0)' },
    to: { opacity: props.in ? 1 : 0, transform: `translate3d(${props.in ? 0 : 20}px,0,0)` },
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}



TransitionComponent.propTypes = {
  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,
};

const StyledTreeItem = withStyles(theme => ({
  iconContainer: {
    '& .close': {
      opacity: 0.3,
    },
  },
  group: {
    // marginLeft: 1,
    // paddingLeft: 12,
    borderLeft: `1px dashed ${fade(theme.palette.text.primary, 0.4)}`,
  },
}))(props => <TreeItem {...props} TransitionComponent={TransitionComponent} />);

const useStyles = makeStyles({
  root: {
    height: 400,
    flexGrow: 1,
    maxWidth: 'initial',
    textAlign: "left",
    width: "1400px"
  },
  table: {
    minWidth: 1100,
  },
  backcolor: {
    backgroundColor: green
  }
});

export default function CustomizTreeView() {
  const classes = useStyles();
  const [showTable, createTable] = useState();
  // console.log('data', data);
  const handleClick = (value) => {
    // console.log('val', value);
    if (value && Array.isArray(value.dataJson) && value.dataJson.length) {
      return createTable(
        <TableContainer component={Paper}>
          <Table className={classes.table} size="large" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell component="th" scope="row">LotNumber</TableCell>
                <TableCell align="left">ReleaseName</TableCell>
                <TableCell align="left">UsesUsedThisProc</TableCell>
                <TableCell align="left">UsesRemaining</TableCell>
                <TableCell align="left">SystemName</TableCell>
                <TableCell align="left">ProcStart</TableCell>
                <TableCell align="left">ProcDuration</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">TimeUsed</TableCell>
                <TableCell align="left">PartNumber</TableCell>
                <TableCell align="left">PartVersion</TableCell>
                <TableCell align="left">SerialNumber</TableCell>
                <TableCell align="left">MaxToolUses</TableCell>
                <TableCell align="left">TimeStamp</TableCell>
                <TableCell align="left">LaserID</TableCell>
                <TableCell align="left">FileName</TableCell>
                <TableCell align="left">uploadId</TableCell>
                <TableCell align="left">DataID</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {value.dataJson.map((row, i) => (
                <TableRow key={i}>
                  <TableCell component="th" scope="row">
                    {row.LotNumber}
                  </TableCell>
                  <TableCell align="left">{row.ReleaseName}</TableCell>
                  <TableCell align="left">{row.UsesUsedThisProc}</TableCell>
                  <TableCell align="left">{row.UsesRemaining}</TableCell>
                  <TableCell align="left">{row.SystemName}</TableCell>
                  <TableCell align="left">{row.ProcStart}</TableCell>
                  <TableCell align="left">{row.ProcDuration}</TableCell>
                  <TableCell align="left">{row.Name}</TableCell>
                  <TableCell align="left">{row.TimeUsed}</TableCell>
                  <TableCell align="left">{row.PartNumber}</TableCell>
                  <TableCell align="left">{row.PartVersion}</TableCell>
                  <TableCell align="left">{row.SerialNumber}</TableCell>
                  <TableCell align="left">{row.MaxToolUses}</TableCell>
                  <TableCell align="left">{row.TimeStamp}</TableCell>
                  <TableCell align="left">{row.LaserID}</TableCell>
                  <TableCell align="left">{row.FileName}</TableCell>
                  <TableCell align="left">{row.uploadId}</TableCell>
                  <TableCell align="left">{row.DataID}</TableCell>
                </TableRow>
              ))}
            </TableBody>

          </Table>
        </TableContainer>
      )
    } else {
      return createTable(<h3 style={{color:'red'}} >No Table Data Found For this record</h3>);
    }
  }

  return (
    <div>
      <TreeView
        className={classes.root}
        defaultExpanded={['1']}
        defaultCollapseIcon={<MinusSquare />}
        defaultExpandIcon={<PlusSquare />}
        defaultEndIcon={<CloseSquare />}
      >

        {data && data.length && data.map((item, key) => {
          return <StyledTreeItem nodeId={++nodeID} label={item.Title} key={key}>

            {item && item.ListSecNodes && item.ListSecNodes.length && item.ListSecNodes.map((value, index) => {
              return <StyledTreeItem onClick={() => { handleClick(value) }} nodeId={++nodeID} label={value.Title} key={index + key} style={{ backgroundColor: value.BackColor, color: value.ForeColor }} >

                {/* <TableContainer component={Paper}>
                  <Table className={classes.table} size="large" aria-label="a dense table">
                    <TableHead>
                      <TableRow>
                        <TableCell component="th" scope="row">LotNumber</TableCell>
                        <TableCell align="left">ReleaseName</TableCell>
                        <TableCell align="left">UsesUsedThisProc</TableCell>
                        <TableCell align="left">UsesRemaining</TableCell>
                        <TableCell align="left">SystemName</TableCell>
                        <TableCell align="left">ProcStart</TableCell>
                        <TableCell align="left">ProcDuration</TableCell>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">TimeUsed</TableCell>
                        <TableCell align="left">PartNumber</TableCell>
                        <TableCell align="left">PartVersion</TableCell>
                        <TableCell align="left">SerialNumber</TableCell>
                        <TableCell align="left">MaxToolUses</TableCell>
                        <TableCell align="left">TimeStamp</TableCell>
                        <TableCell align="left">LaserID</TableCell>
                        <TableCell align="left">FileName</TableCell>
                        <TableCell align="left">uploadId</TableCell>
                        <TableCell align="left">DataID</TableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {value && value.dataJson && value.dataJson.length && value.dataJson.map((row, i) => (
                        <TableRow key={row.name}>
                          <TableCell component="th" scope="row">
                            {row.LotNumber}
                          </TableCell>
                          <TableCell align="left">{row.ReleaseName}</TableCell>
                          <TableCell align="left">{row.UsesUsedThisProc}</TableCell>
                          <TableCell align="left">{row.UsesRemaining}</TableCell>
                          <TableCell align="left">{row.SystemName}</TableCell>
                          <TableCell align="left">{row.ProcStart}</TableCell>
                          <TableCell align="left">{row.ProcDuration}</TableCell>
                          <TableCell align="left">{row.Name}</TableCell>
                          <TableCell align="left">{row.TimeUsed}</TableCell>
                          <TableCell align="left">{row.PartNumber}</TableCell>
                          <TableCell align="left">{row.PartVersion}</TableCell>
                          <TableCell align="left">{row.SerialNumber}</TableCell>
                          <TableCell align="left">{row.MaxToolUses}</TableCell>
                          <TableCell align="left">{row.TimeStamp}</TableCell>
                          <TableCell align="left">{row.LaserID}</TableCell>
                          <TableCell align="left">{row.FileName}</TableCell>
                          <TableCell align="left">{row.uploadId}</TableCell>
                          <TableCell align="left">{row.DataID}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>

                  </Table>
                </TableContainer> */}
              </StyledTreeItem>


            })}
          </StyledTreeItem>
        })}

      </TreeView>
      {showTable}

    </div>);
}
