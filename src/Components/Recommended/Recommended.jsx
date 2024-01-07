import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation } from "swiper/modules";


const Recommended = () => {
    const [foods, setFoods] = useState();

    useEffect(() => {
        fetch('foodsApi.json')
            .then(res => res.json())
            .then(data => {
                const foodsArray = data.Items;
                setFoods(foodsArray)
            });
    }, [])

    if (!foods) {
        return <Loading></Loading>
    }

    return (
        <div className='w-11/12 md:w-10/12 mx-auto relative mt-16 mb-36'>
            <div className='flex justify-between me-7 mb-10'>
                <h3 className='text-2xl font-semibold'>Recommended</h3>
                <p className='text-[#FC6011] font-semibold'>See more</p>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={8}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Navigation]}
                className="mySwiper "
            >
                {
                    foods.map((food, index) =>
                        <SwiperSlide key={index} className='bg-transparent'>
                            <img className='h-40 lg:h-64 rounded-xl' src={food.ImageUrl} alt="" />
                            <p className='font-semibold mt-4'>{food.Name}</p>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
};

export default Recommended;