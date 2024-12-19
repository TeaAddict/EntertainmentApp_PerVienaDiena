import ReactStars from "react-stars";

export default function Rating({ rating, setRating }) {
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="">
      <ReactStars
        count={5} // Number of stars to display
        value={rating} // Pass current rating value
        onChange={handleRatingChange} // Handle rating change
        size={18} // Size of the stars
        color1="#d3d3d3" // Color for unselected stars (gray)
        color2="#ff9f00" // Color for selected stars (orange)
        half={true} // Disable half stars, only full stars
      />
    </div>
  );
}
