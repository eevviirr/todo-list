import { FC } from "react";

import { useGetTodoByIdQuery } from "../../app/store/api/todoApi";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../shared/Button/Button";
import back from "../../assets/back.svg";

const Todo: FC = ({}) => {
    const { id } = useParams();
    const { data: todo } = useGetTodoByIdQuery(id ? id : "");
    const navigate = useNavigate();

    return (
        <section className='container pt-[50px]'>
            <header>
                <Button
                    title={
                        <div className='flex gap-3'>
                            <img src={back} alt='' className='w-7' />
                            Назад
                        </div>
                    }
                    handleClick={() => navigate(-1)}
                />
            </header>

            <div className='flex items-center justify-between mt-10 mb-10 text-white text-xl font-bold max-sm:flex-col max-sm:items-start'>
                <h2 className='text-4xl'>{todo?.title}</h2>
                <span>{todo?.status}</span>
            </div>
            <p className="text-xl font-semibold text-white">{todo?.description}</p>
        </section>
    );
};

export { Todo };
