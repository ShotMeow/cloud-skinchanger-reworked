import React, { useState } from 'react'
import { BsX } from 'react-icons/bs'
import Login from './Login/Login'
import Register from './Register/Register'

const modal_image = require('../../assets/modal-image.jpg')

interface IModal {
    active: boolean
    setActive: any
}

const Modal: React.FC<IModal> = ({ active, setActive }) => {
    const [type, setType] = useState<boolean>(true)

    return (
        <div onClick={() => setActive(false)} className={'fixed z-50 left-0 top-0 flex flex-col items-center justify-center w-screen h-screen bg-black/60 transition duration-300 ease ' + (active ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none')}>
            <div className={'flex transition-all duration-700 ' + (active ? 'scale-100' : 'scale-0')} onClick={e => e.stopPropagation()}>
                <img src={modal_image} alt="Shadow Fiend" className='hidden md:block object-cover' />
                <div className='bg-[#111111] px-10 py-5'>
                    <div className='flex justify-between'>
                        <h2 className='text-white text-2xl font-semibold'>{type ? 'Авторизация' : 'Регистрация'}</h2>
                        <button className='mt-1 transition-all rounded hover:bg-[#CF2C2C]' onClick={() => setActive(false)}><BsX size={30} color='white' /></button>
                    </div>
                    {type ? (
                        <Login setType={setType} setActive={() => setActive(false)} />
                    ) :
                        <Register setType={setType} />}
                </div>
            </div>
        </div >
    )
}

export default Modal