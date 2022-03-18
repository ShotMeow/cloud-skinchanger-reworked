import data from "./data"
import Tariff from "./Tariff/Tariff"
import { useState } from "react";
import Checkbox from "../../../../components/Checkbox/Checkbox";
import { ITariff } from "./data.interface";
import Button from "../../../../components/Button/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper"
import "swiper/css"
import "swiper/css/pagination"
import "./swiper.config.css"

const Tariffs = () => {
    const [tariffs, setTariffs] = useState<ITariff[]>(data)
    const [check, setCheck] = useState<boolean>(true)

    const setActive = (id: number) => {
        const copy = [...tariffs]
        copy.forEach(tariff => {
            if (tariff.id === id)
                tariff.isActive = true
            else
                tariff.isActive = false
        })
        setTariffs(copy)
    }

    const params: object = {
        slidesPerView: 1,
        breakpoints: {
            640: {
                slidesPerView: 2
            },
            1020: {
                slidesPerView: 3
            }
        }
    }

    return (
        <div className="container mx-auto">
            <h2 className="text-2xl text-center font-bold">Выбери готовый тариф </h2>
            <div>
                <Swiper className="xl:hidden" pagination={{
                    dynamicBullets: true,
                }}
                    modules={[Pagination]}
                    {...params}
                >
                    {tariffs.map(tariff =>
                        <SwiperSlide key={tariff.id}><Tariff setActive={setActive} id={tariff.id} title={tariff.title} cost={tariff.cost} duration={tariff.duration} discount={tariff.discount} standard_skins={tariff.standard_skins} custom_skins={tariff.custom_skins} friends_see={tariff.friends_see} isActive={tariff.isActive} /></SwiperSlide>
                    )}
                </Swiper>
                <div className="hidden xl:flex justify-center 2xl:gap-20">
                    <div className="mt-24 rounded-xl py-9 font-bold flex flex-col gap-7 items-start text-xl">
                        <p className="mt-3">Стоимость <br /> подписки</p>
                        <p className="mt-4">Длительность</p>
                        <p className="mt-5">Скидка</p>
                        <p className="mt-5">Стандартные <br /> скины и модели</p>
                        <p>Кастомные <br /> скины и модели</p>
                        <p className="">Возможность видеть <br /> скины друг друга</p>
                    </div>
                    <div className="flex">
                        {tariffs.map(tariff =>
                            <Tariff setActive={setActive} key={tariff.id} id={tariff.id} title={tariff.title} cost={tariff.cost} duration={tariff.duration} discount={tariff.discount} standard_skins={tariff.standard_skins} custom_skins={tariff.custom_skins} friends_see={tariff.friends_see} isActive={tariff.isActive} />
                        )}
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-10 items-center">
                <Checkbox setActive={() => setCheck(!check)} isActive={check}>Соглашаюсь с <span className="text-[#CF2C2C] underline">лицензионным договором</span><br /> и продлением подписки</Checkbox>
                <Button type="primary">Продолжить</Button>
            </div>
            <h3 className="uppercase text-xl font-bold text-center my-10">Или</h3>
            <h3 className="text-xl font-bold text-center my-10">Подбери удобный план</h3>
        </div >
    )
}

export default Tariffs