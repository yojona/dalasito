import React, { FC } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(() => ({
  container: {
    outline: 'none',
    border: '1px solid #d5d7e0',
    borderRadius: 3,
    height: 24,
    padding: 8,
    width: 300
  }
}))

const Input: FC<{ value: string }> = ({ value }) => {
  const classes = useStyles();

  return (
    <input type="text" className={classes.container} value={value} disabled />
  );
};

export default Input;
