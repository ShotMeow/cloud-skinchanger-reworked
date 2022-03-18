import { ITariff } from "./data.interface";

const price = 40

const data: ITariff[] = [
    {
        id: 1,
        title: 'Пробный',
        cost: 35,
        duration: 1,
        discount: 0,
        standard_skins: true,
        custom_skins: false,
        friends_see: false,
        isActive: false
    },
    {
        id: 2,
        title: 'Базовый',
        cost: 240,
        duration: 7,
        discount: 0,
        standard_skins: true,
        custom_skins: true,
        friends_see: false,
        isActive: false
    },
    {
        id: 3,
        title: 'Стандарт',
        cost: 460,
        duration: 14,
        discount: 0,
        standard_skins: true,
        custom_skins: true,
        friends_see: false,
        isActive: false
    },
    {
        id: 4,
        title: 'Профи',
        cost: 640,
        duration: 20,
        discount: 0,
        standard_skins: true,
        custom_skins: true,
        friends_see: true,
        isActive: false
    },
    {
        id: 5,
        title: 'Премиум',
        cost: 1850,
        duration: 60,
        discount: 0,
        standard_skins: true,
        custom_skins: true,
        friends_see: true,
        isActive: false
    },
]

data.forEach(tariff => {
    tariff.discount = Math.round(((price * tariff.duration) - tariff.cost) / (price * tariff.duration) * 100)
})

export default data
export { price }