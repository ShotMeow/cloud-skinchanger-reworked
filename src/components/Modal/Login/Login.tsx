import React, { useState } from 'react'
import Checkbox from '../../Checkbox/Checkbox'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { setToken } from '../../../store/user.slice/user.slice'
import { ICheckboxes } from '../../../pages/HomePage/Billing/Calculator/data.interface'
import Button from '../../Button/Button'
import Error from '../../Message/Message'

interface IAuth {
    login: string
    password: string
}

interface ILogin {
    setType: any
    setActive: any
}

const Login: React.FC<ILogin> = ({ setType, setActive }) => {
    const navigate = useNavigate()

    const formSchema = Yup.object().shape({
        login: Yup.string()
            .required('Это поле обязательное')
            .min(4, 'Логин должен иметь как минимум 4 символа'),
        password: Yup.string()
            .required('Это поле обязательное')
            .min(8, 'Пароль должен иметь как минимум 8 символов')
    })

    const users = useAppSelector(state => state.users.users)
    const dispatch = useAppDispatch()

    const [isRemember, setRemember] = useState<boolean>(false)

    const validationOpt = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, reset, setError, formState: { errors } } = useForm<IAuth>(validationOpt)

    const onSubmit: SubmitHandler<IAuth> = data => {
        users.forEach(user => {
            if (user.login === data['login'] && user.password === data['password']) {
                dispatch(setToken(users.indexOf(user)))
                navigate('/profile')
                setActive()
                reset()
                return
            }
        })
        return setError('password', { message: 'Аккаунт не найден' })
    }

    return (
        <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
            <div className='relative flex flex-col mt-10'>
                <input type="text" id='login' {...register('login')} autoComplete='none' placeholder='Логин' className='peer py-1 px-2 text-white placeholder-transparent text-lg bg-transparent border-b focus:outline-none border-[#4F4F4F]' />
                <label htmlFor="login" className='text-[#545454] text-sm absolute -top-6 peer-placeholder-shown:-top-0 transition-all peer-placeholder-shown:text-[#B4B4B4] peer-placeholder-shown:text-lg'>Логин</label>
                {errors.login && <Error>{errors.login?.message}</Error>}
            </div>
            <div className='relative flex flex-col mt-8 mb-16'>
                <input type="password" id='password' {...register('password')} autoComplete='none' placeholder='Пароль' className='peer py-1 px-2 text-white placeholder-transparent text-lg bg-transparent border-b focus:outline-none border-[#4F4F4F]' />
                <label htmlFor="password" className='text-[#545454] text-sm absolute -top-6 peer-placeholder-shown:-top-0 transition-all peer-placeholder-shown:text-[#B4B4B4] peer-placeholder-shown:text-lg'>Пароль</label>
                {errors.password && <Error>{errors.password?.message}</Error>}
                <a href="#" className='text-[#8F8F8F] text-sm absolute -bottom-8 right-0 transition-all hover:underline'>забыл пароль?</a>
            </div>
            <Checkbox isActive={isRemember} setActive={setRemember}>Запомнить меня</Checkbox>
            <div className='flex flex-col md:flex-row justify-between items-center my-10 gap-6'>
                <Button type='secondary'>Авторизоваться</Button>
                <Button type='link' onClick={() => setType(false)}>Зарегистрироваться</Button>
            </div>
        </form >
    )
}

export default Login