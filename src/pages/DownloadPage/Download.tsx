import Button from "../../components/Button/Button"
import { AiFillWindows, AiFillApple } from 'react-icons/ai'

const app_img = require('../../assets/application.png')

const Download = () => {
    return (
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 mt-10 mb-60">
            <div className="flex flex-col gap-5 text-center px-2 lg:px-0 lg:w-1/2">
                <h2 className="font-bold text-3xl">Попробуй бесплатно</h2>
                <p>При первом использовании нашего Скинчейнджера вы получаете 7 дней пробного периода и доступ к основным функциям приложенreия. Это значит, что вы сможете опробовать функционал нашего приложения абсолютно бесплатно. Наслаждайтесь!</p>
                <div className="flex items-center gap-5 flex-col lg:flex-row lg:items-start">
                    <div className="flex flex-col items-center">
                        <Button type="secondary"><AiFillWindows size={20} /> Windows</Button>
                        <p className="mt-2 text-[#8A8A8A]">windows 7, 8 и выше</p>
                    </div>
                    <Button type="secondary"><AiFillApple size={20} /> MacOS</Button>
                </div>
            </div>
            <div className="relative">
                <img src={app_img} alt="Application" className="relative z-20 transition duration-500 ease hover:scale-105" />
                <svg className="hidden lg:block absolute -bottom-5 -right-5 z-10" width="296" height="243" viewBox="0 0 296 243" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect width="296" height="243" fill="url(#pattern0)" />
                    <defs>
                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_4_515" transform="translate(-0.000686813) scale(0.00300713 0.003663)" />
                        </pattern>
                        <image id="image0_4_515" width="333" height="273" xlinkHref="data:image/png;base64,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" />
                    </defs>
                </svg>
            </div>
        </div>
    )
}

export default Download