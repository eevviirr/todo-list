import { FC, FormEvent, useState } from "react";
import { TextField } from "../../shared/TextField/TextField";
import { Button } from "../../shared/Button/Button";
import {
    useAddTodoMutation,
    useEditTodoMutation,
} from "../../app/store/api/todoApi";
import { useAppDispatch } from "../../app/hooks/useAppDispatch";
import { setEdit, setOpen } from "../../app/store/slice/isOpenSlice";
import { useAppSelector } from "../../app/hooks/useAppSelectopr";

const AddForm: FC = () => {
    const [addTodoMutation] = useAddTodoMutation();
    const [editTodoMutation] = useEditTodoMutation();
    const { isEdit, data } = useAppSelector(
        (state) => state.isOpenSlice.isEdit
    );
    const [todoValue, setTodoValue] = useState({
        title: data ? data.title : "",
        status: data ? data.status : "Ожидает выполнения",
        description: data ? data.description : "",
    });

    const dispatch = useAppDispatch();
    const addTodo = (e: FormEvent) => {
        e.preventDefault();
        try {
            if (isEdit) {
                editTodoMutation({
                    body: {
                        description: todoValue.description,
                        status: todoValue.status,
                        title: todoValue.title,
                    },
                    id: data ? data.id : "",
                }).then(() => {
                    dispatch(setOpen(false));
                    dispatch(setEdit({ isEdit: false, data: null }));
                });
            } else {
                addTodoMutation({
                    description: todoValue.description,
                    status: todoValue.status,
                    title: todoValue.title,
                }).then(() => {
                    dispatch(setOpen(false));
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <form
            onSubmit={addTodo}
            className='p-10 bg-white rounded-[20px] grid grid-cols-2 gap-10 max-sm:grid-cols-1'>
            <TextField
                setValue={(e) =>
                    setTodoValue({ ...todoValue, title: e.target.value })
                }
                value={todoValue.title}
                className='border-black text-black'
                placeholder='Заголовок'
            />
            <select
                className='rounded-[20px] outline-none border-3 border-black px-10 text-xl font-semibold'
                onChange={(e) =>
                    setTodoValue({ ...todoValue, status: e.target.value })
                }>
                <option hidden>{data ? data.status : "статус"}</option>
                <option>Ожидает выполнения</option>
                <option>В процессе выполнения</option>
                <option>Выполнено</option>
            </select>

            <textarea
                value={todoValue.description}
                placeholder='Описание'
                className='col-span-2 resize-none rounded-[20px] h-[300px] bg-transparent border-3 border-black outline-none p-10 text-xl font-semibold max-sm:col-span-1'
                onChange={(e) =>
                    setTodoValue({ ...todoValue, description: e.target.value })
                }></textarea>
            <Button
                title={isEdit ? "Изменить" : "Добавить"}
                className='!border-black !text-black col-span-2 max-sm:col-span-1'
                handleClick={() => {}}
            />
        </form>
    );
};

export { AddForm };
