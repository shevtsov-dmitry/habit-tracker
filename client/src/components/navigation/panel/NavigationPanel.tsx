import { ReactElement } from "react";
import { useNavigate } from "react-router";

const NavigationPanel = (): ReactElement => {
  const navigate = useNavigate();

  return (
    <div
      className={
        "flex justify-around items-center w-full max-laptop:w-[500px] h-fit bg-purple-500"
      }
    >
      <button onClick={() => navigate("/")}>
        <img
          src="images/navigation-bar/home.png"
          className=""
          alt="open home"
        />
      </button>
      <button onClick={() => navigate("/account")}>
        <img
          src="images/navigation-bar/account.png"
          className=""
          alt="open account"
        />
      </button>
      <button onClick={() => navigate("/settings")}>
        <img
          src="images/navigation-bar/settings.png"
          className=""
          alt="open account"
        />
      </button>
    </div>
  );
};

export default NavigationPanel;
