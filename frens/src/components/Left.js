import React from "react";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";

const Left = () => {
  return (
    <div className="bg-dark text-light vh-100">
      <div className="container py-40">
        <div className="d-flex align-items-center mb-4" style={{marginTop: "30px"}}>
          <PersonOutlineOutlinedIcon
            style={{ color: "yellow", fontSize: "28px", marginRight: "10px", marginLeft: "20px"}}
          />
          <span style={{ fontSize: "18px" }}>user name</span>
        </div>
        <div className="d-flex align-items-center mb-4">
          <PeopleOutlineOutlinedIcon
            style={{ color: "yellow", fontSize: "28px", marginRight: "10px", marginLeft: "20px" }}
          />
          <span style={{ fontSize: "18px" }}>Friends</span>
        </div>
        <div className="d-flex align-items-center">
          <Groups2OutlinedIcon
            style={{ color: "yellow", fontSize: "28px", marginRight: "10px", marginLeft: "20px" }}
          />
          <span style={{ fontSize: "18px", marginRight: "60px" }}>Groups</span>
        </div>
      </div>
    </div>
  );
};

export default Left;
