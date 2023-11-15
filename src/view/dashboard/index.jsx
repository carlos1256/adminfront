import Card from "../../components/card";
import CardContent from "../../components/cardContent";
const col = [
    {field: "id"},
    {field: "name"},
    {field: "address"},
    {field: "date"}
]
const col2 = [
    {field: "id"},
    {field: "name"}
]
const col3 = [
    {field: "id"},
    {field: "name"},
    {field: "perro"},
    {field: "pulga"}
]
const data = [

]
export default function Dashboard() {
    return(
        <>
			<div className="row_neg">
				<Card bgColor='primary_neg' title='PR1'/>
				<Card bgColor='warning_neg' title='PR2'/>
				<Card bgColor='success_neg' title='PR3'/>
				<Card bgColor='danger_neg'  title='PR4'/>
			</div>
			<div className="row_neg">
			
			<CardContent rs={{sm:12,m:12,n:8}} type="table" colums={col} data={data}/>
			<CardContent rs={{sm:12,m:12,n:4}} type="table" colums={col3} data={data}/>
				
		</div>
		<div className="row_neg">
			<CardContent rs={{sm:12,m:12,n:12}} type="table" colums={col2} data={data}/>
		</div>
        </>
    )
}