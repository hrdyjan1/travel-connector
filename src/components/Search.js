import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { SectionHeader } from './mui/SectionHeader';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import { Grid, colors, useMediaQuery, InputAdornment, Button, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { Student } from './Student';

const useStyles = makeStyles((theme) => ({
  searchInputContainer: {
    background: theme.palette.alternate.main,
    padding: theme.spacing(2),
    boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.11)',
    borderRadius: theme.spacing(1),
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    '& .MuiOutlinedInput-notchedOutline': {
      //   border: '1 !important',
    },
    '& .MuiInputAdornment-positionStart': {
      marginRight: theme.spacing(2),
    },
    '& .MuiOutlinedInput-adornedStart': {
      //   paddingLeft: 0,
    },
    // '& .MuiOutlinedInput-input': {
    //   padding: 0,
    // },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
      flexDirection: 'column',
    },
  },
  icon: {
    marginInline: theme.spacing(2),
  },
  area: {
    width: 'auto',
    flex: 1,
    borderWidth: '1px',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      marginBottom: theme.spacing(2),
    },
  },
  input: {
    marginInline: theme.spacing(1),
    flex: 3,
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      marginBottom: theme.spacing(2),
    },
  },
  searchButton: {
    height: '90%',
    minWidth: 135,
    [theme.breakpoints.down('sm')]: {
      minWidth: 'auto',
    },
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  tag: {
    padding: theme.spacing(1 / 2, 1),
    borderRadius: theme.spacing(1 / 2),
    background: theme.palette.secondary.light,
    color: 'white',
    margin: theme.spacing(0, 1, 1, 0),
    cursor: 'pointer',
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(0, 2, 2, 0),
    },
  },
}));

const tags = [
  'Germany',
  'Female',
  'Economy',
  'Hair to the ground',
  'Not fat',
  'Not fat, seriously!',
];
export const students = [
  {
    color: colors.blue[500],
    title: 'Economy',
    jobTitle: 'Brain design',
    type: 'Master',
    location: 'Milan, Italy',
    date: 'UMEA',
    companyLogo:
      'https://media4.s-nbcnews.com/i/newscms/2021_09/3453866/210302-donald-trump-cpac-se-502p_4679926547fc16d42d26936ecda18a3d.jpg',
    companyName: 'Mc Donald Trump',
  },
  {
    color: colors.purple[500],
    title: 'Business',
    jobTitle: 'Brain design for dummies',
    type: 'Master',
    location: 'Paris, France',
    date: 'UMEA',
    companyLogo:
      'https://media4.s-nbcnews.com/i/newscms/2021_09/3453866/210302-donald-trump-cpac-se-502p_4679926547fc16d42d26936ecda18a3d.jpg',
    companyName: 'Mc Donald Trump',
  },
  {
    color: colors.purple[500],
    title: 'Business',
    jobTitle: 'Business predictions',
    type: 'Bachelor',
    location: 'Stockholm, Sweden',
    date: 'Stockholm University',
    companyLogo:
      'https://media4.s-nbcnews.com/i/newscms/2021_09/3453866/210302-donald-trump-cpac-se-502p_4679926547fc16d42d26936ecda18a3d.jpg',
    companyName: 'Mc Donald Trump',
  },
  {
    color: colors.purple[500],
    title: 'Business',
    jobTitle: 'How to count to 10',
    type: 'Bachelor',
    location: 'Paris, France',
    date: 'Stockholm University',
    companyLogo:
      'https://media4.s-nbcnews.com/i/newscms/2021_09/3453866/210302-donald-trump-cpac-se-502p_4679926547fc16d42d26936ecda18a3d.jpg',
    companyName: 'Mc Donald Trump',
  },
  {
    color: colors.blue[500],
    title: 'Economy',
    jobTitle: 'Corruption in politics',
    type: 'Bachelor',
    location: 'Berlin, Germany',
    date: 'Paris university',
    companyLogo:
      'https://media4.s-nbcnews.com/i/newscms/2021_09/3453866/210302-donald-trump-cpac-se-502p_4679926547fc16d42d26936ecda18a3d.jpg',
    companyName: 'Mc Donald Trump',
  },
  {
    color: colors.green[500],
    title: 'Greenpeace',
    jobTitle: 'Drugs',
    type: 'Bachelor',
    location: 'Paris, France',
    date: 'UMEA university',
    companyLogo:
      'https://media4.s-nbcnews.com/i/newscms/2021_09/3453866/210302-donald-trump-cpac-se-502p_4679926547fc16d42d26936ecda18a3d.jpg',
    companyName: 'Mc Donald Trump',
  },
  {
    color: colors.pink[500],
    title: 'IT',
    jobTitle: 'Mobile development',
    type: 'Bachelor',
    location: 'Paris, France',
    date: 'UMEA university',
    companyLogo:
      'https://media4.s-nbcnews.com/i/newscms/2021_09/3453866/210302-donald-trump-cpac-se-502p_4679926547fc16d42d26936ecda18a3d.jpg',
    companyName: 'Mc Donald Trump',
  },
  {
    color: colors.pink[500],
    title: 'IT',
    jobTitle: 'Machine learning',
    type: 'Bachelor',
    location: 'Prague, THE BEST COUNTRY IN THE WORLD',
    date: 'UMEA university',
    companyLogo:
      'https://media4.s-nbcnews.com/i/newscms/2021_09/3453866/210302-donald-trump-cpac-se-502p_4679926547fc16d42d26936ecda18a3d.jpg',
    companyName: 'Mc Donald Trump',
  },
  {
    color: colors.purple[500],
    title: 'Business',
    jobTitle: 'Technical business tools',
    type: 'Master',
    location: 'Los Angeles, Cali',
    date: 'Stockholm University',
    companyLogo:
      'https://media4.s-nbcnews.com/i/newscms/2021_09/3453866/210302-donald-trump-cpac-se-502p_4679926547fc16d42d26936ecda18a3d.jpg',
    companyName: 'Mc Donald Trump',
  },
];

