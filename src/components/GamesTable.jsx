import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import './css/gamestables.css';

const GamesTable = ({ games }) => {
  const [directorFilter, setDirectorFilter] = useState('');
  const [releaseDateFilter, setReleaseDateFilter] = useState('');
  const [topSellerFilter, setTopSellerFilter] = useState(false);

  const mostSoldGame = games.reduce((max, game) =>
    game.rentas > max.rentas ? game : max
  );

  const filteredGames = games.filter((game) => {
    const matchesDirector = game.director.toLowerCase().includes(directorFilter.toLowerCase());
    const matchesReleaseDate = game.release.toLowerCase().includes(releaseDateFilter.toLowerCase());
    const isTopSeller = topSellerFilter ? game.title === mostSoldGame.title : true;

    return matchesDirector && matchesReleaseDate && isTopSeller;
  });

  return (
    <div>
      <Form>
        <div className="row mb-3">
          <div className="col">
            <Form.Control
              type="text"
              placeholder="Enter director"
              value={directorFilter}
              onChange={(e) => setDirectorFilter(e.target.value)}
            />
          </div>
          <div className="col">
            <Form.Control
              type="text"
              placeholder="Enter release date"
              value={releaseDateFilter}
              onChange={(e) => setReleaseDateFilter(e.target.value)}
            />
          </div>
          <div className="col">
          <Form.Check
            type="checkbox"
            label="Top Rent"
            checked={topSellerFilter}
            onChange={(e) => setTopSellerFilter(e.target.checked)}
            className="top-seller-checkbox" 
/>
          </div>
          <div className="col">
            <Button variant="primary" onClick={() => { setDirectorFilter(''); setReleaseDateFilter(''); setTopSellerFilter(false); }}>
              Clear Filters
            </Button>
          </div>
        </div>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr className="table-header">
            <th>Title</th>
            <th>Director</th>
            <th>Producer</th>
            <th>Release Date</th>
            <th>Image</th>
            <th>No.Rents</th>
          </tr>
        </thead>
        <tbody>
          {filteredGames.map((game, index) => (
            <tr key={index}>
              <td>{game.title}</td>
              <td>{game.director}</td>
              <td>{game.productor}</td>
              <td>{game.release}</td>
              <td>
                <img src={game.image} alt={game.title} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
              </td>
              <td>{game.rentas}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default GamesTable;

