function Trending() {
  return (
    <section className="mt-8 w-full">
      <h2 className="text-xl font-normal mb-[0.9rem] font-sans md:text-[2rem] md:mb-[1.9rem] desktop:mb-[2rem]">Trending</h2>
      <div className="flex gap-4  md:gap-[2.5rem] overflow-x-auto scrollbar-hide w-full">
        <div className="bg-gray-700 rounded-lg shadow-md w-[240px] h-[140px] md:w-[470px] md:h-[230px] flex-shrink-0 flex items-center justify-center text-center">
          Placeholder 1
        </div>
        <div className="bg-gray-700 rounded-lg shadow-md w-[240px] h-[140px] md:w-[470px] md:h-[230px] flex-shrink-0 flex items-center justify-center text-center">
          Placeholder 2
        </div>
        <div className="bg-gray-700 rounded-lg shadow-md w-[240px] h-[140px] md:w-[470px] md:h-[230px] flex-shrink-0 flex items-center justify-center text-center">
          Placeholder 3
        </div>
        <div className="bg-gray-700 rounded-lg shadow-md w-[240px] h-[140px] md:w-[470px] md:h-[230px] flex-shrink-0 flex items-center justify-center text-center">
            Placeholder 4
          </div>
        </div>
      </section>
    );
  }
  
  export default Trending;
  