import { ReactElement } from "react";
import { useNavigate } from "react-router";

const NavigationPanel = (): ReactElement => {
  const navigate = useNavigate();

  const styles = {
    imageBottomIcon:
      "contrast-75 hover:contrast-150 hover:cursor-pointer hover:scale-105 rounded-3xl p-5 transition",
  };

  return (
    <div
      className={
        "flex justify-around items-center w-full max-laptop:w-[500px] py-2 "
      }
    >
      <div className={"h-fit"} onClick={() => navigate("/")}>
        <img
          src="images/navigation-bar/home.png"
          className={styles.imageBottomIcon}
          alt="open home"
        />
      </div>
      <div className={"h-fit"} onClick={() => navigate("/account")}>
        <img
          src="images/navigation-bar/account.png"
          className={styles.imageBottomIcon}
          alt="open account"
        />
      </div>
      <div className={"h-fit"} onClick={() => navigate("/settings")}>
        <img
          src="images/navigation-bar/settings.png"
          className={styles.imageBottomIcon}
          alt="open account"
        />
      </div>
    </div>
  );
};

export default NavigationPanel;
