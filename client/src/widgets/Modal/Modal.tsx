import { FC } from "react";
import { useAppDispatch } from "../../app/hooks/useAppDispatch";
import { setEdit, setOpen } from "../../app/store/slice/isOpenSlice";

interface IModal {
    children: React.ReactNode;
}

const Modal: FC<IModal> = ({ children }) => {
    const dispatch = useAppDispatch();
    return (
        <div
            className='p-[25px] fixed top-0 left-0 w-full h-full bg-black/50 z-50 flex justify-center items-center'
            onClick={() => {
                dispatch(setEdit({ isEdit: false, data: null }));
                dispatch(setOpen(false));
            }}>
            <div onClick={(e) => e.stopPropagation()}>{children}</div>
        </div>
    );
};

export { Modal };
