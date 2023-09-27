import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

export default function BasicList({ searchResults }) {
    return (
        <Box
            sx={{
                minWidth: "80vw",
                maxWidth: 360,
                bgcolor: "background.paper",
            }}
        >
            <List key={crypto.randomUUID()}>
                {searchResults &&
                    searchResults.map((result) => (
                        <>
                            <ListItem key={result.objectID} disablePadding>
                                <ListItemButton key={crypto.randomUUID()}>
                                    <ListItemText
                                        key={crypto.randomUUID()}
                                        primary={result.title}
                                    />
                                </ListItemButton>
                            </ListItem>
                            <Divider key={crypto.randomUUID()} />
                        </>
                    ))}
            </List>
        </Box>
    );
}
