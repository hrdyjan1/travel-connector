import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import firebase from 'firebase/app';
import { SectionHeader } from '../mui/SectionHeader';
import { listOfCountries, listOfTypes, listOfUniversities, listOfLevels } from '../../data/index';

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
    borderRadius: '4px',
    margin: '1em auto',
    fontSize: '15px',
    outline: '0',
    boxSizing: 'border-box',
    backgroundColor: '#e8eeef !important',
    color: '#8a97a0',
    borderWidth: '0px',
    boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.11)',
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
}));

function JoinUs() {
  const classes = useStyles();
  const [name, setName] = React.useState('');
  const [isOpen, setOpen] = React.useState(false);
  const [typeDetail, setTypeDetail] = React.useState('');
  const [type, setType] = React.useState(listOfTypes[0].value);
  const [level, setLevel] = React.useState(listOfLevels[0].value);
  const [country, setCountry] = React.useState(listOfCountries[0].value);
  const [university, setUniversity] = React.useState(listOfUniversities[0].value);

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  const handleChangeUniversity = (event) => {
    setUniversity(event.target.value);
  };

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeLevel = (event) => {
    setLevel(event.target.value);
  };

  const handleChangeTypeDetail = (event) => {
    setTypeDetail(event.target.value);
  };

  const open = () => setOpen(true);
  const close = () => setOpen(false);

  const handleSubmit = () => {
    close();
    firebase
      .firestore()
      .collection('students')
      .add({
        type,
        level,
        country,
        university,
        name,
        typeDetail,
        companyLogo:
          'https://media4.s-nbcnews.com/i/newscms/2021_09/3453866/210302-donald-trump-cpac-se-502p_4679926547fc16d42d26936ecda18a3d.jpg',
      });
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
            onChange={handleChangeName}
            variant='outlined'
            className={classes.area}
            id='id-name'
            label='Name'
            InputProps={{
              disableUnderline: true,
              classes: {
                focused: classes.focused,
                notchedOutline: classes.notchedOutline,
              },
            }}
          />

          <TextField
            fullWidth
            variant='outlined'
            className={classes.area}
            onChange={handleChangeTypeDetail}
            id='id-typeDetail'
            label='Detail of study'
            InputProps={{
              disableUnderline: true,
              classes: {
                focused: classes.focused,
                notchedOutline: classes.notchedOutline,
              },
            }}
          />

          <TextField
            select
            fullWidth
            value={level}
            variant='outlined'
            id='id-country'
            onChange={handleChangeLevel}
            className={classes.area}
            label='Select level'
            InputProps={{
              disableUnderline: true,
              classes: {
                notchedOutline: classes.notchedOutline,
              },
            }}
          >
            {listOfLevels.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

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
                notchedOutline: classes.notchedOutline,
              },
            }}
          >
            {listOfCountries.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            fullWidth
            value={type}
            variant='outlined'
            id='id-country'
            onChange={handleChangeType}
            className={classes.area}
            label='Select type'
            InputProps={{
              disableUnderline: true,
              classes: {
                notchedOutline: classes.notchedOutline,
              },
            }}
          >
            {listOfTypes.map((option) => (
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
                notchedOutline: classes.notchedOutline,
              },
            }}
          >
            {listOfUniversities.map((option) => (
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
