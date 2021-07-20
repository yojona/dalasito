import { FC } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(() => ({
  '@global': {
    html: {
      margin: 0,
      width: '100%',
      height: '100%',
    },
    body: {
      margin: 0,
      width: 'inherit',
      height: 'inherit'
    },
    '#root': {
      width: 'inherit',
      height: 'inherit'
    }
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: 'inherit',
    height: 'inherit'
  }
}))

const Layout: FC = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>{children}</div>
  );
};

export default Layout;
