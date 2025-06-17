import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Box,
} from "@mui/material";
import gamesboiImage from "../assets/Screenshot 2025-06-17 192612.png";
import bookbuddyImage from "../assets/Screenshot 2025-06-17 193354.png";
import puppybowlImage from "../assets/Screenshot 2025-06-17 193635.png";

const Projects = () => {
  const projects = [
    {
      title: "GamesBoi",
      description: (
        <Box>
          <Typography variant="subtitle1" gutterBottom>
            Capstone Project | Fullstack Engineer | May 2025
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            <ul style={{ paddingLeft: "20px", margin: "0" }}>
              <li>
                Developed a full-stack e-commerce web application for video
                games, enabling users to browse, search, and purchase products.
              </li>
              <li>
                Designed and implemented a responsive, modern UI using React.js
                and CSS for seamless user experience across devices.
              </li>
              <li>
                Built RESTful APIs and business logic with Node.js and
                Express.js; managed data persistence with PostgreSQL.
              </li>
              <li>
                Integrated Redux Toolkit for robust state management and
                efficient API data fetching.
              </li>
              <li>
                Implemented secure user authentication, registration, and
                authorization with JWT.
              </li>
              <li>
                Created dynamic shopping cart functionality with real-time
                updates and checkout flow.
              </li>
              <li>
                Built secure admin features for product management, including
                product creation, editing, and deletion.
              </li>
              <li>
                Deployed the application using Netlify (frontend) and Render
                (backend) for scalable, cloud-based hosting.
              </li>
              <li>
                Collaborated using Git and GitHub for version control and team
                workflow.
              </li>
              <li>
                Wrote modular, maintainable code and comprehensive documentation
                to support future development.
              </li>
            </ul>
          </Typography>
        </Box>
      ),
      image: gamesboiImage,
      link: "https://gamesboi.netlify.app",
    },
    {
      title: "BookBuddy",
      description: (
        <Box>
          <Typography variant="subtitle1" gutterBottom>
            BookBuddy Library App | Fullstack Engineer | March 2025
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            <ul style={{ paddingLeft: "20px", margin: "0" }}>
              <li>
                Enabled users to browse, search, check out, and return books
                online, streamlining library management and improving user
                access to resources.
              </li>
              <li>React (Vite) for fast, responsive UI</li>
              <li>
                Redux Toolkit Query for state management and API integration
              </li>
              <li>RESTful API for backend communication</li>
              <li>User authentication and protected routes</li>
              <li>Custom CSS for modern, accessible design</li>
              <li>Netlify for CI/CD and deployment</li>
              <li>Error handling, debugging and user feedback mechanisms</li>
            </ul>
          </Typography>
        </Box>
      ),
      image: bookbuddyImage,
      link: "https://bookbuddy.netlify.app",
    },
    {
      title: "Puppy Bowl",
      description: (
        <Box>
          <Typography variant="subtitle1" gutterBottom>
            Puppy Bowl Web App | Fullstack Engineer | February 2025
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            <ul style={{ paddingLeft: "20px", margin: "0" }}>
              <li>
                Developed a static web application as part of an early
                coursework project, prior to learning React
              </li>
              <li>
                Implemented core web development concepts using HTML, CSS,
                JavaScript
              </li>
              <li>
                Managed project version control with Git and deployed
                configuration for Netlify
              </li>
              <li>
                Gained foundational experience in building and styling
                interactive web pages
              </li>
            </ul>
          </Typography>
        </Box>
      ),
      image: puppybowlImage,
      link: "https://puppybowl.netlify.app",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        My Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardActionArea
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ flexGrow: 1 }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {project.title}
                  </Typography>
                  {typeof project.description === "string" ? (
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  ) : (
                    project.description
                  )}
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
