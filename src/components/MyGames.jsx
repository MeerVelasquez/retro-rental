
import React from 'react';
import Cartas from './cards';
import Navbaradmin from './nvadmin';
import './css/Mygames.css';
const MyGames = () => {

  const cards = [
    {
      title: 'Call of Duty: Black Ops 4',
      director: 'Director : David VonderHaar',
      productor: 'Productor : Treyarch, Beenox',
      release: 'Release date : 12 Oct, 2018',
      image: 'https://m.media-amazon.com/images/M/MV5BMzc2MzEzNjc4OV5BMl5BanBnXkFtZTgwOTQ4MTI1NjM@._V1_.jpg', 
    },
    {
      title: 'HeadBangers: Rhythm Royale', 

      director: 'Editor : Glee Cheese Studio',
      productor:'Desarrollador : Team17   ' ,
      release:   'Release date: 31 Oct, 2023' ,
      image: 'https://i.imgur.com/x0Ezvm7.jpg', 
    },
    {
      title: 'Robocop: Rogue City', 

      director: 'Editor : Teyon',
      productor:    'Desarrollador : Nacon'     ,
      release:       'Release date : 2 Nov, 2023',
      image: 'https://cdn.cdkeys.com/500x706/media/catalog/product/n/e/new_project_-_2023-10-03t125130.561.jpg', 
    },
    {
      title: 'The Talos principle 2',
      director: 'Editor : Devolver digital.',
      productor:  ' Desarrollador : Croteam. ',
       release: 'Release date : 2 Nov, 2023',
      image: 'https://images.cgames.de/images/gamestar/4/15968-default-packshot_6233878.jpg',
    },

    {

      title: 'My Time at Sandrock',
      director: 'Editor : Pathea Games.',
      productor:  ' Desarrollador : Pathea Games. ',
       release: 'Release date : 2 Nov, 2023',
      image: 'https://m.media-amazon.com/images/I/81XyGSSoNxL._AC_UF1000,1000_QL80_.jpg',

    },

    {

      title: 'Gatekeeper: Infinity',
      director: 'Editor :   HypeTrain Digital.',
      productor:  ' Desarrollador : GravityLagoon. ',
       release: 'Release date : 10 Nov, 2023',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/1990954494_IGDB-272x380.jpg',

    },



    
   
  ];

  const horror = [
    {
      title: 'Sweet Home',
      director: 'Director : Capcom',
      productor: 'Productor : Capcom',
      release: 'Release date : 15 Dec, 1989',
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Sweet_Home_Japanese_Famicom_box_art.jpg/220px-Sweet_Home_Japanese_Famicom_box_art.jpg', 
    },
    {
      title: 'Doom 64', 

      director: 'Editor : ID Software',
      productor:'Desarrollador : ID Software   ' ,
      release:   'Release date: 31 March, 1997' ,
      image: 'https://howlongtobeat.com/games/2709_Doom_64.jpg', 
    },
    {
      title: 'Alien 3', 

      director: 'Editor : Bits Studios',
      productor:    'Desarrollador : Bits Studios'     ,
      release:       'Release date : 2 Nov, 1992',
      image: 'https://m.media-amazon.com/images/M/MV5BYjhhZGJhNWEtMDEwNC00NTk1LTk1NzItNDg4NWEwNWFjOTE3XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_.jpg', 
    },
    {
      title: 'Resident Evil 2',
      director: 'Editor : Capcom.',
      productor:  ' Desarrollador : Capcom. ',
       release: 'Release date : 25 Jan, 2019',
      image: 'https://upload.wikimedia.org/wikipedia/en/f/fd/Resident_Evil_2_Remake.jpg',
    },

    {

      title: 'Remnant II',
      director: 'Editor : Gearbox Publishing.',
      productor:  ' Desarrollador : GunfireGames. ',
       release: 'Release date : 25 Jul, 2023',
      image: 'https://cdn1.epicgames.com/offer/aa598567414d42378187b8861da550f7/c6758576-ddd6-4601-b4bb-2769df3c7af3_1200x1600-1486abbf9a713a1d20d7facac9a34195',

    },

    {

      title: 'Dark Souls III',
      director: 'Editor: FromSoftwareInc.',
      productor:  ' Desarrollador : FromSoftware. ',
       release: 'Release date : 11 Apr, 2016',
      image: 'https://m.media-amazon.com/images/I/91f3S5K+QnL.jpg',

    },

    

    
   
  ];

  const simulation = [
    {
      title: 'The Sims 4',
      director: 'Director : Lyndsay Pearson',
      productor: 'Productor : Grant Rodiek',
      release: 'Release date : 2 Sep, 2014',
      image: 'https://m.media-amazon.com/images/I/71otyq1xFNL.jpg', 
    },
    {
      title: 'The Sims 3', 

      director: 'Editor : EA Games',
      productor:'Desarrollador : Maxis   ' ,
      release:   'Release date: 2 Jun, 2009' ,
      image: 'https://i.redd.it/jnzhk62kc2s41.jpg', 
    },
    {
      title: 'The Sims 2', 

      director: 'Editor : EA Games',
      productor:    'Desarrollador : Maxis'     ,
      release:       'Release date : 14 Sep, 2004',
      image: 'https://cdn.mobygames.com/covers/4184315-the-sims-2-windows-front-cover.jpg', 
    },
    {
      title: 'Stellaris',
      director: 'Editor : Paradox.',
      productor:  ' Desarrollador : Paradox. ',
       release: 'Release date : 9 May, 2016',
      image: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Stellaris_cover.png',
    },

    {
      title: 'DayZ',
      director: 'Editor : BohemiaInteractive.',
      productor:  ' Desarrollador : BohemiaInt, ',
       release: 'Release date : 13 Dic, 2018',
      image: 'https://image.api.playstation.com/vulcan/ap/rnd/202301/0312/z9AGStZnUt3o3nbxJUrCjkyM.png',

    }

    

    

    
   
  ];


  return (
    <div>
        <Navbaradmin />
      <Cartas  title="New Releases" cards={cards} />
      <Cartas title="Horror Games" cards={horror} />
      <Cartas title="Simulation " cards={simulation} />
    </div>
  );
};

export default MyGames;
