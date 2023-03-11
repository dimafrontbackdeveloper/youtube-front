import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaUserCircle } from 'react-icons/fa'

import { IAuthFields } from '@/components/layout/header/auth-form/auth-form.interface'
import { validEmail } from '@/components/layout/header/auth-form/auth.valid'
import Button from '@/components/ui/button/Button'
import Field from '@/components/ui/field/Field'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { useOutside } from '@/hooks/useOutside'

import stylesIcon from '../icons-right/IconsRight.module.scss'

import styles from './AuthForm.module.scss'

const AuthForm: FC = () => {
	const { ref, setIsShow, isShow } = useOutside(false)

	const [type, setType] = useState<'login' | 'register'>('login')

	const { login, register: registerAction } = useActions()

	const { isLoading } = useAuth()

	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm<IAuthFields>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IAuthFields> = data => {
		if (type === 'login') login(data)
		else if (type === 'register') registerAction(data)

		location.reload()
	}

	return (
		<div className={styles.wrapper} ref={ref}>
			<button className={stylesIcon.button} onClick={() => setIsShow(!isShow)}>
				<FaUserCircle fill='#A4A4A4' />
			</button>

			{isShow && (
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<Field
						{...register('email', {
							required: 'E-mail обязателен!',
							pattern: {
								value: validEmail,
								message: 'Не валидный E-mail'
							}
						})}
						placeholder='E-mail'
						error={errors.email}
					/>{' '}
					<Field
						{...register('password', {
							required: 'Пароль обязателен',
							minLength: {
								value: 6,
								message: 'Мин. длина пароля - 6 символов'
							}
						})}
						placeholder='Пароль'
						error={errors.password}
						type='password'
					/>
					<div className='mt-5 mb-1 text-center'>
						<Button onClick={() => setType('login')}>Войти</Button>
					</div>
					<button
						className={styles.register}
						onClick={() => setType('register')}
						disabled={isLoading}
					>
						Регистрация
					</button>
				</form>
			)}
		</div>
	)
}

export default AuthForm
