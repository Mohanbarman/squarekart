import React, { FC } from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SendIcon from "@material-ui/icons/Send";
import MenuIcon from "@material-ui/icons/Menu";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import { Logo } from "../Logo";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import { Tooltip } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      position: "relative",
      minHeight: "calc(100vh - 60px)",
    },
  })
);

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export const Navbar: FC<Props> = (props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { authStatus, user, logout } = useContext(AuthContext);
  const history = useHistory();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isAuthenticated = () => {
    if (authStatus === "unauthenticated") {
      history.push("/signIn");
      return false;
    }
    return true;
  };

  const handleAuthRoutes = (name: string) => () => {
    if (isAuthenticated()) {
      history.push(name);
    }
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button onClick={handleAuthRoutes("/orders")}>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
          <ListItemText primary="Wishlist" />
        </ListItem>
        {user && (
          <ListItem button onClick={logout}>
            <ListItemIcon>
              <PowerSettingsNewIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        )}
      </List>
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" elevation={0} className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Logo />
          <IconButton
            onClick={handleAuthRoutes("/cart")}
            style={{ marginLeft: "auto", color: "white" }}
          >
            <ShoppingCartIcon />
          </IconButton>
          {user?.email && (
            <Tooltip title={`Logged in as ${user.email}`}>
              <IconButton style={{ color: "white" }}>
                <AccountCircleIcon />
              </IconButton>
            </Tooltip>
          )}
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
};
