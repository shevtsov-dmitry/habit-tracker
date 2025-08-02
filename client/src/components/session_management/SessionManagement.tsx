import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { SERVER_ENDPOINT_URL } from "../../constants.js";

const SessionManagement = () => {
  const { t } = useTranslation();

  enum SessionStatus {
    ACTIVE,
    INACTIVE,
    SUSPENDED,
  }
  
  interface OperationConfirmer {
    operationType: SessionStatus | null,
    confirmed: Boolean
  }

  const [sessionTime, setSessionTime] = useState<number>(0);
  const [sessionStatus, setSessionStatus] = useState<SessionStatus>(
    SessionStatus.INACTIVE
  );

  const [operationConfirmer, setOperationConfirmer] = useState<OperationConfirmer>()

  function startSession() {
    setSessionStatus(SessionStatus.ACTIVE);
    // fetch(SERVER_ENDPOINT_URL + "/api/v0/sessions/start")
  }

  function pauseSession() {
    setSessionStatus(SessionStatus.SUSPENDED);
    // fetch(SERVER_ENDPOINT_URL + "/api/v0/sessions/pause")
  }

  function stopSession() {
    setSessionStatus(SessionStatus.INACTIVE);
    // fetch(SERVER_ENDPOINT_URL + "/api/v0/sessions/end")
    resetSession();
  }

  function resetSession() {
    setSessionStatus(SessionStatus.INACTIVE);
    setSessionTime(0);
  }


  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    if (sessionStatus === SessionStatus.ACTIVE) {
      interval = setInterval(() => {
        setSessionTime((prevVal) => prevVal + 1);
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [sessionStatus]);

  const SessionStatusCounter = () => {
    return (
      <>
        <p className="font-mono font-bold text-6xl w-full text-center">
          {sessionTime}
        </p>
      </>
    );
  };

  // const ConfirmationWindow = 
  

  const OperationButtons = () => {
    const style = {
      buttons:
        "w-16 h-16 shadow-md rounded-2xl hover:border-2 hover:border-zinc-400 hover:cursor-pointer",
      buttons_text: "font-bold text-black dark:text-white text-3xl select-none",
    };

    return (
      <div className={"flex gap-3"}>
        <button
          className={style.buttons + " bg-green-300 dark:bg-green-600"}
          onClick={startSession}
        >
          <p className={style.buttons_text + " mr-[-5px]  mt-[-5px]"}>▶</p>
        </button>
        <button
          className={style.buttons + " bg-yellow-300 dark:bg-yellow-500"}
          onClick={pauseSession}
        >
          <p className={style.buttons_text + " mb-[-2px]"}>II</p>
        </button>
        <button
          className={style.buttons + " bg-red-300 dark:bg-red-700"}
          onClick={stopSession}
        >
          <p className={style.buttons_text + "  mt-[-5px]"}>◼</p>
        </button>
        <button
          className={style.buttons + " bg-blue-300 dark:bg-blue-700"}
          onClick={resetSession}
        >
          <p className={style.buttons_text + "  mt-[-5px]"}>⎌</p>
        </button>
      </div>
    );
  };

  return (
    <div className="w-fit h-fit p-8 rounded-4xl shadow-2xl bg-neutral-50 m-auto">
      <h1 className="font-bold text-2xl text-center w-full">Session status</h1>
      <div className="my-2" />
      <SessionStatusCounter />
      <div className="my-2" />
      <OperationButtons />
    </div>
  );
};

export default SessionManagement;