const choices = [
  {
    value: 'ALL',
    label: 'All',
  },
  {
    value: 'COU',
    label: 'Countries 🏆',
  },
  {
    value: 'UNI',
    label: 'Universities 🎮',
  },
];

const listOfCountries = [
  { label: 'Sweden', value: 'SWE' },
  { label: 'Brazil', value: 'BRA' },
  { label: 'China', value: 'CHI' },
  { label: 'Austria', value: 'AUS' },
  { label: 'Russia', value: 'RUS' },
  { label: 'Ireland', value: 'IRE' },
];

const listOfUniversities = [
  { label: 'Umea', value: 'UME' },
  { label: 'CTU', value: 'CTU' },
  { label: 'Harvard', value: 'HAR' },
];

function handleList(choice) {
  switch (choice.value) {
    case 'COU':
      return listOfCountries;
    case 'UNI':
      return listOfUniversities;
    default:
      return [];
  }
}

const Search = (props) => {
  const { data, className, ...rest } = props;

  const theme = useTheme();
  const [value, setValue] = React.useState(null);
  const [filters, setFilters] = React.useState([]);
  const [choice, setChoice] = React.useState(choices[0]);

  const handleChangeChoice = (event) => {
    setValue(null);
    setChoice(event.target.value);
  };

  const tryToAddFilter = () => {
    if (value) {
      setFilters((fs) => [...fs, { ...value, label: `${choice.label} - ${value.label}` }]);
      setValue(null);
      setChoice(choices[0]);
    }
  };

  const autocompleteList = handleList(choice);

  const classes = useStyles();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title='Meet our travelers'
        subtitle='We never really grow up, we only learn how to act in public.'
      />
      <Grid container justify='space-between' spacing={isMd ? 4 : 2}>
        <Grid item xs={12}>
          <div className={classes.searchInputContainer} data-aos='fade-up'>
            <TextField
              select
              fullWidth
              value={choice}
              id='id-country'
              variant='outlined'
              onChange={handleChangeChoice}
              className={classes.area}
              label='Select filter'
            >
              {choices.map((option) => (
                <MenuItem key={option.value} value={option}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <Autocomplete
              freeSolo
              value={value}
              id='id-search-input'
              className={classes.input}
              options={autocompleteList}
              onChange={(_, v) => setValue(v)}
              getOptionLabel={(option) => option.label}
              renderOption={(option, { inputValue }) => {
                const matches = match(option.label, inputValue);
                const parts = parse(option.label, matches);

                return (
                  <div>
                    {parts.map((part, index) => (
                      <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                        {part.text}
                      </span>
                    ))}
                  </div>
                );
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position='start' className={classes.icon}>
                        <SearchIcon fontIconColor={colors.blueGrey[900]} />
                      </InputAdornment>
                    ),
                  }}
                  label='Fill search field'
                  variant='outlined'
                />
              )}
            />
            <Button
              size='large'
              color='primary'
              variant='contained'
              onClick={tryToAddFilter}
              className={classes.searchButton}
            >
              Search
            </Button>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.tags}>
            {filters.map((item, index) => (
              <Typography variant='caption' color='primary' className={classes.tag} key={index}>
                {item.label}
              </Typography>
            ))}
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={isMd ? 4 : 2}>
        {students.map((item, index) => (
          <Grid
            key={index}
            item
            container
            alignItems='center'
            direction='column'
            xs={12}
            sm={6}
            md={4}
            data-aos='fade-up'
          >
            <Student
              variant='outlined'
              liftUp
              jobTitle={item.jobTitle}
              badgeColor={item.color}
              badgeTitle={item.title}
              jobLocation={item.location}
              jobType={item.type}
              jobDate={item.date}
              companyName={item.companyName}
              companyLogo={item.companyLogo}
            />
          </Grid>
        ))}
        <Grid item container justify='center' xs={12} data-aos='fade-up'>
          <Button variant='contained' color='primary' size='large'>
            See all jobs
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export { Search };
