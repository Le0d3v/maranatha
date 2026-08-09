import { createContext, useState } from "react";

const MaranathaContext = createContext();

const MaranathaProvider = ({ children }) => {
    const [page, setPage] = useState(0);
    return (
        <MaranathaContext.Provider value={{ page, setPage }}>
            {children}
        </MaranathaContext.Provider>
    );
};

export { MaranathaProvider };
export default MaranathaContext;
