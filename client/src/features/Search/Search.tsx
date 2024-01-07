import { FC, FormEvent } from "react";

import { TextField } from "../../shared/TextField/TextField";
import searchIcon from "../../assets/search.svg";

interface ISearch {
    value: string;
    setValue: (n: any) => void;
}

const Search: FC<ISearch> = ({ setValue, value }) => {
    return (
        <label className='relative col-span-3 max-xl:col-span-2 max-lg:col-span-1'>
            <img
                src={searchIcon}
                alt=''
                className='absolute right-7 top-1/2 -translate-y-1/2 border-l-3 border-l-white pl-7 '
            />
            <TextField
                setValue={(e: FormEvent<HTMLInputElement>) =>
                    setValue(e.currentTarget.value)
                }
                value={value}
                className='pr-28 placeholder:text-white/50'
                placeholder='Поиск задач'
            />
        </label>
    );
};

export { Search };
