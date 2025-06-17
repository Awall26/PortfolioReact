import React from "react";
import {
  Container,
  Typography,
  Paper,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Contact Me
      </Typography>
      <Paper elevation={3} sx={{ p: 4 }}>
        <List>
          <ListItem>
            <ListItemIcon>
              <EmailIcon sx={{ color: "#EA4335" }} />
            </ListItemIcon>
            <ListItemText>
              <Link
                href="mailto:awalter72@gmail.com"
                color="inherit"
                underline="hover"
              >
                awalter72@gmail.com
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <LinkedInIcon sx={{ color: "#0077B5" }} />
            </ListItemIcon>
            <ListItemText>
              <Link
                href="https://www.linkedin.com/in/andrew-walter26"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                underline="hover"
              >
                linkedin.com/in/andrew-walter26
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </Paper>
    </Container>
  );
};

export default Contact;
