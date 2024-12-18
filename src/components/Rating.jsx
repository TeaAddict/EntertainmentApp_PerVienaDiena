export default function Rating({ rating, setRating }) {
  const handleRatingChange = (newRating) => {
    setRating(newRating); 
  };

  return (
    <div className="rating rating-sm">
      {[1, 2, 3, 4, 5].map((index) => (
        <input
          type="radio"
          key={index}
          name="rating"
          className={`mask mask-star-2 ${
            index <= rating ? "bg-orange-400" : "bg-gray-300"
          }`}
          checked={index === rating}
          onChange={() => handleRatingChange(index)}
          defaultChecked
        />
      ))}
    </div>
  );
}
