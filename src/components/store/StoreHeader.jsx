"use client";
import { ArrowOutward, KeyboardArrowDown } from "@mui/icons-material";
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
    { title: "Networks", url: "/Ellipse.svg" },
    { title: "Insfrastructures", url: "/Ellipse.svg" },
    { title: "Tools", url: "/Ellipse.svg" },
    { title: "Qf Rounds", url: "/Ellipse.svg" },
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
    <div className="flex justify-between font gap-2 w-[400px] sm:w-full mx-auto sm:items-center items-start sm:flex-row flex-col my-4">
      <div className=" relative sm:block hidden">

    
      <div className="overflow-auto w-full">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto" 
          aria-label="scrollable slider-like tabs example"
          sx={{
            '& .MuiTabs-indicator': {
              display: 'none',
            },
            '& .MuiTabs-scrollButtons.Mui-disabled': {
              opacity: 0.3, 
            },
  
          }}
        >
          <Tab
          
            label={
              <div className=" relative">
              <div className="flex items-center gap-1" onClick={toggleProjectDropdown}>
                <p className="whitespace-nowrap text-sm text-gray-700">
                  All Categories
                </p>
                <KeyboardArrowDown sx={{ fontSize: "10px", color: "gray" }} />
              </div>
              
              </div>
            }
            sx={{ fontSize: "12px", textTransform: "none",minWidth: '120px' }}
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
                minWidth: '120px',
                "&.Mui-selected": { color: "black" },
              }}
            />
          ))}
        </Tabs>
        {isProjectDropdownOpen && (
                <div className="absolute z-[100] sm:left-4 left-[12%] mt-2  px-2 w-auto  bg-white shadow-xl rounded-md py-2">
                {categories.map((item,i)=>(  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#a4a1c7]  rounded-md"
                    onClick={()=>setProjectDropdownOpen(!isProjectDropdownOpen)}
                  >
                    {item}
                  </a>))}
                  
                </div>
              )}
      </div>
     
      </div>
      <div className="overflow-x-auto w-full sm:hidden block">
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
          }}
        >
          <Tab
            label={
              <div className=" relative">
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
        <div>
          
        </div>
        {isProjectDropdownOpen && (
                <div className="absolute z-[100] sm:left-4 left-[12%] mt-2  px-2 w-auto  bg-white shadow-xl rounded-md py-2">
                {categories.map((item,i)=>(  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#a4a1c7]  rounded-md"
                    onClick={()=>setProjectDropdownOpen(!isProjectDropdownOpen)}
                  >
                    {item}
                  </a>))}
                  
                </div>
              )}
      </div>
      {/* Buttons with Dropdowns */}
      <div className="flex gap-2 items-center whitespace-nowrap">
        {/* Submit your project button with dropdown */}
        <div className="relative">
          <button
            
            className="bg-[#EFF2F5] flex items-center gap-2 text-xs p-2 rounded-md"
          >
            <span>Submit your project</span>
            <ArrowOutward sx={{ fontSize: "14px", marginLeft: 1 }} />
          </button>
         
        </div>

       
        <div className="relative">
          <button
            onClick={toggleChainDropdown}
            className="bg-[#EFF2F5] font flex items-center gap-2 text-xs p-2 rounded-md"
          >
            <span>Filter by chain</span>
            <KeyboardArrowDown sx={{ fontSize: "12px" }} />
          </button>
          {isChainDropdownOpen && (
            <div className="absolute z-10 mt-2   px-2 w-full  bg-white shadow-lg rounded-md py-2">
              {chains.map((item,i)=>(  <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#a4a1c7]  rounded-md"
               
                onClick={()=>setChainDropdownOpen(!isChainDropdownOpen)}
              >
                {item}

              </a>))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreHeader;