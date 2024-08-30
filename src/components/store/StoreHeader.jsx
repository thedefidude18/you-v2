"use client";
import { KeyboardArrowDown } from "@mui/icons-material";
import { Tab, Tabs, useMediaQuery } from "@mui/material";
import React, { useState } from "react";

const StoreHeader = () => {
  const [value, setValue] = useState(0);
  const [isProjectDropdownOpen, setProjectDropdownOpen] = useState(false);
  const [isChainDropdownOpen, setChainDropdownOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 450px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleProjectDropdown = () => {
    setProjectDropdownOpen(!isProjectDropdownOpen);
  };

  const toggleChainDropdown = () => {
    setChainDropdownOpen(!isChainDropdownOpen);
  };

  const data = [
    { title: "Networks", url: "/Ellipse.png" },
    { title: "Insfrastructures", url: "/Ellipse.png" },
    { title: "Tools", url: "/Ellipse.png" },
    { title: "Qf Rounds", url: "/Ellipse.png" },
  ];

  const categories = [
    "DeFi",
    "Games",
    "Technology",
    "Arts",
    "Infrastructure",
    "Community",
    "NGO"
  ];

  const chains = [
    "Polygon",
    "Optimism",
    "Arbitrum",
    "CELO",
    "Base",
    "Solana",
    "Ethereum"
  ];

  return (
    <div className="flex justify-between gap-2 w-[400px] sm:w-full mx-auto sm:items-center items-start sm:flex-row flex-col my-4">
      <div className=" relative">
      <div className="overflow-x-auto w-full ">
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
              minWidth: isSmallScreen ? "40%" : "auto",
              flex: "1 1 auto",
              padding: "0 4px",
            },
            width: "100%",
            position:"relative"
            
          }}
        >
          <Tab
            label={
              <div className="relative">
                <div className="flex items-center gap-1" onClick={toggleProjectDropdown}>
                  <p className="whitespace-nowrap text-sm text-gray-700">
                    All Categories
                  </p>
                  <KeyboardArrowDown sx={{ fontSize: "10px", color: "gray" }} />
                </div>
              
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
      {isProjectDropdownOpen && (
                  <div className="absolute z-[200] top-8 sm:left-3 left-[10%] mt-2 px-2 w-max bg-white shadow-xl rounded-md py-2">
                    {categories.map((item, i) => (
                      <a
                        key={i}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#a4a1c7] rounded-md"
                        onClick={() => setProjectDropdownOpen(!isProjectDropdownOpen)}
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
    </div>
      <div className="flex gap-2 items-center whitespace-nowrap">
       
        <div className="relative">
          <button
            className="bg-[#EFF2F5] flex items-center gap-2 text-xs p-2 rounded-md"
          >
            <span>Submit your project</span>
          </button>
        </div>

      
        <div className="relative">
          <button
            onClick={toggleChainDropdown}
            className="bg-[#EFF2F5] flex items-center gap-2 text-xs p-2 rounded-md"
          >
            <span>Filter by chain</span>
            <KeyboardArrowDown sx={{ fontSize: "12px" }} />
          </button>
          {isChainDropdownOpen && (
            <div className="absolute z-10 mt-2 px-2 w-full bg-white shadow-lg rounded-md py-2">
              {chains.map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#a4a1c7] rounded-md"
                  onClick={() => setChainDropdownOpen(!isChainDropdownOpen)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreHeader;
