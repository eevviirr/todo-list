import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import { Header } from "../../widgets/Header/Header";
import { Todo } from "../../pages/Todo/Todo";

const AppRoutes: FC = ({}) => {
    return (
        <Routes>
            <Route element={<Header />}>
                <Route path='/' element={<Home />} />
            </Route>
            <Route path='/todo/:id' element={<Todo />} />
        </Routes>
    );
};

export { AppRoutes };
