import { ReactElement } from "react";


const HomeTab = (): ReactElement => {
  return (
    <div className={"flex-1 w-full h-full flex justify-center items-center"}>
      {/*<p className={"text-5xl text-white font-black"}>Home</p>*/}
      <p text="5xl red" font={"black"}>
        Home
      </p>
    </div>
  );
};

export default HomeTab;
