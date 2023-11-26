import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
const Category = () => {
    return (
        <>
        <h2 className='text-center text-3xl text-white mb-8'>
        Meal 3 times A day</h2>
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src="https://i.ibb.co/TPMzsKm/So-Good-Haad-Rin-Hostel-Exterior.jpg" alt="" />
            <h3 className='text-xl text-center  text-white font-semibold uppercase'>BreakFast</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://i.ibb.co/qJKsSBx/01opcanteen.jpg" alt="" />
            <h3 className='text-xl text-center  text-white font-semibold uppercase'>lunch</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src="
            https://i.ibb.co/qpGQBWw/easy-meals-to-cook-in-a-hostel.jpg" alt="" />
            <h3 className='text-xl text-center  text-white font-semibold uppercase'>BreakFast</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://i.ibb.co/TPMzsKm/So-Good-Haad-Rin-Hostel-Exterior.jpg" alt="" />
            <h3 className='text-xl text-center  text-white font-semibold uppercase'>BreakFast</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://i.ibb.co/qJKsSBx/01opcanteen.jpg" alt="" />
            <h3 className='text-xl text-center  text-white font-semibold uppercase'>lunch</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src="
            https://i.ibb.co/qpGQBWw/easy-meals-to-cook-in-a-hostel.jpg" alt="" />
            <h3 className='text-xl text-center text-white font-semibold uppercase'>BreakFast</h3>
        </SwiperSlide>
      </Swiper>
        </>
    );
};

export default Category;