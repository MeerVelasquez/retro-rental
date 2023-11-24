import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';

import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Button from '@mui/material/Button';
import './css/crud.css'; 

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const CrudComponent = ({ setClientesData, clientesData, newRent, setNewRent }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [price, setPrice] = useState('');
  const [expDate, setExpDate] = useState('');
  const [selectedGames, setSelectedGames] = useState([]);

  const handleSave = () => {
    const selectedGames = newRent.selectedGames || []; // Asegúrate de que selectedGames esté definido
    const newCustomer = {
      image: "https://i.imgur.com/xQiM4t6.png",
      name: name,
      email: email,
      products: games.filter(game => selectedGames.includes(game.title)),
      status: 'activo',
      price: price,
      expdate: expDate,
    };
  
    setClientesData([...clientesData, newCustomer]);
    setName('');
    setEmail('');
    setPrice('');
    setExpDate('');
    setSelectedGames([]);
  };

  return (
    <div className="crud-container">
      <div className="form-row">
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
          margin="normal"
          style={{ backgroundColor: "lightgray", borderRadius: "5px" }}
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          margin="normal"
          style={{ backgroundColor: "lightgray", borderRadius: "5px" }}
        />
      </div>
      <div className="form-row">
        <Autocomplete
          multiple
          id="checkboxes-tags-demo"
          options={games}
          disableCloseOnSelect
          getOptionLabel={(option) => option.title}
          onChange={(event, value) => setNewRent({ ...newRent, selectedGames: value })}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.title}
            </li>
          )}
          style={{ width: 500, backgroundColor: "#7473B7 !important", borderRadius: "5px" }}
          renderInput={(params) => (
            <TextField {...params} label="Checkboxes" placeholder="Favorites" style={{ backgroundColor: "lightgray", borderRadius: "5px" }} />
          )}
        />
        <TextField
          label="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          variant="outlined"
          margin="normal"
          style={{ backgroundColor: "lightgray", borderRadius: "5px" }}
        />
        <TextField
          label="Exp Date"
          value={expDate}
          onChange={(e) => setExpDate(e.target.value)}
          variant="outlined"
          margin="normal"
          style={{ backgroundColor: "lightgray", borderRadius: "5px" }}
        />
      </div>
      <div className="form-row">
        <Button className='enviar' onClick={handleSave}>
          Add Rent
        </Button>
      </div>
    </div>
  );
};


const games = [
  {title: "The Legend of Zelda: Breath of the Wild", year: 2017},
  {title: "Red Dead Redemption 2", year: 2018},
  {title: "Fortnite", year: 2017},
  {title: "God of War", year: 2018},
  {title: "Minecraft", year: 2011},
  {title: "Overwatch", year: 2016},
  {title: "Cyberpunk 2077", year: 2020},
  {title: "Super Mario Odyssey", year: 2017},
  {title: "Assassin's Creed Odyssey", year: 2018},
  {title: "The Witcher 3: Wild Hunt", year: 2015},
  {title: "Spider-Man: Miles Morales", year: 2020},
  {title: "Doom Eternal", year: 2020},
  {title: "Animal Crossing: New Horizons", year: 2020},
  {title: "Call of Duty: Warzone", year: 2020},
  {title: "FIFA 21", year: 2020}
  ];
export default CrudComponent;
