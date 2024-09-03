import React from "react";
import {
  Table as MUITable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
} from "@mui/material";
import { ArrowOutward, MoreVert } from "@mui/icons-material";

const Table = () => {
  const projects = [
    {
      name: "AfriPGF",
      ecosystem: "Gitcoin Grants",
      ecosystemicon: "/gitcoin.svg",
      about: "Content curating app. Brings all your news into one place.",
      socials: ["/github.svg", "/x.svg", "/Telegram.svg", "/Discord.svg", "/Group.svg"],
      fund: "Donate",
    },
    {
      name: "XGames on Arbitrum",
      ecosystem: "YouBuild",
      ecosystemicon: "/youbuild.svg",
      about: "Design software. Super lightweight design app.",
      socials: ["/github.svg", "/x.svg", "/Telegram.svg", "/Discord.svg", "/Group.svg"],
      fund: "Donate",
    },
    {
      name: "YOuBuild",
      ecosystem: "Ton Grants",
      ecosystemicon: "/Coin.svg",
      about: "Data prediction. AI and machine learning data.",
      socials: ["/github.svg", "/x.svg", "/Telegram.svg", "/Discord.svg", "/Group.svg"],
      fund: "Donate",
    },
    {
      name: "YOuBuild",
      ecosystem: "Ton Grants",
      ecosystemicon: "/Coin.svg",
      about: "Data prediction. AI and machine learning data.",
      socials: ["/github.svg", "/x.svg", "/Telegram.svg", "/Discord.svg", "/Group.svg"],
      fund: "Donate",
    },
    {
      name: "YOuBuild",
      ecosystem: "Ton Grants",
      ecosystemicon: "/Coin.svg",
      about: "Data prediction. AI and machine learning data.",
      socials: ["/github.svg", "/x.svg", "/Telegram.svg", "/Discord.svg", "/Group.svg"],
      fund: "Donate",
    },
  ];

  return (
    <div className=" max-w-full font">
    <TableContainer sx={{border:"1px solid #F4F4F4",whiteSpace:"nowrap", maxWidth: {sm:900,md:"77vw",xs:360} }}>
      <MUITable >
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ whiteSpace: "nowrap", minWidth: 300 ,display:"flex",alignItems:"center",gap:"10px"}}>
              <button  style={{ bgcolor: "#F1F6FE", fontWeight: "bold" }} className=" p-2 bg-[#F1F6FE] font-bold rounded-md">
                Project Name
              </button>
              <img src="/Star.png" alt="" />
            </TableCell>
            <TableCell align="center" sx={{ whiteSpace: "nowrap", minWidth: 150 }}>
              Grant Ecosystem
            </TableCell>
            <TableCell align="center" sx={{ minWidth: 300 }}>
              About
            </TableCell>
            <TableCell align="center" sx={{ whiteSpace: "nowrap", minWidth: 150 }}>
              Socials
            </TableCell>
            <TableCell align="center" sx={{ whiteSpace: "nowrap", minWidth: 150 }}>
              Fund this project
            </TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((project, index) => (
            <TableRow key={index}  sx={{backgroundColor:`${index %2===0 ? "#F9FAFB":"#fff"}`}}>
              <TableCell component="th" scope="row" sx={{  }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src="/Image.svg" alt="Project" style={{ width: 48, height: 48, marginRight: 8 }} />
                  <div>
                    <strong className=" text-[20px]">{project.name}</strong>
                    <div style={{ display: "flex", gap: 4, marginTop: 4 }}>
                      <span style={{  backgroundColor: "#F9F5FF", borderRadius: 16, display: "flex", alignItems: "center" }} className=" py-1 pl-2 pr-6 text-[#6941C6]">
                        <img src="/Ethereum.svg" alt="Ethereum"  />
                        Ethereum
                      </span>
                      <span style={{ backgroundColor: "#F9F5FF", borderRadius: 16, display: "flex", alignItems: "center",gap:"5px" }} className="py-1 pl-2 pr-6 text-[#6941C6]">
                        <img src="/Coin.svg" alt="Ethereum"  />
                        Ethereum
                      </span>
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell align="center" sx={{ whiteSpace: "nowrap" }}>
  <div className="flex justify-center items-center gap-1 w-auto border-2 bg-white py-1 !px-0 rounded-lg">
    <img src={project.ecosystemicon} alt="Ecosystem" />
    {project.ecosystem}
  </div>
</TableCell>
              <TableCell  sx={{ whiteSpace: "normal", wordWrap: "break-word" }}>
              <p className=" text-sm text-[#101828]">  {project.about} </p>
              <p className=" text-xs font-light text-[#475467]"> {project.about}</p>
              </TableCell>
              <TableCell align="center" sx={{ whiteSpace: "nowrap" }}>
                <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
                  {project.socials.map((social, idx) => (
                    <img src={social} alt="Social" key={idx} style={{ width: 16, height: 16 }} />
                  ))}
                </div>
              </TableCell>
              <TableCell align="center" sx={{ whiteSpace: "nowrap" }}>
                <Button variant="contained" sx={{ background: "linear-gradient(136.86deg, #4459a9 5.64%, #402383 118.93%)", color: "#fff" }}>
                  {project.fund}
                  <ArrowOutward sx={{ fontSize: "14px", marginLeft: 1 }} />
                </Button>
              </TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </MUITable>
    </TableContainer>
    </div>
  );
};

export default Table;
