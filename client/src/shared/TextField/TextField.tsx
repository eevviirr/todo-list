import { FC } from "react";
import style from "./TextField.module.css";

interface ITextField {
    value: string;
    setValue: (n: any) => void;
    className?: string;
    placeholder?: string;
}

const TextField: FC<ITextField> = ({
    value,
    setValue,
    className,
    placeholder,
}) => {
    return (
        <input
            type='text'
            className={`${style.input} ${className}`}
            value={value}
            placeholder={placeholder}
            onChange={setValue}
        />
    );
};

export { TextField };
