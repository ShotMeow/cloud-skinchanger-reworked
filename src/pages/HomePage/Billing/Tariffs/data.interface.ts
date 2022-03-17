export interface ITariff {
    id: number
    title: string
    cost: number
    duration: number
    discount: number
    standard_skins: boolean
    custom_skins: boolean
    friends_see: boolean
    isActive: boolean
}