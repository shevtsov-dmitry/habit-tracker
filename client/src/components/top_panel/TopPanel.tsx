import {useTranslation} from "react-i18next";

const TopPanel = () => {

    const {i18n} = useTranslation()

    return (
        <div className={"shadow-md h-[2%] w-full bg-white"}>
            
            <div className={"flex flex-col text-sm text-neutral-700"}>
                <button onClick={() => i18n.changeLanguage('en')}>EN (english)</button>
                <button onClick={() => i18n.changeLanguage('ru')}>RU (русский)</button>
            </div>
        </div>
    );
}

export default TopPanel;