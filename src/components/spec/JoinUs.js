import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { SectionHeader } from '../mui/SectionHeader';

const useStyles = makeStyles((theme) => ({
  sectionHeader: {
    marginBottom: theme.spacing(1),
  },
  modal: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  form: {
    [theme.breakpoints.down('sm')]: {
      margin: '2px',
      width: 'unset',
    },
    fontfamily: 'Georgia',
    padding: '20px',
    width: '100%',
    maxWidth: '500px',
    background: '#f4f7f8',
    borderRadius: theme.shape.borderRadius,
  },
  area: {
    background: 'rgba(255,255,255,.1)',
    border: 'none',
    borderRadius: '4px',
    margin: '1em auto',
    fontSize: '15px',
    outline: '0',
    boxSizing: 'border-box',
    backgroundColor: '#e8eeef',
    color: '#8a97a0',
    borderWidth: '0px',
  },
  submit: {
    color: '#FFF',
    margin: '1em auto',
    fontSize: '18px',
    textAlign: 'center',
    fontStyle: 'normal',
    width: '100%',
    marginBottom: '10px',
    padding: '15px',
  },
  root: {
    '&:hover $notchedOutline': {
      borderColor: theme.palette.primary.main,
    },
  },
  focused: {},
}));

const countries = [
  {
    value: 'UND',
    label: '-',
  },
  {
    value: 'SWE',
    label: 'Sweden 🍕',
  },
  {
    value: 'ENG',
    label: 'England 🍟',
  },
  {
    value: 'GER',
    label: 'Germany 🌭',
  },
];

const universities = [
  {
    value: 'UND',
    label: '-',
  },
  {
    value: 'UME',
    label: 'Umea 🚗',
  },
  {
    value: 'STC',
    label: 'Stockholm UNI 🚓',
  },
  {
    value: 'PAR',
    label: 'Paris technical university 🚑',
  },
];

function JoinUs() {
  const classes = useStyles();
  const [isOpen, setOpen] = React.useState(false);
  const [country, setCountry] = React.useState(countries[0].value);
  const [university, setUniversity] = React.useState(universities[0].value);

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  const handleChangeUniversity = (event) => {
    setUniversity(event.target.value);
  };

  const open = () => setOpen(true);
  const close = () => setOpen(false);

  const handleSubmit = () => {
    close();
  };

  return (
    <div>
      <Button variant='contained' color='primary' size='large' onClick={open}>
        Join us
      </Button>
      <Modal open={isOpen} onClose={close} className={classes.modal}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <SectionHeader
            title='Join us'
            subtitle='Add me to the list of students'
            className={classes.sectionHeader}
          />
          <TextField
            fullWidth
            variant='outlined'
            className={classes.area}
            id='id-name'
            label='Name'
            InputProps={{
              disableUnderline: true,
              classes: {
                root: classes.root,
                notchedOutline: classes.notchedOutline,
              },
            }}
          />

          <TextField
            select
            fullWidth
            value={country}
            variant='outlined'
            id='id-country'
            onChange={handleChangeCountry}
            className={classes.area}
            label='Select country'
            InputProps={{
              disableUnderline: true,
              classes: {
                root: classes.root,
                notchedOutline: classes.notchedOutline,
              },
            }}
          >
            {countries.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            fullWidth
            value={university}
            variant='outlined'
            id='id-university'
            onChange={handleChangeUniversity}
            className={classes.area}
            label='Select university'
            InputProps={{
              disableUnderline: true,
              classes: {
                root: classes.root,
                notchedOutline: classes.notchedOutline,
              },
            }}
          >
            {universities.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <Button
            variant='contained'
            color='primary'
            size='large'
            type='submit'
            className={classes.submit}
          >
            Add me
          </Button>
        </form>
      </Modal>
    </div>
  );
}

export { JoinUs };
