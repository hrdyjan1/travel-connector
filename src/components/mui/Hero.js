import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button, Typography } from '@material-ui/core';
import { Image } from './Image';
import { SectionHeader } from './SectionHeader';
import { JoinUs } from '../spec/JoinUs';

const useStyles = makeStyles((theme) => ({
  image: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
    },
  },
}));

const Hero = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container justify='space-between' spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={6} data-aos={'fade-up'}>
          <SectionHeader
            title={
              <span>
                This is{' '}
                <Typography component='span' variant='inherit' color='primary'>
                  TravelConnector
                </Typography>
                <br />
                <span>where people say nothing is impossible, but I do nothing every day.</span>
              </span>
            }
            subtitle='At every party there are two kinds of people – those who want to go home and those who don’t. The trouble is, they are usually married to each other.'
            ctaGroup={[<JoinUs />]}
            align={isMd ? 'left' : 'center'}
            disableGutter
            titleVariant='h3'
          />
        </Grid>
        <Grid
          item
          container
          justify='center'
          alignItems='center'
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <Image
            src='https://assets.maccarianagency.com/the-front/illustrations/mind-map.svg'
            alt='TheFront Company'
            className={classes.image}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export { Hero };
