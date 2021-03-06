import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

// import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  filterBox: {
    width: '400px',
    backgroundColor: '#fff',
    margin: '20px',
    padding: '10px'
  }
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [title, setTitle] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [selecteStartDate, setStartDate] = React.useState(new Date('2017-11-15T21:11:54'));
  const [selecteEndDate, setEndDate] = React.useState(new Date('2017-12-04T21:11:54'));


  const handleStartDateChange = date => {
    setStartDate(date);
  };

  const handleEndDateChange = date => {
    setEndDate(date);
  };

  const handleChange = event => {
    setTitle(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div class={classes.root}>
      <div class={classes.filterBox}>
        <Button className={classes.button} onClick={handleOpen}>
          Select System
      </Button>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">System Title</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={title}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'SH1332 11/15/2017 - 12/04/2017'}>SH1332</MenuItem>
            <MenuItem value={20}>Test Value 1</MenuItem>
            <MenuItem value={30}>Test Value 2</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div class={classes.filterBox}>
        <Button className={classes.button}>
          Select Date
      </Button>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Start Date"
              value={selecteStartDate}
              onChange={handleStartDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </div>

      <div class={classes.filterBox}>
        <Button className={classes.button}>
          Select Date
      </Button>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="End Date"
              value={selecteEndDate}
              onChange={handleEndDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </div>

    </div>
  );
}
