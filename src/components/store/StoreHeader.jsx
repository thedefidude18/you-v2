"use client"
import { ArrowDownward, KeyboardArrowDown } from "@mui/icons-material";
import { Tab, Tabs, useMediaQuery } from "@mui/material";
import React, { useState } from "react";

const StoreHeader = () => {
  const [value, setValue] = useState(0);
  const isSmallScreen = useMediaQuery("(max-width: 450px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const data = [
    { title: "Networks", url: "/Ellipse.png" },
    { title: "Insfrastructures", url: "/Ellipse.png" },
    { title: "Tools", url: "/Ellipse.png" },
    { title: "Qf Rounds", url: "/Ellipse.png" },
  ];

  return (
    <div className="flex justify-between gap-2  w-[400px]  sm:w-full mx-auto sm:items-center items-start sm:flex-row flex-col my-4">
      <div className="overflow-x-auto w-full"> 
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
          sx={{
            "& .MuiTabs-indicator": { display: "none" }, 
            "& .MuiTab-root": {
              minWidth: isSmallScreen ? "50%" : "auto", 
              flex: "1 1 auto",
              padding: "0 8px",
            }, 
            width: "100%",
          }}
        >
          <Tab
            label={
              <div className="flex items-center gap-1">
                <p className="whitespace-nowrap text-sm text-gray-700">All Categories</p>
                <KeyboardArrowDown sx={{ fontSize: "10px", color: "gray" }} />
              </div>
            }
            sx={{ fontSize: "12px", textTransform: "none" }}
          />
          {data.map((item, index) => (
            <Tab
              key={index}
              label={
                <div className="flex items-center gap-1">
                  <p className="whitespace-nowrap text-sm">{item.title}</p>
                  <img src={item.url} alt="dot" className="w-2 h-2" />
                </div>
              }
              sx={{
                fontSize: "12px",
                textTransform: "none",
                "&.Mui-selected": { color: "black" },
              }}
            />
          ))}
        </Tabs>
      </div>

      <div className="flex gap-2 items-center whitespace-nowrap">
        <button className="bg-[#EFF2F5] flex items-center gap-2 text-xs p-2 rounded-md ">
          <span>Submit your project</span>
          <KeyboardArrowDown sx={{ fontSize: "12px" }} />
        </button>
        <button className="bg-[#EFF2F5] flex items-center gap-2 text-xs p-2 rounded-md">
          <span>Filter by chain</span>
          <KeyboardArrowDown sx={{ fontSize: "12px" }} />
        </button>
      </div>
    </div>
  );
};

export default StoreHeader;
