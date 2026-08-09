import { useContext } from "react";
import MaranathaContext from "../context/MaranathaProvider";

const useMaranatha = () => {
    return useContext(MaranathaContext);
};

export default useMaranatha;
