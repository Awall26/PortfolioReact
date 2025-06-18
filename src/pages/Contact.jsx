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
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Typography variant="h3" component="h1" gutterBottom align="center">
            Contact Me
          </Typography>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                    style={{ display: "flex" }}
                  >
                    <EmailIcon sx={{ color: "#EA4335" }} />
                  </motion.div>
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
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                    style={{ display: "flex" }}
                  >
                    <LinkedInIcon sx={{ color: "#0077B5" }} />
                  </motion.div>
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
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Contact;
