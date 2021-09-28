import React, { useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

export default function Home() {
  const user = JSON.parse(localStorage.getItem("profile"));

  const dispatch = useDispatch();

  return <div>Home</div>;
}
