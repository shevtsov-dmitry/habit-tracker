import {ReactElement} from "react";
import Timer from "../timer/Timer.tsx";


const HomeTab = (): ReactElement => {
    return (
        <div className={"flex-1 w-full h-full flex justify-center items-center"}>
            <p className="text-5xl text-red font-black">Home</p>
            <Timer timeOffset={"+03:00"} useSeconds/>
        </div>
    );
};

export default HomeTab;
