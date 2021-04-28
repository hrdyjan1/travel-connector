import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { SectionHeader } from './mui/SectionHeader';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import { Grid, colors, useMediaQuery, InputAdornment, Button, Chip } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDown from '@material-ui/icons/ArrowDropDown';
import { Student } from './Student';
import {
  listOfCountries,
  listOfUniversities,
  listOfLevels,
  listOfTypes,
  students,
  TYPE,
  choices,
} from '../data/index';

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
    color: 'white',
    margin: theme.spacing(0, 1, 1, 0),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(0, 2, 2, 0),
    },
  },
}));

function handleList(choice) {
  switch (choice.value) {
    case 'COU':
      return listOfCountries;
    case 'UNI':
      return listOfUniversities;
    case 'LEV':
      return listOfLevels;
    case 'TYP':
      return listOfTypes;
    default:
      return [];
  }
}

function hasString(value, search) {
  const handleCase = (t) => t.toLocaleLowerCase();
  return handleCase(value).includes(handleCase(search));
}

function handleBadgeColorViaType(type) {
  switch (type) {
    case TYPE.ECONOMY:
      return colors.blue[500];
    case TYPE.BUSINESS:
      return colors.red[500];
    case TYPE.GREENPEACE:
      return colors.green[500];
    case TYPE.IT:
      return colors.orange[500];
    default:
      return colors.grey[500];
  }
}

function getFilteredStudents(students, filters) {
  if (filters?.length === 0) {
    return students;
  }

  return students.filter((s) =>
    filters.every(
      (f) =>
        f.value === s.uni ||
        f.value === s.type ||
        f.value === s.level ||
        f.value === s.country ||
        hasString(s.name, f.value)
    )
  );
}

const Search = (props) => {
  const { data, className, ...rest } = props;

  const theme = useTheme();
  const [value, setValue] = React.useState(null);
  const [filters, setFilters] = React.useState([]);
  const [choice, setChoice] = React.useState(choices[0]);
  const isSearching = choices[0].value === choice.value;

  const filteredStudents = getFilteredStudents(students, filters);

  const handleChangeChoice = (event) => {
    setValue(null);
    setChoice(event.target.value);
  };

  const tryToAddFilter = () => {
    if (value && value.label.length > 0) {
      setFilters((fs) => [...fs, { ...value, label: `${choice.label} - ${value.label}` }]);
      setValue(null);
      setChoice(choices[0]);
    }
  };

  const deleteFilter = (value) => {
    setFilters((fs) => fs.filter((f) => f.value !== value));
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
              onInputChange={(e, v) => {
                setValue({ value: v, label: v });
              }}
              value={value}
              id='id-search-input'
              className={classes.input}
              options={autocompleteList}
              onChange={(e, v) => setValue(v)}
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
                        {isSearching ? (
                          <SearchIcon fontIconColor={colors.blueGrey[900]} />
                        ) : (
                          <ArrowDown fontIconColor={colors.blueGrey[900]} />
                        )}
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
              {isSearching ? 'Search' : 'Add filter'}
            </Button>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.tags}>
            {filters.map((item, index) => (
              <div className={classes.tag}>
                <Chip
                  key={index}
                  color='primary'
                  size='small'
                  label={item.label}
                  onDelete={() => deleteFilter(item.value)}
                />
              </div>
            ))}
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={isMd ? 4 : 2}>
        {filteredStudents.map((item, index) => (
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
              type={item.type}
              typeDetail={item.typeDetail}
              badgeColor={handleBadgeColorViaType(item.type)}
              title={item.title}
              country={item.country}
              level={item.level}
              uni={item.uni}
              name={item.name}
              companyLogo={item.companyLogo}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export { Search };
