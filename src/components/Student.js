import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@material-ui/core';
import { CardBase } from './mui/CardBase';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
  },
  dot: {
    display: 'inline-block',
    width: theme.spacing(1),
    height: theme.spacing(1),
    background: theme.palette.text.primary,
    borderRadius: '100%',
    marginRight: theme.spacing(1),
  },
  dotBig: {
    width: theme.spacing(2),
    height: theme.spacing(2),
  },
  dotSmall: {
    width: theme.spacing(1 / 2),
    height: theme.spacing(1 / 2),
  },
  jobTitle: {
    fontWeight: 700,
  },
  dotMargin: {
    margin: theme.spacing(0, 1),
  },
}));

const Student = (props) => {
  const {
    badgeColor,
    title,
    level,
    country,
    type,
    typeDetail,
    uni,
    companyLogo,
    name,
    className,
    ...rest
  } = props;

  const classes = useStyles();

  return (
    <CardBase className={clsx('card-job', classes.root, className)} align='left' {...rest}>
      <Grid container spacing={2}>
        <Grid item container alignItems='center' xs={12}>
          <span className={clsx(classes.dot, classes.dotBig)} style={{ background: badgeColor }} />
          <Typography component='span' variant='body2' color='textPrimary'>
            {type}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h6' className={classes.jobTitle}>
            {typeDetail}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item container alignItems='center' xs={12}>
          <Typography component='span' variant='subtitle1' color='textSecondary'>
            {country}
          </Typography>
          <span className={clsx(classes.dot, classes.dotSmall, classes.dotMargin)} />
          <Typography component='span' variant='subtitle1' color='textSecondary'>
            {level}
          </Typography>
        </Grid>
      </Grid>
      <ListItem disableGutters>
        <ListItemAvatar>
          <Avatar src={companyLogo} alt={name} />
        </ListItemAvatar>
        <ListItemText primary={name} secondary={uni} />
      </ListItem>
    </CardBase>
  );
};

export { Student };
