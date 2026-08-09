import React from "react";
import useMaranatha from "../hooks/useMaranatha";

export default function Header() {
    const { page, setPage } = useMaranatha();
    return (
        <>
            <div className="text-blue-500 text-center">Header Iglesia</div>
            <Enlace page={0} setPage={setPage} />
            <Enlace page={1} setPage={setPage} />
            <Enlace page={2} setPage={setPage} />
        </>
    );
}

const Enlace = ({ page, setPage }) => {
    return (
        <button
            onClick={() => setPage(page)}
            className="bg-blue-500 text-white px-4 py-2 rounded m-2"
        >
            {page === 0 ? "Inicio" : page === 1 ? "Biblia" : "Predicas"}
        </button>
    );
};
