import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Typography variant="h2" component="h1" gutterBottom sx={{ mb: 8 }}>
              Welcome to My Portfolio
            </Typography>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Typography variant="h5" color="text.secondary" paragraph>
              My name is Andrew Walter and I'm a software engineer.
            </Typography>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Typography variant="h5" color="text.secondary" paragraph>
              I'm a passionate developer creating amazing web experiences!
            </Typography>
          </motion.div>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Home;
