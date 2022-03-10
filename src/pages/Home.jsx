import React from 'react';
import { Navbar } from '@components/Navbar';
import { Item } from '@components/Item';

let items = [
  {
    name: "Bike",
    price: 120,
  },
  {
    name: "Phone",
    price: 300,
  },
  {
    name: "Refrigerator",
    price: 500,
  },
  {
    name: "Bike",
    price: 120,
  },
  {
    name: "Phone",
    price: 300,
  },
  {
    name: "Refrigerator",
    price: 500,
  },
  {
    name: "Bike",
    price: 120,
  },
  {
    name: "Phone",
    price: 300,
  },
  {
    name: "Refrigerator",
    price: 500,
  },
  {
    name: "Bike",
    price: 120,
  },
  {
    name: "Phone",
    price: 300,
  },
  {
    name: "Refrigerator",
    price: 500,
  },
  {
    name: "Bike",
    price: 120,
  },
  {
    name: "Phone",
    price: 300,
  },
  {
    name: "Refrigerator",
    price: 500,
  },
  {
    name: "Bike",
    price: 120,
  },
  {
    name: "Phone",
    price: 300,
  },
  {
    name: "Refrigerator",
    price: 500,
  },
  {
    name: "Bike",
    price: 120,
  },
  {
    name: "Phone",
    price: 300,
  },
  {
    name: "Refrigerator",
    price: 500,
  },
  {
    name: "Bike",
    price: 120,
  },
  {
    name: "Phone",
    price: 300,
  },
  {
    name: "Refrigerator",
    price: 500,
  },
  {
    name: "Bike",
    price: 120,
  },
  {
    name: "Phone",
    price: 300,
  },
  {
    name: "Refrigerator",
    price: 500,
  }
]

const Home = () => {
	return (
		<div>
			<Navbar />
			<section className="main-container">
				<div className="cards-container">
					{items.map((item, index) => (
						<Item price={item.price} name={item.name} key={index} />
					))}
				</div>
			</section>
		</div>
	);
}

export { Home };