import { ReactElement } from 'react'
import { useNavigate } from 'react-router'

const NavigationPanel = (): ReactElement => {
    const navigate = useNavigate()

    const styles = {
        bottomIcon: 'select-none w-32',
    }

    return (
        <div
            className={
                'max-laptop:w-[500px] flex w-full items-center justify-around py-2'
            }
        >
            <div className={'h-fit'} onClick={() => navigate('/')}>
                <img
                    src="images/navigation-bar/home.png"
                    className={styles.bottomIcon}
                    alt="open home"
                />
            </div>
            <div className={'h-fit'} onClick={() => navigate('/account')}>
                <img
                    src="images/navigation-bar/account.png"
                    className={styles.bottomIcon}
                    alt="open account"
                />
            </div>
            <div className={'h-fit'} onClick={() => navigate('/settings')}>
                <img
                    src="images/navigation-bar/settings.png"
                    className={styles.bottomIcon}
                    alt="open account"
                />
            </div>
        </div>
    )
}

export default NavigationPanel
