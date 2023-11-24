import React, { useState } from 'react';
import CustomerTable from './tabla';
import Navbaradmin from './nvadmin';
import './css/clients.css';
import CrudComponent from './crud';

const Clients = () => {
  const [clientesData, setClientesData] = useState([
    {
      image: "https://i.imgur.com/xQiM4t6.png",
      name: "Eleonor Velásquez",
      email: "eleonor.velasquez@example.com",
      products: ["GTA V  ", "Call Of Duty: Black Ops 3 "],
      status: "inactivo",
      price: "$15.00",
      expdate: "2023-05-11"
    },
    {
      image: "https://i.imgur.com/E7np6Y3.png",
      name: "Elliott Velasquez",
      email: "ElliottV@example.com",
      products: ["Minecraft ", "FIFA 22 ", "The Legend of Zelda: Breath of the Wild"],
      status: "activo",
      price: "$25.50",
      expdate: "2023-07-22"
    },
    {
      image: "https://i.imgur.com/xQiM4t6.png",
      name: "Isabella Medina",
      email: "isabella.medina@example.com",
      products: ["Among Us ", "Fortnite ", "Animal Crossing: New Horizons"],
      status: "expired",
      price: "$10.99",
      expdate: "2023-03-15"
    },
    {
      image: "https://i.imgur.com/E7np6Y3.png",
      name: "Elliott Velasquez",
      email: "ElliottV@example.com",
      products: ["Minecraft ", "FIFA 22 ", "The Legend of Zelda: Breath of the Wild"],
      status: "activo",
      price: "$25.50",
      expdate: "2023-07-22"
    },
    {
      image: "https://i.imgur.com/xQiM4t6.png",
      name: "Mario Castillo",
      email: "MarioC@example.com",
      products: ["Among Us ", "Fortnite ", "Animal Crossing: New Horizons"],
      status: "expired",
      price: "$10.99",
      expdate: "2023-03-15"
    },
    {
      image: "https://i.imgur.com/xQiM4t6.png",
      name: "Eleonor Velásquez",
      email: "eleonor.velasquez2@example.com",
      products: ["GTA V ", "Call Of Duty: Black Ops 3 ", "The Sims 4"],
      status: "inactivo",
      price: "$18.75",
      expdate: "2023-09-02"
    },
    {
      image: "https://i.imgur.com/xQiM4t6.png",
      name: "Carlos Rodríguez",
      email: "carlos.rodriguez2@example.com",
      products: ["Minecraft ", "FIFA 22 ", "The Legend of Zelda: Breath of the Wild"],
      status: "activo",
      price: "$30.00",
      expdate: "2023-12-10"
    },
    {
      image: "https://i.imgur.com/xQiM4t6.png",
      name: "Juan Pérez",
      email: "JuanP@example.com",
      products: ["Among Us ", "Fortnite ", "Animal Crossing: New Horizons"],
      status: "expired",
      price: "$12.50",
      expdate: "2023-06-18"
    },
  ]);

  const [newRent, setNewRent] = useState({
    name: '',
    email: '',
    products: [],
    status: '',
    price: '',
    expdate: '',
  });

  return (
    <div className="App">
      <Navbaradmin />
      <CustomerTable customers={clientesData} />

      <div className="new-rent">
        <h2>Add Rent</h2>
      </div>
      <CrudComponent setClientesData={setClientesData} clientesData={clientesData} newRent={newRent} setNewRent={setNewRent} />

    </div>
  );
};

export default Clients;



 

