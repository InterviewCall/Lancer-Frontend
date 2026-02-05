import { useFormContext } from 'react-hook-form';

export default function InputField({
  placeholder,
  icon,
  fieldName,
}: {
  placeholder: string;
  icon: React.ReactNode;
  fieldName: string;
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="component-inputField w-full py-1 rounded-xl ">
      <div className="component-inputField flex items-center bg-white  px-6 py-2 shadow-sm rounded-2xl">
        <input
          {...register(fieldName)}
          type="text"
          placeholder={placeholder}
          className="component-inputField flex-1 outline-none border-none bg-transparent text-gray-700 placeholder-gray-400 h-12 rounded-2xl"
        />
        {icon}
      </div>
      {errors[fieldName] && (
        <p className="component-inputField text-red-500 text-xs">
          {errors[fieldName].message?.toString()}
        </p>
      )}
    </div>
  );
}