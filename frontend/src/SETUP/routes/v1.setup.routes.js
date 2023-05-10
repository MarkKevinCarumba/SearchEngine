import { Main } from "SETUP/pages/lib.setup.pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const VersionAlpha = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Main />} />
            </Routes>
        </BrowserRouter>
    );
};
export default VersionAlpha;