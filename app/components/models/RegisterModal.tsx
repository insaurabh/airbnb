'use client';
import axios from 'axios'
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState } from 'react';

import { toast } from 'react-hot-toast'

import Modal from './Model';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import Heading from '../Heading';
import Input from '../inputs/input';
import Button from '../Button';

const RegisterModal = () => {
    const registerModal = useRegisterModal()
    console.log('Register modal', registerModal);

    const [isLoading, setIsLoading] = useState(false);

    const {  register,  handleSubmit,
        formState: {
            errors
        },
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        console.log('FORM SUBMIT TRIGGERD', data);
        axios.post('/api/register', data)
        .then(() => {
          registerModal.onClose();
        })
        .catch((error) => {
          toast.error('Something went wrong');
        })
        .finally(() => {
          setIsLoading(false);
        })
      }

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading
                title="Welcome to Airbnb"
                subTitle='Create an account'
            />
            <Input
                id="email"
                label="Email"
                type="email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
              <Input
                id="name"
                label="Name"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
              <Input
                id="password"
                label="Password"
                type="password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    )
    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr />
            <Button
                outline
                label="Continue with Google"
                onClick={() => { }}
                icon={FcGoogle}
            />
              <Button
                outline
                label="Continue with Github"
                onClick={() => { }}
                icon={AiFillGithub}
            />
            <div className="text-neutral-500 text-center mt-4 font=light">
                   <div className='justify-center flex flex-row items-center gap-2'>
                        <div>Already have an account</div>
                    <div
                        onClick={registerModal.onClose}
                        className="text-neutral-800 cursor-pointer hover:underline">Login</div>
                    </div>
            </div>
        </div>
    )

    return (
        <>
            <Modal
                 disabled={isLoading}
                 isOpen={registerModal.isOpen}
                 title="Register"
                 actionLabel="Continue"
                 onClose={registerModal.onClose}
                 onSubmit={handleSubmit(onSubmit)}
                body={bodyContent}
                footer={footerContent}
            />

        </>
     )
}

export default RegisterModal