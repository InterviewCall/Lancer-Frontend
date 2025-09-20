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
    <div className="component-landingPage-HeroSectionForm w-full h-full  items-center justify-center flex flex-col bg-teal-50 p-5 rounded-2xl">
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
            type="checkbox"
            {...methods.register('newsLetter')}/> 
            <span className='m-3 text-xs text-gray-400'>আমি এই নম্বরে SMS এবং WhatsApp যোগাযোগ গ্রহণ করতে সম্মত আছি</span>
          <button type="submit" className="component-landingPage-HeroSectionForm mt-2 p-2 w-full rounded-md bg-yellow-400">
            Book your trial
          </button>
        </form>
      </FormProvider>
    </div>
  );
}