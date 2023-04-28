import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { AccountCircle, Class, ListAlt, Logout, NoteAdd, QuestionAnswer } from "@mui/icons-material";
import { Link } from "react-router-dom";

const StudentNavBar = () => {
  const text = {
    color: "#eaf8fb",
  };
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        <List
          component="nav"
          aria-label="main mailbox folders"
          className="navBar"
        >
          <Link to='/student/profile'>
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
            className="navBarContent"
          >
            <ListItemIcon>
              <AccountCircle style={{ color: "#eaf8fb" }} />
            </ListItemIcon>
            <ListItemText
              primary="Profile"
              primaryTypographyProps={{ style: text }}
            />
          </ListItemButton>
          </Link>

          <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemIcon>
              <NoteAdd style={{ color: "#eaf8fb" }} />
            </ListItemIcon>
            <ListItemText
              primary="Course"
              primaryTypographyProps={{ style: text }}
            />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <ListItemIcon>
              <Class style={{ color: "#eaf8fb" }} />
            </ListItemIcon>
            <ListItemText
              primary="Class"
              primaryTypographyProps={{ style: text }}
            />
          </ListItemButton>
          {/* <ListItemButton
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}
          >
            <ListItemIcon>
              <ListAlt style={{ color: "#eaf8fb" }} />
            </ListItemIcon>
            <ListItemText
              primary="TimeTable"
              primaryTypographyProps={{ style: text }}
            />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 4}
            onClick={(event) => handleListItemClick(event, 4)}
          >
            <ListItemIcon>
              <QuestionAnswer style={{ color: "#eaf8fb" }} />
            </ListItemIcon>
            <ListItemText
              primary="Result"
              primaryTypographyProps={{ style: text }}
            />
          </ListItemButton> */}
          <ListItemButton
            selected={selectedIndex === 5}
            onClick={(event) => handleListItemClick(event, 5)}
          >
            <ListItemIcon>
              <Logout style={{ color: "#eaf8fb" }} />
            </ListItemIcon>
            <ListItemText
              primary="Logout"
              primaryTypographyProps={{ style: text }}
            />
          </ListItemButton>
        </List>
        <Divider />
      </Box>
    </div>
  );
};

export default StudentNavBar;
