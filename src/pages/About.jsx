import React from "react";
import { Container, Typography, Grid, Paper, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        About Me
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Who I Am
            </Typography>
            <Typography paragraph>
              I am a recent graduate of Fullstack Academy through Virginia Tech.
              I am an excellent communicator and problem solver, who is eager to
              bring operational insight and technical expertise to collaborative
              development teams. I am looking to transition into software
              development and build my skills in a new field. From a young age I
              have been interested in tech and how it can enhance the world. I
              finally feel like I have found my passion and I am excited to see
              where it takes me. When I'm not working, you'll usually find me
              spending time with my wife and our dogs, riding my motorcycle,
              gaming, or catching up with friends.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Skills
            </Typography>
            <Typography paragraph>
              • JavaScript (ES6+)
              <br />
              • HTML & CSS
              <br />
              • Node.js & React
              <br />• Git/GitHub{" "}
              <Link
                href="https://github.com/Awall26"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ display: "inline-flex", alignItems: "center", ml: 0.5 }}
              >
                <GitHubIcon fontSize="small" />
              </Link>
              <br />
              • REST APIs & SQL
              <br />
              • Google Sheets
              <br />
              • Salesforce (Service/Sales Cloud)
              <br />
              • Dropbox
              <br />
              • Samsara
              <br />• ProPass
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
