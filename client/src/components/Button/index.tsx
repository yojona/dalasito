import React, { FC } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(() => ({
  container: {
    display: 'flex',
    height: 24,
    padding: 8,
    background: '#F50961',
    borderRadius: 3,
    color: 'white',
    cursor: 'pointer',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 1.5,
    '&:hover': {
      background: '#ef5e94',

    }
  }
}))

const Button: FC<{ onClick?: Function }> = ({ children, onClick }) => {
  const classes = useStyles();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    onClick && onClick();
  }

  return (
    <div
      className={classes.container}
      onClick={handleClick}
    >
      { children }
    </div>
  );
};

export default Button;
