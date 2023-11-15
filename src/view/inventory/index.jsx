import { useEffect, useState } from "react";
import CardContent from "../../components/cardContent";

const col = [
    {field:'Id',bd:'id'},
    {field:'Nombre' ,bd:'name'},
    {field:'Costo', bd:'cost'},
    {field:'precio', bd:'price'},
    {field:'Stock', bd:'stock'}
]
    
const endpoint = 'http://localhost:8000/api/inventory'

const form = [
    {type:'number',name:'barcode',label:'Codigo'},
    {type:'text',name:'name',label:'Nombre de Producto'},
    {type:'number',name:'stock',label:'Stock'},
    {type:'number',name:'price',label:'Precio de Venta'},
    {type:'number',name:'cost',label:'Precio de Compra'},
    // {type:'file',name:'image',label:'Imagen'}
]
    function Inventory(){
    const [tableData, setTableData] = useState([]); // Estado para los datos de la tabla

  

  // Carga los datos iniciales de la tabla al montar el componente
  useEffect(() => {
    updateTableData();
  }, []);
  
    return(
        <div className="row_neg">
            <CardContent rs={{sm:12,m:12,n:4}} type="form" form={form} updateTableData={updateTableData} />
            <CardContent rs={{sm:12,m:12,n:8}} type="table" colums={col} data={tableData} />
        </div>
    )
}
export default Inventory;