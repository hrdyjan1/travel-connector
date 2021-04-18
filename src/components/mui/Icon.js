import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import NoSsr from '@material-ui/core/NoSsr';
import { Icon as MuiIcon } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  extraSmall: {
    fontSize: 10,
  },
  small: {
    fontSize: 20,
  },
  medium: {
    fontSize: 30,
  },
  large: {
    fontSize: 40,
  },
}));

/**
 * Component to display the icon
 *
 * @param {Object} props
 */
const Icon = props => {
  const { fontIconClass, size, fontIconColor, className, ...rest } = props;

  const classes = useStyles();

  return (
    <NoSsr>
      <MuiIcon
        className={clsx(
          'icon',
          fontIconClass,
          classes[size],
          className,
        )}
        style={{ color: fontIconColor }}
        {...rest}
      />
    </NoSsr>
  );
};


export {Icon};
