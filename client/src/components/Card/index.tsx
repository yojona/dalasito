import { FC } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(() => ({
  container: {
    display: 'flex',
    background: 'white',
    padding: 16,
    paddingTop: 24,
    height: 400,
    width: 600,
    boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.3)',
    borderRadius: 3,
    flexDirection: 'column'
  }
}))

const Card: FC = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>{children}</div>
  );
};

export default Card;
