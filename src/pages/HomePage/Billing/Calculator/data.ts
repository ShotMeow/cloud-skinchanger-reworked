import { ICheckboxes, IRadios } from "./data.interface";

const radiosData: IRadios[] = [
    {
        id: 1,
        title: 'Обычная',
        isActive: true
    },
    {
        id: 2,
        title: 'Weekend (праздники и выходные)',
        isActive: false
    }
]

const checkboxesData: ICheckboxes[] = [
    {
        id: 1,
        title: 'Кастомные скины и модели',
        isActive: false
    },
    {
        id: 2,
        title: 'Возможность видеть скины друг друга',
        isActive: false
    }
]

export { radiosData, checkboxesData }