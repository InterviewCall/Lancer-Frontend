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
    <div className="component-inputField w-full py-2 rounded-md">
      <div className="component-inputField flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
        <input
          {...register(fieldName)}
          type="text"
          placeholder={placeholder}
          className="component-inputField flex-1 outline-none border-none bg-transparent text-gray-700 placeholder-gray-400"
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