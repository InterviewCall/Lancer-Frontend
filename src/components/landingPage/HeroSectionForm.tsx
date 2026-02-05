'use client' ;

import { zodResolver } from '@hookform/resolvers/zod';
import { User } from 'lucide-react';
import { FormProvider, useForm } from 'react-hook-form';
import z from 'zod';

import { HeroSectionFormSchema } from '@/validators/heroSectionFormSchema';

import InputField from '../InputField';

type HeroSectionFormType = z.infer<typeof HeroSectionFormSchema>;


export default function HeroSectionForm() {
  const methods = useForm<HeroSectionFormType>({
    mode: 'onChange',
    reValidateMode: 'onBlur',
    resolver: zodResolver(HeroSectionFormSchema),
    defaultValues: {
      newsLetter: false,
    }
  });

  const { handleSubmit } = methods;
  const submitFn = (data: HeroSectionFormType) => {
    console.log(data);
  };
  return (
    <div className="component-landingPage-HeroSectionForm w-full sm:w-9/10 h-full shadow-2xl items-center justify-center flex flex-col bg-teal-50 p-5 rounded-2xl">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(submitFn)} className='w-full'>
          <InputField
            placeholder="Program"
            icon={<User className="w-5 h-5 text-gray-400" />}
            fieldName="program"
          />
          <InputField
            placeholder="Last Name"
            icon={<User className="w-5 h-5 text-gray-400" />}
            fieldName="fullName"
          />
          <InputField
            placeholder="Email"
            icon={<User className="w-5 h-5 text-gray-400" />}
            fieldName="email"
          />
          <InputField
            placeholder="Phone"
            icon={<User className="w-5 h-5 text-gray-400" />}
            fieldName="phone"
          />
          < input
            className='mt-6'
            type="checkbox"
            {...methods.register('newsLetter')}/> 
            <span className='m-3 text-xs text-gray-400 '>I agree to receive communication via SMS and WhatsApp.</span>
          <button type="submit" className="component-landingPage-HeroSectionForm mt-2 p-2 w-full  bg-yellow-300 hover:cursor-pointer hover:bg-yellow-500 font-bold rounded-xl">
            Book a free demo class
          </button>
        </form>
      </FormProvider>
    </div>
  );
}