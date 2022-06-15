import React from 'react';
import { useNavigate } from 'react-router-dom';

export function IntroView() {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div>Intro view</div>
      <button onClick={() => navigate('/introView')}>Go to intro view</button>
      <button onClick={() => navigate('/idolView')}>Go to idolView </button>
      <button onClick={() => navigate('/starSignView')}>Go to star sign view</button>
      <button onClick={() => navigate('/mapView')}>Go to map view</button>
      <button onClick={() => navigate('/divinationView')}>Go to divination view</button>
    </React.Fragment>
  )
}
