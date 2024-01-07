import { FC, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { PopUp } from "../../features/PopUp/PopUp";

import { motion } from "framer-motion";
import { useDeleteTodoMutation } from "../../app/store/api/todoApi";
import { useAppDispatch } from "../../app/hooks/useAppDispatch";
import { setEdit, setOpen } from "../../app/store/slice/isOpenSlice";

interface ITodoCard {
    title: string;
    description: string;
    id: string;
    status: string;
}

const TodoCard: FC<ITodoCard> = ({ description, id, title, status }) => {
    const [openPopUp, setOpenPopUp] = useState(false);
    const [deleteTodo] = useDeleteTodoMutation();
    const DeleteTodo = () => {
        deleteTodo(id);
    };
    const dispatch = useAppDispatch();

    const descrRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        const descr: HTMLParagraphElement = descrRef.current!;
        const title: HTMLSpanElement = titleRef.current!;

        const words = descr.innerText;
        const limit = words.slice(0, 140);
        if (limit.length < words.length) {
            descr.innerText = limit + "...";
        }

        const wordsTitle = title.innerText;
        const limitTitle = wordsTitle.slice(0, 20);
        if (limitTitle.length < wordsTitle.length) {
            title.innerText = limitTitle + "...";
        }
    }, []);

    return (
        <div className='relative'>
            <motion.div
                initial={{
                    scale: 0,
                }}
                animate={{
                    scale: openPopUp ? 1 : 0,
                }}
                className='relative z-50'>
                <PopUp
                    onDelete={DeleteTodo}
                    onEdit={() => {
                        dispatch(
                            setEdit({
                                data: { description, id, title, status },
                                isEdit: true,
                            })
                        );
                        dispatch(setOpen(true));
                    }}
                    onMouseLeave={() => setOpenPopUp(false)}
                />
            </motion.div>
            <span className={`block text-white font-bold pl-2 mb-2z`}>
                {status}
            </span>

            <Link
                to={`todo/${id}`}
                className='block max-w-[365px] min-w-[300px] w-full min-h-[300px] border-3 border-white rounded-[20px] overflow-hidden relative'>
                <div className='w-full h-[80px] bg-white p-6 text-xl font-bold flex justify-between items-center cursor-pointer'>
                    <span ref={titleRef}>{title}</span>

                    <div
                        className='flex gap-1 cursor-pointer h-full items-center p-2 bg-black/10 rounded-[10px]'
                        onClick={(e) => {
                            e.preventDefault();
                            setOpenPopUp(!openPopUp);
                        }}>
                        <div className='rounded-full w-1 h-1 bg-black/50'></div>
                        <div className='rounded-full w-1 h-1 bg-black/50'></div>
                        <div className='rounded-full w-1 h-1 bg-black/50'></div>
                    </div>
                </div>
                <p
                    ref={descrRef}
                    className='p-6 text-xl font-semibold text-white '>
                    {description}
                </p>
            </Link>
        </div>
    );
};

export { TodoCard };
