import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import * as React from "react";
import Typography from "@mui/material/Typography";

export default function BasicList({ searchInput, searchResults }) {
    return (
        <Box
            sx={{
                minWidth: "80vw",
                maxWidth: 360,
                bgcolor: "background.paper",
            }}
        >
            <h2>
                {searchInput ? `Results for "${searchInput}"` : "Top stories"}
            </h2>
            <List key={crypto.randomUUID()}>
                {searchResults &&
                    searchResults.map((result) => (
                        <>
                            <ListItem key={result.objectID}>
                                <ListItemButton
                                    key={crypto.randomUUID()}
                                    component="a"
                                    href={result.url}
                                >
                                    <ListItemText
                                        key={crypto.randomUUID()}
                                        primary={
                                            <React.Fragment>
                                                {result.title}
                                                <Typography
                                                    sx={{ display: "inline" }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.secondary"
                                                >
                                                    {`(${result.url})`}
                                                </Typography>
                                            </React.Fragment>
                                        }
                                        secondary={`${result.points} points by ${result.author} ${result.num_comments} comments`}
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
