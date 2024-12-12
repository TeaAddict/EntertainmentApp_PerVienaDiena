import TrendingCard from "./TrendingCard";
import { useDraggable } from "react-use-draggable-scroll";
import { useRef } from "react";


const Trending = ({ data }) => {
    const containerRef = useRef(null);
    const { events } = useDraggable(containerRef);

  return (
    <section className="bg-movie-secondary text-white">
      <h1 className="text-[1.2rem] mb-[0.7rem] sm:text-[1.91rem]  lg:text-[1.91rem] sm:mb-[1.2rem]">
        Trending
      </h1>
      <div
        className="flex gap-4 sm:gap-10 lg:gap-10 overflow-x-auto cursor-grab active:cursor-grabbing"
        ref={containerRef}
        {...events}
      >
        {data.map((item) => (
          <div
            key={item.title}
            className="relative flex-shrink-0 rounded-lg overflow-hidden h-[8.75rem] sm:h-[14.375rem] lg:h-[14.375rem]"
          >
            <TrendingCard content={item} key={item.id} />
    
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trending;
