type sub_type = 'Обычная' | 'Weekend'

export interface ITariff {
    id: number
    user_id: number
    type: sub_type
    duration: number
    custom: boolean
    friend_list: boolean
}