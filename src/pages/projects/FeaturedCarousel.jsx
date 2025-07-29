import React, { useState, useCallback } from 'react';
import { Box } from '@mantine/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProjectCard from './ProjectCard';
import ProjectCardFeatured from './ProjectCardFeatured';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function FeaturedCarousel({ projects = [], onProjectClick, selectedProjects = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handleSlideChange = useCallback((swiper) => {
    setActiveIndex(swiper.realIndex);
  }, []);
  
  const handleSwiper = useCallback((swiper) => {
    setActiveIndex(swiper.realIndex);
  }, []);
  
  if (!projects.length) return null;

  return (
    <Box
      style={{
        position: 'relative',
        width: '100%',
        marginBottom: '2rem',
        background: 'linear-gradient(135deg, rgba(229,9,20,0.08) 0%, rgba(0,0,0,0.2) 100%)',
        borderRadius: '24px',
        padding: '40px 24px 48px 24px',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(229,9,20,0.1)',
        boxShadow: '0 12px 48px rgba(0,0,0,0.6)',
        overflow: 'hidden'
      }}
    >
      {/* Netflix-style background pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 80%, rgba(229,9,20,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(244,6,18,0.1) 0%, transparent 50%)',
        pointerEvents: 'none'
      }}></div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{ 
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active-custom',
          bulletClass: 'swiper-pagination-bullet-custom',
          el: '.swiper-pagination-custom'
        }}
        spaceBetween={32}
        slidesPerView={1}
        centeredSlides={true}
        loop={projects.length > 1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 1.2,
            spaceBetween: 40
          },
          1024: {
            slidesPerView: 1.5,
            spaceBetween: 48
          },
          1280: {
            slidesPerView: 1.8,
            spaceBetween: 56
          }
        }}
        style={{ 
          maxWidth: '100%', 
          width: '100%',
          paddingBottom: '60px',
          position: 'relative',
          zIndex: 2
        }}
        onSlideChange={handleSlideChange}
        onSwiper={handleSwiper}
      >
        {projects.map((project, idx) => (
          <SwiperSlide
            key={project.id}
            style={{
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: activeIndex === idx ? 'scale(1.02)' : 'scale(0.95)',
              zIndex: activeIndex === idx ? 10 : 1,
              opacity: activeIndex === idx ? 1 : 0.8,
              filter: activeIndex === idx 
                ? 'drop-shadow(0 16px 32px rgba(229,9,20,0.3))' 
                : 'brightness(0.85) contrast(0.9)',
            }}
          >
            <ProjectCardFeatured
              project={project}
              onClick={onProjectClick}
              isSelected={selectedProjects.includes(project.id)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="swiper-pagination-custom" style={{
        position: 'absolute',
        bottom: '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '12px',
        zIndex: 10
      }}></div>

      {/* Enhanced Navigation Buttons */}
      <button 
        className="swiper-button-prev-custom"
        style={{
          position: 'absolute',
          left: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '56px',
          height: '56px',
          background: 'linear-gradient(135deg, rgba(229,9,20,0.9) 0%, rgba(244,6,18,0.8) 100%)',
          border: 'none',
          borderRadius: '50%',
          color: '#fff',
          fontSize: '24px',
          cursor: 'pointer',
          zIndex: 20,
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
          border: '2px solid rgba(255,255,255,0.1)'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-50%) scale(1.1)';
          e.target.style.boxShadow = '0 12px 32px rgba(229,9,20,0.6)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(-50%) scale(1)';
          e.target.style.boxShadow = '0 8px 24px rgba(0,0,0,0.4)';
        }}
      >
        ‹
      </button>
      
      <button 
        className="swiper-button-next-custom"
        style={{
          position: 'absolute',
          right: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '56px',
          height: '56px',
          background: 'linear-gradient(135deg, rgba(229,9,20,0.9) 0%, rgba(244,6,18,0.8) 100%)',
          border: 'none',
          borderRadius: '50%',
          color: '#fff',
          fontSize: '24px',
          cursor: 'pointer',
          zIndex: 20,
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
          border: '2px solid rgba(255,255,255,0.1)'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-50%) scale(1.1)';
          e.target.style.boxShadow = '0 12px 32px rgba(229,9,20,0.6)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(-50%) scale(1)';
          e.target.style.boxShadow = '0 8px 24px rgba(0,0,0,0.4)';
        }}
      >
        ›
      </button>

      {/* Project Counter */}
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '24px',
        background: 'rgba(0,0,0,0.7)',
        padding: '8px 16px',
        borderRadius: '20px',
        color: '#f8fafc',
        fontSize: '14px',
        fontWeight: 600,
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.1)',
        zIndex: 10
      }}>
        {activeIndex + 1} / {projects.length}
      </div>
    </Box>
  );
}
