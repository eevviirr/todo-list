import { FC } from "react";

import trash from "../../assets/trash.svg";
import pencil from "../../assets/pencil.svg";

interface IPopUp {
    onDelete: () => void;
    onEdit: () => void;
    onMouseLeave?: () => void;
}

const PopUp: FC<IPopUp> = ({ onDelete, onEdit, onMouseLeave }) => {
    return (
        <div
            className='p-[30px] absolute -top-20 z-10 -right-20 bg-white rounded-[20px] shadow-2xl'
            onMouseLeave={onMouseLeave}>
            <span
                className='flex gap-5 items-center text-[#FF8989] font-semibold mb-5 cursor-pointer'
                onClick={onDelete}>
                <img src={trash} alt='' />
                Удалить
            </span>
            <span
                className='flex gap-5 items-center text-[#8B79FF] font-semibold cursor-pointer'
                onClick={onEdit}>
                <img src={pencil} alt='' />
                Изменить
            </span>
        </div>
    );
};

export { PopUp };
