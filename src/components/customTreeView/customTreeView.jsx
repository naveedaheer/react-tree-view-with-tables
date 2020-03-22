import React, { useState, useEffect } from 'react';
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
const axios = require('axios');


let nodeID = 0;

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

export default function CustomizTreeView(props) {
  const classes = useStyles();
  const [showTable, createTable] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/healthdata.json')
      .then(res => {
        console.log("res", res)
        setData(res.data)
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  const handleClick = (id, node) => {
    console.log('id', id);
    let tableData;
    axios.get(`http://localhost:3000/${node}/id${id}.json`)
      .then(res => {
        return res.data
      }).then(data => {
        tableData = data;
        console.log("table Data", tableData)
        if (tableData) {
          return createTable(
            <TableContainer component={Paper}>
              <Table className={classes.table} size="large" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    {
                      Object.entries(tableData[0]).map(([key, value]) => {
                        return <TableCell component="th" scope="row">{key}</TableCell>
                      })
                    }
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableData.map((row, i) => (
                    <TableRow key={i}>
                      {
                        Object.keys(row).map(keyName => {
                          return <TableCell scope="row">{row[keyName]}</TableCell>
                        })
                      }
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )
        } else {
          return createTable(<h3 style={{ color: 'red' }} >No Table Data Found For this record</h3>);
        }
      })
      .catch(error => {
        console.log(error);
      })
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
        {data.map((item, i) => {
          return <StyledTreeItem nodeId={(++nodeID) + "a"} label={item.Title} key={i}>
            {item && item.ListSecNodes && item.ListSecNodes.length && item.ListSecNodes.map((value, j) => {
              return (<div style={{ display: 'flex' }} key={j + i}>
                <StyledTreeItem nodeId={(++nodeID) + "b"} label={value.Title} style={{ backgroundColor: value.BackColor, color: value.ForeColor }} >
                  {(value && Array.isArray(value.ListSubNodes)) ? value.ListSubNodes.map((nestedItem, k) => {
                      return (
                        <div style={{ display: 'flex' }} key={i + j + k}>
                          <StyledTreeItem nodeId={(++nodeID) + "c"} label={nestedItem.SubTitle} style={{ backgroundColor: value.BackColor, color: value.ForeColor }}>
                          </StyledTreeItem><button onClick={() => { handleClick(nestedItem.SubNodeID, 'ListSubNodes') }}>Show Details</button>
                        </div>
                      )
                    }) : null}
                </StyledTreeItem> {!(Array.isArray(value.ListSubNodes) && value.ListSubNodes.length) ? <button onClick={() => { handleClick(value.Id, 'ListSecNodes') }}>Show Details</button> : null}
              </div>)
            })}
          </StyledTreeItem>
        })}
      </TreeView>
      {showTable}

    </div>);
}
