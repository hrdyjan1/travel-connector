import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Section } from './mui/Section';
import { JoinUs } from './spec/JoinUs';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  horizontalPaddingZero: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  paddingTopBottomSmall: {
    paddingTop: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(2),
    },
    paddingBottom: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      paddingBottom: theme.spacing(2),
    },
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position='static'>
      <Container>
        <Section className={classes.paddingTopBottomSmall}>
          <Toolbar className={classes.horizontalPaddingZero}>
            <Typography variant='h6' className={classes.title}>
              Travel Connector
            </Typography>
            <IconButton edge='start' color='inherit' aria-label='menu'>
              <JoinUs />
            </IconButton>
          </Toolbar>
        </Section>
      </Container>
    </AppBar>
  );
}

export { Header };
