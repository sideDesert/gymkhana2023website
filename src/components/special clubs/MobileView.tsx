import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { EffectCoverflow } from 'swiper'
import Card from './Card'
import 'swiper/css'
import './clubs.css'

function MobileView() {
  return (
    <div>
        <div>
        <h2 className='font-bold text-4xl p-8'>Clubs</h2>
        </div>
        <Swiper
            modules={[EffectCoverflow]}
            effect='coverflow'
            centeredSlides={true}
            spaceBetween={0}
            coverflowEffect={{
                slideShadows: false
            }}
            slidesPerView={'auto'}
            loop={true}
        >
            <SwiperSlide>
                <Card bgColor='bg-black' textColor='text-white' title='Elan & nVision' imgUrl='https://cdn.discordapp.com/attachments/1006640769819475988/1053297294818168852/white_vertical.png'></Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card></Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card></Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card></Card>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default MobileView