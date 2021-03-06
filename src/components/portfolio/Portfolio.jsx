import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './styling/portfolio.css'
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import sidebar from '../../img/sidebar.png'
import ecommerce from '../../img/ecommerce.png'
import hoc from '../../img/hoc.png'
import musicapp from '../../img/musicapp.png'

const Portfolio = () => {
   
  return (
      <div className="portfolio">

          {/* heading */}
          <span>Recent Projects</span>
          <span>Porfolio</span>
{/* slider */}
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          grabCursor={true}
          className='portfolio-slider' 
          >

              <SwiperSlide>
                  <img src={sidebar} alt="" />
              </SwiperSlide>

              <SwiperSlide>
                  <img src={ecommerce} alt="" />
              </SwiperSlide>
              
              <SwiperSlide>
                  <img src={hoc} alt="" />
              </SwiperSlide>
              x
              <SwiperSlide>
                  <img src={musicapp} alt="" />
              </SwiperSlide>
          
          </Swiper>


      </div>
    )
}

export default Portfolio
