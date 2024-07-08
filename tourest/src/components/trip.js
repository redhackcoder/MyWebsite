import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTrips } from '../actions';
import './trip.css';
import Card from './Card';

const tripsData = [
  {
    id: 1,
    title: 'Domestic Destinations',
    description: [ 'Meghalaya', 'Goa' , 'Rajasthan' , 'Uttrakhand' , 'Ladakh'],
    imageUrl: 'images1.jpg'
  },
  {
    id: 2,
    title: 'International Destinations',
    description: ['Mauritius', 'Bali' , 'Thailand', 'Baku' , 'Dubai'],
    imageUrl: 'ForeverLovedPlaces.jpg'
  }
];

const Trips = () => {
  const dispatch = useDispatch();
  const trips = useSelector((state) => state.trips.trips);

  useEffect(() => {
    dispatch(setTrips(tripsData));
  }, [dispatch]);

  return (
    <section id="trips" className="trips">
      <h2>Destinations</h2>
      <div className="trips-list">
        {trips.map(trip => (
          <div key={trip.id} className="trip-card">
            <Card
              image={`http://localhost:5050/images/${trip.imageUrl}`}
              title={trip.title}
              description={trip.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trips;
