import React from 'react'
import Button from '../../Button/Button'

const Support = () => {
    return (
        <div className="flex flex-col items-center lg:items-start lg:order-4">
            <h2 className="font-semibold text-xl mb-4">Поддержка</h2>
            <Button type='secondary'>Написать в чате</Button>
        </div>
    )
}

export default Support