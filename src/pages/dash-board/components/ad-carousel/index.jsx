import * as React from 'react';
import { Carousel } from 'antd';

const CarouselList = [
  {
    id: '1',
    url: '/img/1.jpg',
  },
  {
    id: '2',
    url: '/img/2.jpg',
  },
  {
    id: '3',
    url: '/img/3.jpg',
  },
  {
    id: '4',
    url: '/img/4.jpg',
  },
];

const contentStyle = {
  height: '60vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const AdCarousel = () => {
  return (
    <Carousel autoplay={true}>
      {CarouselList.map((item, index) => (
        <div key={item.id}>
          <img style={contentStyle} src={item.url} alt={index} />
        </div>
      ))}
    </Carousel>
  );
};

export default AdCarousel;
