import Button from "../../../components/Button/Button"

const hero_img = require('../../../assets/hero.png')
const app_img = require('../../../assets/application.png')

const Main = () => {
    return (
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5 items-center container mx-auto p-4 text-white">
            <div className="relative">
                <img src={hero_img} alt="Legion Commander" className="mx-auto relative z-20" />
                <svg className="hidden lg:block absolute top-0 left-0 z-10" width="296" height="243" viewBox="0 0 296 243" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect width="296" height="243" fill="url(#pattern0)" />
                    <defs>
                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_4_515" transform="translate(-0.000686813) scale(0.00300713 0.003663)" />
                        </pattern>
                        <image id="image0_4_515" width="333" height="273" xlinkHref="data:image/png;base64,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" />
                    </defs>
                </svg>

            </div>
            <div className="flex flex-col gap-5 items-start mt-5">
                <h2 className="text-2xl font-bold">Cloud <span className="text-[#CF2C2C]">Skinchanger</span> - инновационный инструмент по смене скинов <span className="text-[#CF2C2C]">Dota 2</span>.</h2>
                <p className="text-lg">Хватит тратить огромные деньги на покупку понравившейся вещи на героя, благодаря нашему сервису ты сможешь получить абсолютно все скины, которые только есть в игре.</p>
                <Button type="secondary">Попробовать бесплатно</Button>
            </div>
            <div className="flex flex-col text-lg gap-3 items-start mt-5">
                <h3 className="text-xl font-bold">О нашей <span className="text-[#CF2C2C]">программе</span></h3>
                <p>Мы работаем по принципу подписки. Покупаешь подписку и для тебя открыты все скины и даже больше. Неправда ли дешевле?</p>
                <p className="font-semibold">Удобный интерфейс, полная безопасность, техническая поддержка 24/7</p>
            </div>
            <div className="mt-6">
                <img src={app_img} alt="Application" className="transition duration-500 ease hover:scale-105" />
            </div>
        </div>
    )
}

export default Main