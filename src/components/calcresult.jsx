

function CalcResult({da,pv,ty}){
    
    let QtyTotal = da * ty
    let SubTotal = QtyTotal * pv
    let iva =(pv * 0.16)
    let CostAndIva =  iva + pv
    let CostForUni = CostAndIva / QtyTotal
    let Price = ((CostAndIva * 0.30) + CostAndIva) / QtyTotal
    let gana = (Price - CostForUni)
    let ganaTo = (gana * QtyTotal)
    return(
            <div className="flex flex-col gap-y-3 mt-3">
                <div>Iva 16%:      {iva.toFixed(2)}     </div> 
                <div>Precio de compra con iva total: {CostAndIva.toFixed(2)} Bs</div>
                <div>Precio de compra con iva * unidad: {CostForUni.toFixed(2)} BS</div>
                <div>Precio de venta:   {Price.toFixed(2)}  BS</div>
                <div>Ganancia * unidad:  {gana.toFixed(2)} BS </div>
                <div>Ganancia total:   {ganaTo.toFixed(2)}    BS</div>
            </div>
    )

}

export  default CalcResult;