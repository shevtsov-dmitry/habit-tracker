import {useTranslation} from "react-i18next";

const SessionManagement = () => {

    const {t} = useTranslation()

    const SessionStatus = () => {
        return <>
            <p>Current session progress</p>
            <p>log: your session still running...</p>
        </>;
    }


    const OperationButtons = () => {

        const style = {
            buttons: "w-32 h-16 shadow-md rounded-2xl hover:border-2 hover:border-zinc-400",
            buttons_text: "font-bold text-white"
        }

        return <div className={"flex gap-3"}>
            <button className={style.buttons + " bg-green-300 dark:bg-green-600 "}>
                <p className={style.buttons_text}>
                    {t('session_management.start')}
                </p>
            </button>
            <button className={style.buttons + " bg-red-300 dark:bg-red-700"}>
                <p className={style.buttons_text}>
                    {t('session_management.stop')}
                </p>
            </button>
        </div>;
    }

    return (
        <div>
            {/*<SessionStatus/>*/}
            <OperationButtons/>
        </div>
    );
}

export default SessionManagement;