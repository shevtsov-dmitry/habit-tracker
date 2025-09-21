import { ReactElement } from "react";
import { useNavigate } from "react-router";
import { Person, Home, Settings } from "@mui/icons-material";

const NavigationPanel = (): ReactElement => {
  const navigate = useNavigate();

  return (
    <div className={"flex w-full justify-around"}>
      <Home className={"text-white"} onClick={() => navigate("/")} />
      <Person className={"text-white"} onClick={() => navigate("/account")} />
      <Settings className={"text-white"} onClick={() => navigate("/settings")} />
    </div>
  );
};

export default NavigationPanel;
