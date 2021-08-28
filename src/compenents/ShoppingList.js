import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import Categories from './Categories'
import '../styles/ShoppingList.css'
import { useState } from 'react'

function ShoppingList({ cart, updateCart }) {

	const [activeCategory, setActiveCategory] = useState('')

	function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	function plantListAffichage(){
			return (
				plantList.map(({ id, cover, name, water, light, price, category }) => ((activeCategory===category||!activeCategory)?(
				<div key={id} className='lmj-plant-list-itemButton'>
					<PlantItem
						cover={cover}
						name={name}
						water={water}
						light={light}
						price={price}
					/>
					<button className='lmj-plant-list-button' onClick={() => addToCart(name, price)}>+1</button>
				</div>):(null)
				))
			)
		}

	return (
		<div className='lmj-shopping-list'>
			<Categories
				plantList={plantList}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>
	
			<ul className='lmj-plant-list'>
				{plantListAffichage()}
			</ul>
		</div>
	)
}

export default ShoppingList