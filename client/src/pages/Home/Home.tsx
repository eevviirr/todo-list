import { FC } from "react";

import { TodoCard } from "../../entities/TodoCard/TodoCard";
import { useGetTodosQuery } from "../../app/store/api/todoApi";
import { Modal } from "../../widgets/Modal/Modal";
import { AddForm } from "../../widgets/AddForm/AddForm";
import { useAppSelector } from "../../app/hooks/useAppSelectopr";
import { useAppDispatch } from "../../app/hooks/useAppDispatch";
import { setOpen } from "../../app/store/slice/isOpenSlice";

const Home: FC = ({}) => {
    const search = useAppSelector((state) => state.searchSlice.search);
    const { data, isFetching } = useGetTodosQuery(search);
    const isOpen = useAppSelector((state) => state.isOpenSlice.isOpen);
    const dispatch = useAppDispatch();
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            dispatch(setOpen(false));
        }
    });
    return (
        <>
            {isOpen && (
                <Modal>
                    <AddForm />
                </Modal>
            )}
            {isFetching ? (
                <section className='container flex justify-center pt-10 text-white font-bold text-xl'>
                    <span>Loading...</span>
                </section>
            ) : data ? (
                <section className='container pt-10 grid grid-cols-4 gap-5 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 justify-items-center'>
                    {data?.map(({ description, _id, status, title }) => (
                        <TodoCard
                            key={_id}
                            description={description}
                            id={_id}
                            title={title}
                            status={status}
                        />
                    ))}
                </section>
            ) : (
                <section className='flex justify-center text-2xl font-bold text-white pt-10'>
                    У вас пока нет задач
                </section>
            )}
        </>
    );
};

export { Home };
