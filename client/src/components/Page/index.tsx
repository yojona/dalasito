import React, { FC } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(() => ({
  container: {
    display: 'flex',
    width: 'inherit',
    height: 'inherit',
    background: '#F9FAFE',
    justifyContent: 'center',
    paddingTop: 40
  }
}))

const Page: FC = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      { children }
    </div>
  );
};

export default Page;
