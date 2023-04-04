"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import ClientSideRoute from '../ClientSideRoute';
import Image from 'next/image';
import urlFor from '../../../lib/urlFor';

type Props = {
  posts: Post[];
};

export default function Banner({ posts }: Props) {
  const latestPosts = posts.slice(0, 3);
  
  return (
    <div className="max-w-[1400px] h-[480px] my-6 px-4">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="rounded mySwiper"
      >
        {latestPosts.map((post) => (
            <SwiperSlide className="flex flex-col w-full cursor-pointer group">
              <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
                <Image
                  className="relative object-cover object-center lg:object-center"
                  src={urlFor(post.mainImage).url()}
                  alt={post.author.name}
                  fill
                />
                <div className="absolute bottom-0 left-0 flex flex-col justify-between w-full p-10 text-white bg-banner-gradient">
                    <h2 className="mx-auto mb-4 text-3xl font-bold drop-shadow">{post.title.toUpperCase()}</h2>
                    <p className="max-w-lg mx-auto mb-4 line-clamp-3">{post.short_text}</p>
                </div>
              </ClientSideRoute>
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}