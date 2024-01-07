import { FC } from "react";

interface IButton {
    title: string | React.ReactNode;
    handleClick: () => void;
    className?: string;
}

const Button: FC<IButton> = ({ title, handleClick, className }) => {
    return (
        <button
            className={`p-7 border-3 border-white rounded-[20px] text-white text-xl font-bold ${className}`}
            onClick={handleClick}>
            {title}
        </button>
    );
};

export { Button };
