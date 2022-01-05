import React from "react";
import "./styles.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const MainPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card className="cardStyle" sx={{ maxWidth: "90%" }}>
        <Avatar
          alt="Shafqat Ullah Khan"
          src="https://avatars.githubusercontent.com/u/32072222?v=4"
          sx={{ height: "50%", width: "50%" }}
          style={{ margin: "auto" }}
        />
        <CardContent>
          <Typography
            style={{ margin: "auto" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            Shafqat Ullah Khan
          </Typography>
          <Typography variant="body2" color="text.secondary">
            React Native | ReactJS | Firebase | iOS | Android | NodeJS |
            JavaScript | MERN
          </Typography>
        </CardContent>
        <CardActions
          style={{
            justifyContent: "center",
          }}
        >
          <a
            rel="noreferrer"
            className="linkBtn"
            href="https://www.linkedin.com/in/shafqat-ullah-khan-25a9b8111"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
          <a
            rel="noreferrer"
            className="linkBtn"
            href="https://github.com/Shasikhan"
            target="_blank"
          >
            <GitHubIcon />
          </a>
          <a
            rel="noreferrer"
            className="linkBtn"
            href="https://twitter.com/shafqat_ullahk/"
            target="_blank"
          >
            <FacebookIcon />
          </a>
        </CardActions>
      </Card>
    </div>
  );
};

export default MainPage;
