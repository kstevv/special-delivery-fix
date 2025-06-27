'use client';

import Image from 'next/image';
import Masonry from 'react-masonry-css';
import useInView from '../hooks/useInView';

interface Props {
  images: string[];
  title: string;
  onImageClick: (index: number) => void;
}

const breakpointColumnsObj = {
  default: 3,
  1024: 3,
  768: 2,
  0: 2,
};

export default function GalleryLightboxWrapper({ images, title, onImageClick }: Props) {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {images.map((img, i) => {
  const { ref, isInView } = useInView();

  const handleRipple = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(target.clientWidth, target.clientHeight);
    const radius = diameter / 2;

    circle.classList.add('ripple');
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - target.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${e.clientY - target.getBoundingClientRect().top - radius}px`;

    target.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 600);
  };
        return (
          <div
            key={i}
            ref={ref}
            className={`transition-all duration-700 ease-out transform mb-6 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="ripple-container overflow-hidden rounded-lg border border-white/10 shadow-md hover:shadow-lg transition-shadow mb-4 w-full h-auto cursor-zoom-in"
            onClick={(e) => {
          handleRipple(e);
          onImageClick(i);
        }}
        >
          <Image
            src={img}
            alt={`${title} photo ${i + 1}`}
            width={600}
            height={400}
            className="w-full h-auto object-cover rounded-md cursor-zoom-in hover:scale-105 transition-opacity duration-300 hover:opacity-90"
            onClick={() => onImageClick(i)}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={i < 3}
            loading={i < 3 ? undefined : 'lazy'}
         />
         </div>
          </div>
        );
      })}
    </Masonry>
  );
}