import { makeStyles, alpha } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5px 50px",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
    textDecoration: "none",
  },

  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "300px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "300px",
    [theme.breakpoints.down("sm")]: {
      width: "100px",
    },
  },
  userName: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
