import React from 'react'
import { carousel1, carousel2, carousel3 } from '../assets/images';

const Crousal = () => {



  let carousel_data = [
    carousel1,
    carousel2,
    carousel3,
  ];

  const [index, setIndex] = React.useState(0);

  function moveRight() {
    setIndex((index + 1) % carousel_data.length);
  }

  function moveLeft() {
    setIndex((index - 1 + carousel_data.length) % carousel_data.length);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      moveRight();
    } else if (event.key === 'ArrowLeft') {
      moveLeft();
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });




  return (
    <div className=' flex justify-center my-10'>
    <button onClick={moveLeft}><img className='w-8 h-8' src="https://i.pinimg.com/564x/83/26/9e/83269efa1e0d1370f5f7f9b7b38819e2.jpg" alt="" /></button>
    <div className=' overflow-hidden mx-5'>
      <img width={900}  src={carousel_data[index]} alt="" />
    </div>

    <button onClick={moveRight}><img className='w-8 h-8 rotate-180' src="https://i.pinimg.com/564x/83/26/9e/83269efa1e0d1370f5f7f9b7b38819e2.jpg" alt="" /></button>
  </div>
  )
}

export default Crousal