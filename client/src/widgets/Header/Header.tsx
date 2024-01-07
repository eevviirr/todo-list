import { FC, useState } from "react";
import { Search } from "../../features/Search/Search";
import { Outlet } from "react-router-dom";
import { Button } from "../../shared/Button/Button";
import { useAppDispatch } from "../../app/hooks/useAppDispatch";
import { setOpen } from "../../app/store/slice/isOpenSlice";
import { setSearch } from "../../app/store/slice/searchSlice";

const Header: FC = ({}) => {
    const [searchValue, setSearchValue] = useState("");
    const dispatch = useAppDispatch();
    dispatch(setSearch(searchValue));
    return (
        <>
            <header className='container pt-[50px] grid grid-cols-4 gap-10 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1'>
                <Search setValue={setSearchValue} value={searchValue} />
                <Button
                    handleClick={() => dispatch(setOpen(true))}
                    title='Добавить задачу'
                />
            </header>
            <Outlet />
        </>
    );
};

export { Header };
