import React, { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { SubmitHandler, useForm } from "react-hook-form"
import Checkbox from '../../Checkbox/Checkbox'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { addUser } from '../../../store/user.slice/user.slice'
import Button from '../../Button/Button'
import Error from '../../Message/Message'


interface IRegUser {
    login: string
    email: string
    password: string
    repeat_password: string
}

interface IRegister {
    setType: any
}

const Register: React.FC<IRegister> = ({ setType }) => {
    const dispatch = useAppDispatch()
    const users = useAppSelector(state => state.users.users)
    const formSchema = Yup.object().shape({
        login: Yup.string()
            .required('Это поле обязательное')
            .min(4, 'Логин должен иметь как минимум 4 символа'),
        email: Yup.string()
            .required('Это поле обязательное')
            .matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, 'E-mail введен не верно'),
        password: Yup.string()
            .required('Это поле обязательное')
            .min(8, 'Пароль должен содержать как минимум 8 символов'),
        repeat_password: Yup.string()
            .required('Это поле обязательное')
            .oneOf([Yup.ref('password')], 'Пароли не совпадают'),
    })

    const validationOpt = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, reset, setError, formState: { errors } } = useForm<IRegUser>(validationOpt)
    const [isConfirm, setConfirm] = useState(false)

    const onSubmit: SubmitHandler<IRegUser> = data => {
        if (users.find(user => user.login === data.login))
            return setError('login', { message: 'Данный логин уже занят' })
        if (isConfirm) {
            dispatch(addUser(data))
            setType(true)
            reset()
            return
        }
        return setError('repeat_password', { message: 'Подтвердите соглашение' })
    }

    return (
        <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
            <div className='relative flex flex-col mt-10'>
                <input type="text" id='login' {...register('login')} autoComplete='none' placeholder='Логин' className='peer py-1 text-white placeholder-transparent text-lg bg-transparent border-b focus:outline-none border-[#4F4F4F]' />
                <label htmlFor="login" className='text-[#545454] text-sm absolute -top-6 peer-placeholder-shown:-top-0 transition-all peer-placeholder-shown:text-[#B4B4B4] peer-placeholder-shown:text-lg'>Логин</label>
                {errors.login && <Error>{errors.login.message}</Error>}
            </div>
            <div className='relative flex flex-col mt-16'>
                <input type="email" id='email' {...register('email')} autoComplete='none' placeholder='E-mail' className='peer py-1 text-white placeholder-transparent text-lg bg-transparent border-b focus:outline-none border-[#4F4F4F]' />
                <label htmlFor="email" className='text-[#545454] text-sm absolute -top-6 peer-placeholder-shown:-top-0 transition-all peer-placeholder-shown:text-[#B4B4B4] peer-placeholder-shown:text-lg'>E-mail</label>
                {errors.email && <Error>{errors.email.message}</Error>}
            </div>
            <div className='relative flex flex-col mt-16'>
                <input type="password" id='password' {...register('password')} autoComplete='none' placeholder='Пароль' className='peer py-1 text-white placeholder-transparent text-lg bg-transparent border-b focus:outline-none border-[#4F4F4F]' />
                <label htmlFor="password" className='text-[#545454] text-sm absolute -top-6 peer-placeholder-shown:-top-0 transition-all peer-placeholder-shown:text-[#B4B4B4] peer-placeholder-shown:text-lg'>Пароль</label>
                {errors.password && <Error>{errors.password.message}</Error>}
            </div>
            <div className='relative flex flex-col mt-16'>
                <input type="password" id='repeat-password' {...register('repeat_password')} autoComplete='none' placeholder='Подтвердите пароль' className='peer py-1 text-white placeholder-transparent text-lg bg-transparent border-b focus:outline-none border-[#4F4F4F]' />
                <label htmlFor="repeat-password" className='text-[#545454] text-sm absolute -top-6 peer-placeholder-shown:-top-0 transition-all peer-placeholder-shown:text-[#B4B4B4] peer-placeholder-shown:text-lg'>Подтвердите пароль</label>
                {errors.repeat_password && <Error>{errors.repeat_password.message}</Error>}
            </div>
            <div className='mt-10'>
                <Checkbox isActive={isConfirm} setActive={setConfirm}>Я соглашаюсь с <span className='text-[#CF2C2C] underline'>лицензионным соглашением</span></Checkbox>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center my-6 gap-6'>
                <Button type='secondary'>Регистрация</Button>
                <Button type='link' onClick={() => setType(true)}>У меня есть аккаунт</Button>
            </div>
        </form >
    )
}

export default Register