import React, { useContext, useState } from "react";
import styles from "./Header.module.css";
import Button from "../Button/Button";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { sharedState } from "@/app/layout";
import Link from "next/link";
import { Close, Menu } from "@mui/icons-material";
import { Divider, Drawer } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import Aside from "../Aside/Aside";
import Image from "next/image";
function Header() {
  const stateRecived = useContext(sharedState);
  const { stateStep } = stateRecived;
  const [open, setOpen] = useState(false)
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <div className=" flex justify-between items-center !w-full p-2 py-4">
      <div className="w-full h-14 items-center px-5 flex sm:hidden justify-between z-[999]">
        <Link href={"/"} className="w-full h-full flex items-center">
          <Image src={'/svgs/Logo.svg'} width={125.2} height={33} alt="Logo" />
        </Link>
        <div className="w-full h-full flex justify-between">
          <Image src="/svgs/Search.svg" alt="Cart" height={35} width={35} className="object-cover opacity-[55%]" />
          <Link href={"/cart"}>
            <Image src="/svgs/Cart.svg" alt="Cart" height={30} width={30} className="object-cover" />
          </Link>
          <Divider orientation="vertical" className="h-[60%]" />
          <div className="flex gap-0">
            <Image src="/domain/Arb Logo.png" alt="logos" height={30} width={30} className="object-cover" />
            <KeyboardArrowDownTwoToneIcon className="text-[30px] font-semibold" />
          </div>
          {open ? (
            <Close onClick={() => setOpen(false)} className="!text-[40px]" />
          ) :
            (
              <Menu style={{ fontSize: "40px" }} onClick={() => setOpen(true)} />
            )}
        </div>
      </div>

      <div className="p-2 border bg-[var(--third-color)] rounded-md relative sm:w-1/3 sm:block hidden placeholder:text-[#949aaf]">

        <input
          type="text"
          placeholder="Search for projects"
          suppressHydrationWarning={true}
          className="bg-[var(--third-color)] w-full p-1"
        />
        <img
          className="absolute right-[12px] top-[25%]"
          src="/svgs/Search.svg"
          alt="Search"
        />
      </div>
      <div className=" sm:flex hidden items-center gap-4 sm:w-2/3 justify-end">
        <Link className={stateStep > 0 ? " text-xl" : ""} href={"/cart"} >
          <img src="/svgs/Cart.svg" alt="Cart" className=" h-[40px] object-cover" />
        </Link>
        <div className="w-[2px] bg-gray-300 h-6 sm:flex hidden" />
        <div className="">
          <ConnectButton />
        </div>
      </div>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiBackdrop-root": {
            backgroundColor: "transparent",
            backdropFilter: "none",
          },
          "& .MuiDrawer-paper": {
            top: "88px",
            minHeight: "100vh",
            overflowY: "scroll",
            width: "100%",
          },
        }}
      >
        <Aside setOpen={setOpen} open={open} />
      </Drawer>
    </div>
  );
}

export default Header;
