
function Card({bgColor,title}){
    return(
        <div className="col_neg-3 col_neg-m-6 col_neg-sm-6">
			<div className={`bg-${bgColor} counter`}>           	 	 	
				<p>{title} <i className="fas fa-cubes"></i></p>
				<h3>contador_resumen</h3>
			</div>
		</div>
    )
}
export default Card