import {ReactElement} from "react";

const TimerManagementPanel = (): ReactElement => {
    return (
        <div
            className="bg-neutral-50 flex h-16 w-1/2 rounded lg shadow-md flex-col items-center justify-center space-y-4 p-8">
            <h1 className=" text-xl font-bold">Timer Management Panel</h1>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Start Timer
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Stop Timer
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Reset Timer</button>
            <input className={"border border-gray-300 rounded-lg w-full placeholder:p-2 placeholder:mt-4"} type="number"
                   placeholder="Enter time in seconds"/>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Add
                Time
            </button>
        </div>
    )
}

export default TimerManagementPanel;