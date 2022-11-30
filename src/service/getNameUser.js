import React, { useEffect, useState } from "react";
import { getCourses } from "./authService";
import { nameData } from "../redux/reducer/userNameSlice";
import { useDispatch } from "react-redux";

const GetNameUser = () => {
  const dispatch = useDispatch();
  const fetchName = () => {
    getCourses.getAllUsers().then((res) => {
      dispatch(nameData(res))
    });
  };

  useEffect(() => {
    fetchName();
  }, []);

};

export default GetNameUser;
