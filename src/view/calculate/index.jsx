import CardContent from "../../components/cardContent";
import { useState } from "react";

function Calculate(){
    const [cost, setCost] = useState(1);
    const [type, setType] = useState(1);
    const [qty, setQty] = useState(1);
    return(
        <div className="flex w-screen bg-red-800">
            <div className='w-1/2 p-8 bg-slate-200'>
                <div className="">
                    <div className="">
                        <h3>Calcular Precio de Venta</h3>
                        <i className="fas fa-ellipsis-h"></i>
                    </div>
                    
                    <div className="mt-4">
                        <div className="form-group">
                            <label className="Control-label">Cantidad:</label>
                            <input
                            type="number"
                            value={qty}
                            onChange={(e) => setQty(parseInt(e.target.value))}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />
                        </div>
                        <div className="mt-4">
                            <label  className="Control-label">Tipo de Empaque:</label>
                            <input
                            type="number"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />        
                        </div>
                        <div className="mt-4">
                            <label  className="Control-label">Precio de compra:</label>
                            <input
                            type="number"
                            value={cost}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            onChange={(e) => setCost(parseFloat(e.target.value))}
                            />
                        </div>
                    </div>
                </div>    
            </div>
            <div className="w-1/2 bg-blue-400 p-8">
                <CardContent rs={{sm:12,m:12,n:7}} type='calc' da={qty} pv={cost} ty={type}/>
            </div>
        </div>
        )
        
    }

export default Calculate;