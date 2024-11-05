import { HTMLInputTypeAttribute } from "react";
import { useFormContext } from "react-hook-form";

type InputProps = {
    name: string;
    placeholder?: string;
    type?: HTMLInputTypeAttribute;
    defaultValue?: string;
    disabled?: boolean;
};

export const Input = ({
    placeholder = undefined,
    name,
    type,
    defaultValue = undefined,
    disabled = false,
}: InputProps) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();
    return (
        <input
            id={name}
            type={type || name}
            autoComplete={name}
            {...register(name)}
            defaultValue={defaultValue}
            className={`block w-full py-1.5 shadow-sm placeholder:text-networking-lightGray focus:ring-0 bg-networking-dark p-3 text-xs sm:leading-6 text-networking-lightGray
                ${errors[name]
                    ? "border-red-500 focus:border-red-500"
                    : `${disabled ? "border-gray-300" : "border-brand-300"
                    } focus:border-brand-600`
                }`}
            disabled={disabled}
            placeholder={placeholder}
        />
    );
};
