import React from 'react';
import { Box } from '@mantine/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProjectCard from './ProjectCard';
import ProjectCardFeatured from './ProjectCardFeatured';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

export default function FeaturedCarousel({ projects = [], onProjectClick, selectedProjects = [] }) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  if (!projects.length) return null;

  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        marginBottom: '2.5rem',
      }}
    >
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={32}
        slidesPerView="auto"
        centeredSlides={true}
        style={{ maxWidth: 1200, width: '100%' }}
        onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
        onSwiper={swiper => setActiveIndex(swiper.realIndex)}
      >
        {projects.map((project, idx) => (
          <SwiperSlide
            key={project.id}
            style={{
              width: 400,
              transition: 'transform 0.3s, filter 0.3s',
              transform: activeIndex === idx ? 'scale(1.06)' : 'scale(0.92)',
              zIndex: activeIndex === idx ? 2 : 1,
              opacity: activeIndex === idx ? 1 : 0.7,
              filter: activeIndex === idx ? 'none' : 'brightness(0.7) grayscale(0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {activeIndex === idx ? (
              <ProjectCardFeatured
                project={project}
                onClick={onProjectClick}
                isSelected={selectedProjects.includes(project.id)}
              />
            ) : (
              <ProjectCard
                project={project}
                onClick={onProjectClick}
                isSelected={selectedProjects.includes(project.id)}
                featured={false}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
