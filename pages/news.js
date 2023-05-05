import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
export const API_URL = "https://www.hrtech.sg:4000";
export const API_News = `${API_URL}/News/alldata/website`;

export const getStaticProps = async () => {
  const response = await fetch(`${API_News}`);
  const result = await response.json();

  return {
    props: { users: result },
  };
};

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const news = ({ users }) => {
  console.log(users, "users");

  return (
    <>
      {users.map((values) => {
        return (
          <p size="small" style={{ padding: "5px" }}>
            <Link href="/[news]"> {values.NewsHeadline}</Link>
          </p>
        );
      })}
    </>
  );
};

export default news;
