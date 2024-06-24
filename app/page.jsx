"use client";
// pages/index.js
import React, { useState } from "react";
import SearchBar from "@/components/SearchBar";
import Navbar from "@/components/Navbar";
import PopularBooks from "@/components/PopularBooks";

const Home = () => {
  return (
    <div className="flex flex-col flex-1">
      <SearchBar />
      <Navbar />
    </div>
  );
};

export default Home;
