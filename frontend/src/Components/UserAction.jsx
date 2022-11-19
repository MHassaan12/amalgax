import React from "react";
import { SpeedDial, SpeedDialAction} from "@mui/material";
import { CgProfile } from "react-icons/cg";
import { FiSettings } from 'react-icons/fi'
import { BiLogOutCircle } from 'react-icons/bi'
import boy1 from "../assets/boy.jpg";

const UserAction = () => {
  return (
    <SpeedDial
      className="text-gray-900"
      ariaLabel="SpeedDial basic example"
      direction="down"
      sx={{ position: "absolute", top: 50, right: 16 }}
      FabProps={{
        sx: {
          width: 40,
          height: 40,
        },
      }}
      icon={
        <img
          className="h-10 w-10 rounded-full object-cover"
          src={boy1}
          alt="Boy pic not found"
        />
      }
    >
      <SpeedDialAction
        key={"profile"}
        icon={<CgProfile className="text-xl text-custom-secondary" />}
        tooltipTitle="My Profile"
      />

      <SpeedDialAction
        key={"profile"}
        icon={<FiSettings className="text-xl text-custom-secondary" />}
        tooltipTitle="My Profile"
      />

      <SpeedDialAction
        key={"profile"}
        icon={<BiLogOutCircle className="text-xl text-custom-secondary" />}
        tooltipTitle="My Profile"
      />
    </SpeedDial>
  );
};

export default UserAction;
