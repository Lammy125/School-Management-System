import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import {
  AccountCircle,
  Diversity2,
  Groups,
  Logout,
  NoteAdd,
  PersonAddAlt,
  PersonAddAlt1,
} from "@mui/icons-material";

const AdminNavBar = () => {
  const text = {
    color: "#eaf8fb",
  };
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <div>
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <List
          component="nav"
          aria-label="main mailbox folders"
          className="navBar"
        >
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <AccountCircle style={{ color: "#eaf8fb" }} />
            </ListItemIcon>
            <ListItemText
              primary="Profile"
              primaryTypographyProps={{ style: text }}
            />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemIcon>
              <PersonAddAlt1 style={{ color: "#eaf8fb" }} />
            </ListItemIcon>
            <ListItemText
              primary="Add Student"
              primaryTypographyProps={{ style: text }}
            />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <ListItemIcon>
              <PersonAddAlt style={{ color: "#eaf8fb" }} />
            </ListItemIcon>
            <ListItemText
              primary="Add Faculty"
              primaryTypographyProps={{ style: text }}
            />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}
          >
            <ListItemIcon>
              <Groups style={{ color: "#eaf8fb" }} />
            </ListItemIcon>
            <ListItemText
              primary="View Student"
              primaryTypographyProps={{ style: text }}
            />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 4}
            onClick={(event) => handleListItemClick(event, 4)}
          >
            <ListItemIcon>
              <Diversity2 style={{ color: "#eaf8fb" }} />
            </ListItemIcon>
            <ListItemText
              primary="View Faculty"
              primaryTypographyProps={{ style: text }}
            />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 5}
            onClick={(event) => handleListItemClick(event, 5)}
          >
            <ListItemIcon>
              <NoteAdd style={{ color: "#eaf8fb" }} />
            </ListItemIcon>
            <ListItemText
              primary="Add Course"
              primaryTypographyProps={{ style: text }}
            />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 6}
            onClick={(event) => handleListItemClick(event, 6)}
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

export default AdminNavBar;
