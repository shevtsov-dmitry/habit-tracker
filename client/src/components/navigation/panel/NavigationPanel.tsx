import { ReactElement } from "react";
import { useNavigate } from "react-router";

const NavigationPanel = (): ReactElement => {
  const navigate = useNavigate();

  return (
    <div
      flex
      justify-around
      items-center
      w="full max-laptop:[500px]"
      h-fit
      py-5
      bg="~ dark:orange-900 blue-300"
    >
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/account")}>Account</button>
      <button onClick={() => navigate("/settings")}>Settings</button>
    </div>
  );
};

export default NavigationPanel;
