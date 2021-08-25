import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'
import '../styles/CareScale.css'

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const rangeString = 
		scaleValue === 1 ?(' peu '
		):(
			scaleValue ===2?(' modérement '
			):(
				scaleValue ===3?('beaucoup'
				):(' erreur ')
			)
		)
		const scaleTypeTranslate = 
		careType === 'light' ?(' de lumiere.  '
		):( " d'eau. "
		)
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	return (
		<div className='lmj-plant-carescale' onClick={()=>handleClick(rangeString,scaleTypeTranslate)}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()} >{scaleType}</span>
					
				) : null
			)}
		</div>
	)

	
}
function handleClick(e,a) {
	console.log('✨ Il lui faut :', e,a)
}



export default CareScale