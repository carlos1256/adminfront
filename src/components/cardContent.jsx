import Form from "./form"
import Tables from "./tables"
import CalcResult from "./calcresult"
function CardContent({rs,colums,type,form,data,updateTableData,da,pv,ty}){
    return(
        <div className={`col_neg-${rs.n} col_neg-m-${rs.m} col_neg-sm-${rs.sm} `}>
            <div className="card_neg">
                <div className="card-header_neg">
                    <h3 className="t text-center font-semibold text-xl">Calculos</h3>
                    <i className="fas fa-ellipsis-h"></i>
                </div>
                <div className="card-content_neg">
                    {
                     type==='table' || type==='Table' ?<Tables  colums={colums} data={data}></Tables> : ''  
                    }
                    {
                     type==='form' || type==='Form' ?<Form form={form} updateTableData={updateTableData}/> : ''  
                    }
                    {
                     type==='calc' || type==='Calc' ? <CalcResult da={da} pv={pv}  ty={ty}/> : ''  
                    }
                </div>
            </div>
        </div>
    )
}

export default CardContent