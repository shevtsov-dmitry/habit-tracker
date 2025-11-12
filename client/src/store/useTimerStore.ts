import {create} from "zustand/react";

enum ActivityBehavior {
    START = "START",
    STOP = "STOP",
    RESET = "RESET",
}

interface TimerState {
    behavior: ActivityBehavior;
    timeLeft: number;
    start: () => void;
    pause: () => void;
    reset: () => void;
}

const useTimerStore = create<TimerState>((set) => ({
    behavior: ActivityBehavior.STOP,
    timeLeft: 0,
    start: () => set((_) => ({behavior: ActivityBehavior.START})),
    pause: () => set((_) => ({behavior: ActivityBehavior.STOP})),
    reset: () => set((_) => ({behavior: ActivityBehavior.RESET})),
}))

export default useTimerStore;