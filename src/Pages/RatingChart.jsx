import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const RatingChart = ({ratings}) => {

  return (
    <div className='h-80 mb-10 mx-5'>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart layout="vertical" data={ratings}>
          <XAxis type="number" />                   
          <YAxis type="category" dataKey="name" />  
          <Tooltip />                               
          <Bar dataKey="count" fill="#f59e0b" />   
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingChart;
