import React from 'react';

import { Card } from './components/Card';
import { useState } from 'react';

const Carrusel = () => {
  const [activeId, setActiveID] = useState('1');

  const handleClick = (event: React.MouseEvent) => {
    const id = event.currentTarget.id;
    setActiveID(id);
  };
  return (
    <div className="container">
      <Card
        key="1"
        id="1"
        active={activeId === '1' ? 'active' : ''}
        msg="Explore World"
        img="https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        onclick={handleClick}
      />
      <Card
        key="2"
        id="2"
        active={activeId === '2' ? 'active' : ''}
        msg="Wild Forest"
        img="https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        onclick={handleClick}
      />
      <Card
        key="3"
        id="3"
        active={activeId === '3' ? 'active' : ''}
        msg="Sunny Beach"
        img="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
        onclick={handleClick}
      />
      <Card
        key="4"
        id="4"
        active={activeId === '4' ? 'active' : ''}
        msg="City on Winter"
        img="https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
        onclick={handleClick}
      />
      <Card
        key="5"
        id="5"
        active={activeId === '5' ? 'active' : ''}
        msg="Mountains - Clouds"
        img="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        onclick={handleClick}
      />
    </div>
  );
};

export default Carrusel;
