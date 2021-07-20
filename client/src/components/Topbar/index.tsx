import { FC } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(() => ({
  container: {
    display: 'flex',
    background: '#F50961',
    width: '100%',
    height: 48,
    paddingLeft: 32,
    alignItems: 'center',
    fontFamily: 'sans-serif',
    color: 'white',
    fontSize: 16
  }
}))

const Toolbar: FC = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      ▶ Stardeos
    </div>
  );
};

export default Toolbar;
