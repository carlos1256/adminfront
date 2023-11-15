

function Tables({colums,data}){
    const deleteProduct = async (id) => {
        await axios.delete(`${endpoint}${id}`)
     }
    return(
        <table>
            <thead>
                <th>Accion</th>
            </thead>
            <tbody>
                
            </tbody>
        </table>
    )
}

export default Tables