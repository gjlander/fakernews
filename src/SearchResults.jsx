import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
// import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

export default function BasicList({ searchResults, setSearchResults }) {
    return (
        <Box
            sx={{
                minWidth: "80vw",
                maxWidth: 360,
                bgcolor: "background.paper",
            }}
        >
            <List>
                {searchResults.map((result) => (
                    <>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary={result.title} />
                            </ListItemButton>
                        </ListItem>
                        <Divider />
                    </>
                ))}
            </List>
        </Box>
    );
}
