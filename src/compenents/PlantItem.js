import CareScale from './CareScale'
import '../styles/PlantItem.css'


function PlantItem({ id, cover, name, water, light,price }) {
	return (
		<li key={id} className='lmj-plant-item'  >
			
			<span className='lmj-plant-item-price'>{price}€</span>
			<img className='lmj-plant-item-cover' src={cover ? cover: 'https://images.prismic.io/figaroimmo/78de4361-486f-48e1-9914-4910c6f8127d_plantes-vertes.jpg?auto=compress,format&rect=0,0,1000,667&w=720&h=480'} alt={`${name} cover`} />
			<h2 className='lmj-plant-item-name'>{name}</h2>
			<div className='lmj-plant-item-careScale'>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}



export default PlantItem