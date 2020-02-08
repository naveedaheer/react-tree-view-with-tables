import React from 'react';
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
import data from '../../data/data.json';


function createData(LotNumber,ReleaseName,
  UsesUsedThisProc,
  UsesRemaining,
  SystemName,
  ProcStart,
  ProcDuration,
  Name,
  TimeUsed,
  PartNumber,
  PartVersion,SerialNumber,MaxToolUses,TimeStamp,LaserID,FileName,uploadId,DataID) {
  return {LotNumber, ReleaseName,
    UsesUsedThisProc,
    UsesRemaining,
    SystemName,
    ProcStart,
    ProcDuration,
    Name,
    TimeUsed,
    PartNumber,
    PartVersion,SerialNumber,MaxToolUses,TimeStamp,LaserID,FileName,uploadId,DataID};
}

const rows = [
  
  createData('N10190206-554','Production','1','4','SH1332','12/11/19 14:46:01',86.750000,'MONOPOLAR CURVED SCISSORS',	'0:42:30','420179','22','190206554','10','12/11/19 16:12:43',	'61044794','SH1332\\LogFiles\\2019\\Dec\\11\\ToolTbl.000',	'49253959',	'37812971'),
  createData('N10190207-413','Production','1','3','SH1332','12/11/19 14:46:01',86.750000,'FENESTRATED BIPOLAR FORCEPS',	'0:42:30','420179','22','190206554','10','12/11/19 16:12:43',	'61044794','SH1332\\LogFiles\\2019\\Dec\\11\\ToolTbl.000',	'49253959',	'37812971'),
  createData('N10190522-683','Production','1','7','SH1332','12/11/19 14:46:01',86.750000,'MEGA NEEDLE DRIVER',	'0:42:30','420179','22','190206554','10','12/11/19 16:12:43',	'61044794','SH1332\\LogFiles\\2019\\Dec\\11\\ToolTbl.000',	'49253959',	'37812971'),
  createData('N10190408-810','Production','1','2','SH1332','12/11/19 14:46:01',86.750000,'MONOPOLAR CURVED SCISSORS',	'0:42:30','420179','22','190206554','10','12/11/19 16:12:43',	'61044794','SH1332\\LogFiles\\2019\\Dec\\11\\ToolTbl.000',	'49253959',	'37812971'),
  createData('N10190509-954','Production','1','9','SH1332','12/11/19 14:46:01',86.750000,'MEGA SUTURECUT NEEDLE DRIVE',	'0:42:30','420179','22','190206554','10','12/11/19 16:12:43',	'61044794','SH1332\\LogFiles\\2019\\Dec\\11\\ToolTbl.000',	'49253959',	'37812971')
];

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
    textAlign:"left",
    width:"1400px"
  },
  table: {
    minWidth: 1100,
  },
  backcolor:{
    backgroundColor:green
  }
});
export default function CustomizTreeView() {
  const classes = useStyles();
  const style = {
    backgroundColor: 'green',
  
  };
  const style1 = {
    backgroundColor: 'red',
  
  };

  return (
    <div>
      {/* {
        data && data.length && data.map((item, key)=>{
        return (
            <div>
            <h3 key={item.id} >
              {item.title}
            </h3>
            <br />
            </div>
        )
        })
      } */}
    <TreeView
      className={classes.root}
      defaultExpanded={['1']}
      defaultCollapseIcon={<MinusSquare />}
      defaultExpandIcon={<PlusSquare />}
      defaultEndIcon={<CloseSquare />}
    >

      <StyledTreeItem nodeId="1" label="SH1332:  12/9/2019 - 2/8/2020">
        <StyledTreeItem nodeId="011" label="Surgery: 12/11/2019 2:46:01 PM - Duration: 1 hr">
        
        <TableContainer component={Paper}>
      <Table className={classes.table} size="large" aria-label="a dense table">
        <TableHead>
          <TableRow>
          <TableCell component="th" scope="row">
                LotNumber
              </TableCell>
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
          {rows.map(row => (
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
    </TableContainer>
        </StyledTreeItem>

        <StyledTreeItem nodeId="012" label="12/11/2019 6:30:47 PM - 22008-- INF: Inserted tool was not accepted - Reason: NO_CANNULA">


        <TableContainer component={Paper}>
      <Table className={classes.table} size="large" aria-label="a dense table">
        <TableHead>
          <TableRow>
          <TableCell component="th" scope="row">
                LotNumber
              </TableCell>
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
          {rows.map(row => (
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
    </TableContainer>
        </StyledTreeItem>
      
      
        <StyledTreeItem nodeId="013" label="Surgery: 12/18/2019 2:49:15 PM - Duration: 1 hr">


        <TableContainer component={Paper}>
      <Table className={classes.table} size="large" aria-label="a dense table">
        <TableHead>
          <TableRow>
          <TableCell component="th" scope="row">
                LotNumber
              </TableCell>
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
          {rows.map(row => (
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
    </TableContainer>
        </StyledTreeItem>
      
       
      
        <StyledTreeItem nodeId="014" label="Surgery: 12/18/2019 6:06:15 PM - Duration: 57 min">


        <TableContainer component={Paper}>
      <Table className={classes.table} size="large" aria-label="a dense table">
        <TableHead>
          <TableRow>
          <TableCell component="th" scope="row">
                LotNumber
              </TableCell>
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
          {rows.map(row => (
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
    </TableContainer>
        </StyledTreeItem>
      
        <StyledTreeItem nodeId="015" label  ="CRM Case(SR: 0700521623/ FSO:0) - 12/30/2019 04:52:11 - Onsite not connecting "  style={style}  >
                      <TableContainer component={Paper}>
<Table className={classes.table} size="large" aria-label="a dense table">
<TableHead>
  <TableRow>
  <TableCell component="th" scope="row">
        LotNumber
      </TableCell>
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
  {rows.map(row => (
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
</TableContainer>
        </StyledTreeItem>


      </StyledTreeItem>
      <StyledTreeItem nodeId="2" label="Surgery: 1/7/2020 7:27:34 PM - Duration: 34 mins">
        <StyledTreeItem nodeId="021" label="Subtree with children">
        <TableContainer component={Paper}>
      <Table className={classes.table} size="large" aria-label="a dense table">
        <TableHead>
          <TableRow>
          <TableCell component="th" scope="row">
                LotNumber
              </TableCell>
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
          {rows.map(row => (
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
    </TableContainer>
        </StyledTreeItem>
      </StyledTreeItem>
      <StyledTreeItem nodeId="3" label="Fe-Visit">
        <StyledTreeItem nodeId="031" label="1/31/2020 8:55:17 PM -- 48240 -- INF: Illuminator Comm Error" style={style1}>
        <TableContainer component={Paper}>
      <Table className={classes.table} size="large" aria-label="a dense table">
        <TableHead>
          <TableRow>
          <TableCell component="th" scope="row">
                LotNumber
              </TableCell>
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
          {rows.map(row => (
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
    </TableContainer>
        </StyledTreeItem>
      </StyledTreeItem>
    </TreeView>
    </div>);
}
