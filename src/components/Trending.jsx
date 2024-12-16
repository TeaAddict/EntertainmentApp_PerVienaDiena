import TrendingCard from "./TrendingCard";
import { useDraggable } from "react-use-draggable-scroll";
import { useRef } from "react";

const Trending = ({ data }) => {
  const containerRef = useRef(null);
  const { events } = useDraggable(containerRef);

  return (
    <section className="bg-movie-secondary text-white">
      <h1 className="text-[1.2rem] mb-[0.9rem] mt-[-0.1rem] md:text-[1.925rem] md:mt-[-0.13rem] md:mb-[1.3rem] desktop:text-[1.925rem]">
        Trending
      </h1>
      <div
        className="flex gap-4 md:gap-10 lg:gap-10 overflow-x-auto cursor-grab active:cursor-grabbing no-scrollbar"
        ref={containerRef}
        {...events}
      >
        {data.map((item) => (
          <div
            key={item.title}
            className="relative flex-shrink-0 rounded-lg overflow-hidden  h-[8.75rem] md:h-[14.375rem] desktop:h-[14.375rem]"
          >
            <TrendingCard content={item} key={item.id} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trending;
