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
      socials: ["/github.svg", "/x.svg", "/Telegram.svg", "/Discord.svg", "/group.svg"],
      fund: "Donate",
    },
    {
      name: "XGames on Arbitrum",
      ecosystem: "YouBuild",
      ecosystemicon: "youbuild.svg",
      about: "Design software. Super lightweight design app.",
      socials: ["/github.svg", "/x.svg", "/Telegram.svg", "/Discord.svg", "/group.svg"],
      fund: "Donate",
    },
    {
      name: "YOuBuild",
      ecosystem: "Ton Grants",
      ecosystemicon: "/coin.svg",
      about: "Data prediction. AI and machine learning data.",
      socials: ["/github.svg", "/x.svg", "/Telegram.svg", "/Discord.svg", "/group.svg"],
      fund: "Donate",
    },
  ];

  return (
    <TableContainer sx={{ margin: "auto",border:"1px solid #F4F4F4", maxWidth: {sm:"100%",md:"100%",xs:400} }}>
      <MUITable sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ whiteSpace: "nowrap", minWidth: 150 ,display:"flex",alignItems:"center",gap:"10px"}}>
              <button  style={{ bgcolor: "#F1F6FE", fontWeight: "bold" }} className=" p-2 bg-[#F1F6FE] font-bold rounded-md">
                Project Name
              </button>
              <img src="/star.png" alt="" />
            </TableCell>
            <TableCell align="center" sx={{ whiteSpace: "nowrap", minWidth: 120 }}>
              Grant Ecosystem
            </TableCell>
            <TableCell align="center" sx={{ minWidth: 300 }}>
              About
            </TableCell>
            <TableCell align="center" sx={{ whiteSpace: "nowrap", minWidth: 100 }}>
              Socials
            </TableCell>
            <TableCell align="center" sx={{ whiteSpace: "nowrap", minWidth: 120 }}>
              Fund this project
            </TableCell>
            <TableCell sx={{ whiteSpace: "nowrap", minWidth: 50 }} />
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((project, index) => (
            <TableRow key={index} hover>
              <TableCell component="th" scope="row" sx={{ whiteSpace: "nowrap" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src="/image.png" alt="Project" style={{ width: 48, height: 48, marginRight: 8 }} />
                  <div>
                    <strong>{project.name}</strong>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 4 }}>
                      <span style={{ padding: "2px 8px", backgroundColor: "#F9F5FF", borderRadius: 16, display: "flex", alignItems: "center" }}>
                        <img src="/Ethereum.svg" alt="Ethereum"  />
                        Ethereum
                      </span>
                      <span style={{ padding: "2px 8px", backgroundColor: "#F9F5FF", borderRadius: 16, display: "flex", alignItems: "center",gap:"5px" }}>
                        <img src="/coin.svg" alt="Ethereum"  />
                        Ethereum
                      </span>
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell align="center" sx={{ whiteSpace: "nowrap" }}>
                <span style={{ padding: "4px 8px", border: "1px solid #ddd", borderRadius: 4, display: "flex", alignItems: "center" }}>
                  <img src={project.ecosystemicon} alt="Ecosystem" style={{ width: 16, height: 16, marginRight: 4 }} />
                  {project.ecosystem}
                </span>
              </TableCell>
              <TableCell align="center" sx={{ whiteSpace: "normal", wordWrap: "break-word" }}>
                {project.about}
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
              <TableCell align="center" sx={{ whiteSpace: "nowrap" }}>
                <IconButton>
                  <MoreVert />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MUITable>
    </TableContainer>
  );
};

export default Table;
