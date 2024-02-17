import { useContext, useEffect } from "react"
import { Context } from "../context/provider";
import { DeleteItem } from "./icons/deleteIcon";

export const RenderSaveFilter = () => {

    const { filter, setFilter, setState, showFilters } = useContext(Context);

    useEffect(() => {
        const localData = localStorage.getItem('filter')
        setFilter(JSON.parse(localData))
    }, [])

    return (
        <div className="w-full mt-5" style={{ display: showFilters ? 'block' : 'none' }}>
            <div style={{ display: filter?.length > 0 ? 'block' : 'none' }} className="text-[1.2rem] text-[#0112317b] mb-4 font-semibold">Filtros Salvos</div>
            {filter?.map((e, index) => {
                return (
                    <>
                        <DeleteItem id={e.id} />
                        <div key={index} onClick={() => setState(e)} style={{ borderRadius: 10 }} className="mb-8 cursor-pointer text-[#fff] w-full gap-1 p-4 flex flex-col bg-[#121b2e] transition-all hover:bg-[#121b2ee3] relative ">
                            <div className="flex gap-3 w-full justify-center items-center">
                                <div className="flex gap-3 w-[50%]">
                                    <div className="font-semibold">
                                        Disciplina:
                                    </div>
                                    <div style={{ letterSpacing: -1 }} className="text-[.8rem] flex items-center">
                                        {e.selectedValue.label}
                                    </div>
                                </div>
                                <div className="flex gap-3 w-[50%] ">
                                    <div className="font-semibold">
                                        Banca:
                                    </div>
                                    <div style={{ letterSpacing: -1 }} className="text-[.8rem] flex items-center">
                                        {e.banking.length > 50 ? `${e.banking.slice(0, 45)}...` : e.banking}
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-3 w-full justify-center items-center">
                                <div className="flex w-[50%] gap-3">
                                    <div className="font-semibold">
                                        Dificuldade:
                                    </div>
                                    <div style={{ letterSpacing: -1 }} className="gap-5 text-[.8rem] flex items-center">
                                        {e?.difficulty?.map((e) => <div key={index}>{e.label}</div>)}
                                    </div>
                                </div>
                                <div className="flex w-[50%] gap-3">
                                    <div className="font-semibold">
                                        Instituição:
                                    </div>
                                    <div style={{ letterSpacing: -1 }} className="gap-5 text-[.8rem] flex items-center">
                                        {e.institution.length > 40 ? `${e.banking.slice(0, 40)}...` : e.institution}
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-3 w-full justify-center items-center">
                                <div className="flex gap-3 w-[50%]">
                                    <div className="font-semibold">
                                        Escolaridade:
                                    </div>
                                    <div style={{ letterSpacing: -1 }} className="gap-5 text-[.8rem] flex items-center">
                                        {e.education}
                                    </div>
                                </div>
                                <div className="flex gap-3 w-[50%]">
                                    <div className="font-semibold">
                                        Assunto:
                                    </div>
                                    <div style={{ letterSpacing: -1 }} className="gap-5 text-[.8rem] flex items-center">
                                        {e.subject}
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-3 w-full justify-center items-center">
                                <div className="flex gap-3 w-[50%]">
                                    <div className="font-semibold">
                                        Tipo:
                                    </div>
                                    <div style={{ letterSpacing: -1 }} className="gap-5 text-[.8rem] flex items-center">
                                        {e.type}
                                    </div>
                                </div>
                                <div className="flex gap-3 w-[50%]" />
                            </div>
                        </div>
                    </>
                )
            })}
        </div>

    )
}