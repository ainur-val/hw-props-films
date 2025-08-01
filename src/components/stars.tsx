import React, { useRef, useState } from 'react'
import Star from './star.js'

interface StarsProps {
  count: number;
}

export default function Stars({ count = 0}: StarsProps) {
    
  if (count < 1 || count > 5) {
    return null; 
  }

   
  const renderedStars = [];
  for (let i = 0; i < count; i++) {
    renderedStars.push(
      <li key={i}>
        <Star />
      </li>
    );
  }
  
  return (
    <ul className="card-body-stars u-clearfix">
      {renderedStars}
    </ul>
  );
}