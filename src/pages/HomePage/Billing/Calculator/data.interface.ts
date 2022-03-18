interface IRadios {
    id: number
    title: string
    isActive: boolean
}

interface ICheckboxes extends IRadios { }

export type { IRadios, ICheckboxes }