import React, { Children } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';




// import required modules
import { Pagination,Autoplay } from 'swiper/modules';

 function Swipers({children}) {
  return (
    <React.Fragment>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        modules={[Autoplay,Pagination]}
        
        className="w-full h-full "
      >
        
        {children}
      </Swiper>
    </React.Fragment>
  );
}


export {Swipers}