import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import Link from "next/link";
import React from "react";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await response.json();

  return {
    props: { users: result },
  };
};

const Nested = ({users}) => {
  console.log(users,"users");
  return (
    <>
    <List>
      {
        users&&users.map((user)=>{
          return(
            <Link href={`/nested/${user.id}`} key={user.id}>
            <ListItem disablePadding >
                <ListItemButton>
                  <ListItemText primary={user.name} />
                </ListItemButton>
            </ListItem>
            </Link>
          )
        })
      }
    </List>
    
    </>
  )
};

export default Nested;
