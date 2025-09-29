import { ReactElement } from 'react'

/**
 * ModularForm contains exportable components to build a form predefined components.
 * @returns
 */
const ModularForm = (): ReactElement => <></>

export const FormBody = (): ReactElement => {
    return (
        <form
            className="h-fit min-h-1/5 w-1/2 min-w-1/3 rounded-3xl bg-neutral-800/70 px-4 pt-3 pb-5"
            onSubmit={(e) => e.preventDefault()}
        ></form>
    )
}

interface TextInputFieldProps {
    placeholderText: string
    label?: string
    useSameLabelAsPlaceholder?: boolean
    isPassword?: boolean
}

export const TextInputField = ({
    placeholderText,
    label,
    useSameLabelAsPlaceholder,
    isPassword,
}: TextInputFieldProps): ReactElement => {
    const styles = {
        label: 'text-white font-medium',
        input: 'text-white pb-2 pt-1 px-2 shadow-sm',
    }

    const isDefaultTextInput = !isPassword

    return (
        <div className="flex flex-col gap-2">
            {useSameLabelAsPlaceholder && label === null && (
                <label className={styles.label}>{placeholderText}</label>
            )}

            {label !== null && <label className={styles.label}>{label}</label>}

            {isPassword && <input className={styles.input} type="password" />}

            {isDefaultTextInput && (
                <input className={styles.input} type="text" />
            )}
        </div>
    )
}

export const SubmitButton = (buttonText = 'Submit'): ReactElement => {
    return (
        <div className="m-auto w-full">
            <button className="bg-blue-700 font-mono font-bold text-neutral-100">
                {buttonText}
            </button>
        </div>
    )
}

enum SocialMedia {
    VK,
    GOOGLE,
    TWITTER,
}

interface SocialMediaIconsBlockProps {
    socialMediaIcons: SocialMedia[]
    customIconsHeight?: string | number
}

export const SocialMediaIconsBlock = ({
    socialMediaIcons,
    customIconsHeight = 'h-[2%]',
}: SocialMediaIconsBlockProps): ReactElement => {
    const styles = {
        icon: `${customIconsHeight} select-none`,
    }

    return (
        <div
            className={`flex w-full flex-row justify-around gap-[3%] ${customIconsHeight}`}
        >
            {socialMediaIcons.includes(SocialMedia.GOOGLE) && (
                <img
                    className={styles.icon}
                    src="images/social media/google.svg"
                ></img>
            )}
            {socialMediaIcons.includes(SocialMedia.VK) && (
                <img
                    className={styles.icon}
                    src="images/social media/vk.svg"
                ></img>
            )}
            {socialMediaIcons.includes(SocialMedia.TWITTER) && (
                <img
                    className={styles.icon}
                    src="images/social media/twitter.svg"
                ></img>
            )}
        </div>
    )
}

interface ContentSplitterProps {
    splitterTextAtMiddle?: string
}

export const ContentSplitter = ({
    splitterTextAtMiddle = 'OR',
}: ContentSplitterProps): ReactElement => {
    const styles = {
        hr: 'border-2 border-white',
    }

    return splitterTextAtMiddle ? (
        <div className="flex w-full flex-row gap-5">
            <hr className={styles.hr} />
            <p className="text-2xl font-black text-white">
                {splitterTextAtMiddle}
            </p>
            <hr className={styles.hr} />
        </div>
    ) : (
        <hr className={styles.hr} />
    )
}
