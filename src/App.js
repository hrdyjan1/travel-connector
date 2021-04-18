import './App.css';
import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { Header } from './components/Header';
import { Section } from './components/mui/Section';
import { SectionAlternate } from './components/mui/SectionAlternate';
import { Hero } from './components/mui/Hero';
import { Search } from './components/Search';

const theme = createMuiTheme({
  palette: {
    cardShadow: 'rgba(23, 70, 161, .11)',
    alternate: {
      main: 'rgb(247, 249, 250)',
      dark: '#e8eaf6',
    },
    primary: {
      light: '#757ce8',
      main: '#800080',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  layout: {
    contentWidth: 1236,
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

const Footer = () => (
  <div
    style={{
      backgroundColor: 'purple',
      fontSize: '20px',
      color: 'white',
      borderTop: '1px solid #E7E7E7',
      textAlign: 'center',
      padding: '20px',
      left: '0',
      bottom: '0',
      height: '60px',
      width: '100%',
    }}
  >
      Footer
  </div>
);

const useStyles = makeStyles((theme) => ({
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Paper elevation={0} style={{ minHeight: 'calc(100vh - 60px)' }}>
          <Header />
          <SectionAlternate className={classes.pagePaddingTop}>
            <Hero />
          </SectionAlternate>
          <Section>
            <Search />
          </Section>
        </Paper>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
