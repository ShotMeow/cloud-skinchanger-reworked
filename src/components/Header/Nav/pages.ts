import { IPage } from "./pages.interface"

export const data: IPage[] = [
    {
        id: 1,
        title: 'Главная страница',
        url: '/',
        isActive: true
    },
    {
        id: 2,
        title: 'Скачать',
        url: 'download',
        isActive: false
    },
    {
        id: 3,
        title: 'Подписка',
        url: 'subscribe',
        isActive: false
    },
    {
        id: 4,
        title: 'Поддержка',
        url: 'support',
        isActive: false
    },
]