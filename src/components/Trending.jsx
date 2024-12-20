import TrendingCard from "./TrendingCard";
import { useDraggable } from "react-use-draggable-scroll";
import { useRef } from "react";

const Trending = ({ data }) => {
  const containerRef = useRef(null);
  const { events } = useDraggable(containerRef);

  return (
    <section className="bg-movie-secondary text-white  ">
      <h1
        className="text-[1.2rem] md:text-[1.91rem] desktop:text-[1.91rem]
tracking-[0.19px] md:tracking-[0.3px] desktop:tracking-[0.3px]
        text-movie-fifth font-extralight mb-[0.7rem] md:mb-[1rem]"
      >
        Trending
      </h1>
      <div
        className="flex gap-4 md:gap-10 desktop:gap-10 overflow-x-auto cursor-grab active:cursor-grabbing no-scrollbar"
        ref={containerRef}
        {...events}
      >
        {data?.map((item) => (
          <div
            key={item.title}
            className=" flex-shrink-0 rounded-lg overflow-hidden git h-[8.75rem] md:h-[14.375rem] desktop:h-[14.375rem]"
          >
            <TrendingCard content={item} key={item.id} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trending;
