import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Home from "@material-ui/icons/Home";
import ExitToApp from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex",
    position: "relative",
    zIndex: "2;"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9 + 1
    }
  },
  spacebox: {
    ...theme.mixins.toolbar
  }
});

class MiniDrawer extends React.Component {
  render() {
    const { classes } = this.props;

    const list = [
      {
        label: "Home",
        icon: <Home className={classes.Home} />,
        link: "/Home"
      },
      {
        label: "Logout",
        icon: <ExitToApp className={classes.ExitToApp} />,
        link: "/Logout"
      }
    ];

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.props.active,
            [classes.drawerClose]: !this.props.active
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.props.active,
              [classes.drawerClose]: !this.props.active
            })
          }}
        >
          <div className={classes.spacebox} />
          <Divider />
          <List>
            {list.map((item, index) => (
              <ListItem
                button
                style={{
                  paddingLeft: "25px"
                }}
                key={index}
                component={Link}
                to={item.link}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);
