import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import green from "@material-ui/core/colors/green";
import grey from "@material-ui/core/colors/grey";

const styles = theme => ({
  "@global": {
    body: {
      backgroundImage:
        "url(https://longreadsblog.files.wordpress.com/2018/06/money-to-homeless1.jpg?w=1680)",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      height: "80%"
    },
    html: {
      height: "100%"
    }
  },
  root: {
    color: green[600],
    "&$checked": {
      color: green[500]
    }
  },
  checked: {},
  title: {
    fontSize: "80px",
    marginTop: theme.spacing.unit * 15,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    textAlign: "center",
    color: green[600],
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 350,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`,
    borderRadius: "20px"
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: "#212121",
    width: 60,
    height: 60
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
    color: "black"
  },
  formControl: {
    "&:focus": {
      fontWeight: "bold",
      backgroundColor: green[500]
    }
  },
  submit: {
    marginTop: theme.spacing.unit * 2.5,
    color: theme.palette.getContrastText(green[300]),
    backgroundColor: green[300],
    "&:hover": {
      fontWeight: "bold",
      fontSize: "15px",
      backgroundColor: green[500]
    },
    "&:focus": {
      outline: "none"
    }
  },
  signupmessage: {
    marginTop: theme.spacing.unit * 3
  },
  signuplink: {
    color: grey[900],
    "&:hover": {
      fontWeight: "bold",
      fontSize: "16px",
      color: green[500]
    }
  },
  cssLabel: {
    "&$cssFocused": {
      fontWeight: "bold",
      color: green[500]
    }
  },
  cssFocused: {},
  cssUnderline: {
    "&:after": {
      fontWeight: "bold",
      borderBottomColor: green[500]
    }
  }
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange() {
    this.props.onSubmit(this.state.email, this.state.password);
  }

  handleClick(event) {
    event.preventDefault();
    console.log(this.state)
    fetch('http://localhost:5000/signin', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Typography className={classes.title}>Drop</Typography>
        <main className={classes.main}>
          <CssBaseline />
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <AccountCircle style={{ fontSize: 50 }} />
            </Avatar>
            <form className={classes.form}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel
                  htmlFor="email"
                  classes={{
                    root: classes.cssLabel,
                    focused: classes.cssFocused
                  }}
                >
                  Email Address
                </InputLabel>
                <Input
                  id="email"
                  type="text"
                  name="email"
                  classes={{
                    underline: classes.cssUnderline
                  }}
                  onChange={event =>
                    this.setState({ email: event.target.value })
                  }
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel
                  htmlFor="password"
                  classes={{
                    root: classes.cssLabel,
                    focused: classes.cssFocused
                  }}
                >
                  Password
                </InputLabel>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  classes={{
                    underline: classes.cssUnderline
                  }}
                  onChange={event =>
                    this.setState({ password: event.target.value })
                  }
                />
              </FormControl>
              <FormControlLabel
                control={
                  <Checkbox
                    value="remember"
                    classes={{
                      root: classes.root,
                      checked: classes.checked
                    }}
                  />
                }
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
                onClick={this.handleClick}
              >
                Sign in
              </Button>
              <Typography className={classes.signupmessage} align="center">
                Don't have an account?&nbsp;
                <NavLink exact to="/SignUp" className={classes.signuplink}>
                  Sign Up
                </NavLink>
              </Typography>
            </form>
          </Paper>
        </main>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
