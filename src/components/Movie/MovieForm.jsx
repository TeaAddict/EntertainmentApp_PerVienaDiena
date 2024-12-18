import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { updateMovie } from "../../helpers/movies/put";
import { deleteMovie } from "../../helpers/movies/delete";
import { postMovie } from "../../helpers/movies/post"; // <-- Add the addMovie helper
import Button from "../Button";
import { useUpdate } from "../Context/UpdateContext";

const MovieForm = ({ data, onClose, heading }) => {
  const {
    register,
    handleSubmit,
    // setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: data?.title || "",
      thumbnail: data?.thumbnail || "",
      year: data?.year || "",
      category: data?.category || "",
      rating: data?.rating || "",
      ageRating: data?.ageRating || "",
      isTrending: data?.isTrending || "",
    },
  });
  const { update } = useUpdate(); // <-- Add this

  // If editing, prepopulate the form with movie data
  // useEffect(() => {
  //   if (heading === "Edit") {
  //     setValue("title", data.title);
  //     setValue("thumbnail", data.thumbnail?.regular?.large || "");
  //     setValue("year", data.year);
  //     setValue("category", data.category);
  //     setValue("rating", data.rating);
  //     setValue("ageRating", data.ageRating);
  //     setValue("isTrending", data.isTrending);
  //   }
  // }, [data, setValue]);

  const onSubmit = async (formData) => {
    try {
      const resultData = {
        title: formData.title,
        thumbnail: { regular: { large: formData.thumbnail } },
        year: formData.year,
        category: formData.category,
        rating: [],
        ageRating: formData.rating,
        isTrending: formData.isTrending == "true",
      };

      if (data) {
        // Update movie logic
        // await updateMovie(data.id, resultData);
        console.log("Updating movie: ", resultData);
      } else {
        // Add movie logic
        // await postMovie(resultData);
        console.log("Adding movie: ", resultData);
      }

      update();
      if (onClose) onClose();
    } catch (error) {
      console.error("Failed to submit movie:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteMovie(data.id);
      update();
      onClose();
    } catch (error) {
      console.error("Failed to delete movie:", error);
    }
  };

  return (
    <div className="bg-movie-red-500 rounded-lg p-[1.5rem] pb-[2rem] md:p-[2rem] w-[20.4375rem] md:w-[25rem] max-w-md">
      <h2 className="text-heading-l font-medium text-movie-fifth mb-[2.5rem] tracking-[-0.5px] leading-[40px]">
        {heading} Movie
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <div className="flex flex-col gap-[1.5rem]">
          {/* TITLE */}
          <div
            className={`flex border-b-[1px] ${
              errors.title ? "border-movie-primary" : "border-movie-third"
            } has-[:focus]:border-movie-fifth`}
          >
            <input
              {...register("title", { required: "Title is required" })}
              className="caret-movie-primary text-movie-fifth focus:ring-0 w-full font-medium text-body-m bg-transparent border-none pb-[1.06rem] pt-0 pl-[1rem] leading-[19px]"
              placeholder="Title"
            />
            {errors.title && (
              <p className="text-movie-primary text-nowrap">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* CATEGORY */}
          <div
            className={`flex border-b-[1px] ${
              errors.category ? "border-movie-primary" : "border-movie-third"
            } has-[:focus]:border-movie-fifth`}
          >
            <input
              {...register("category", { required: "Category is required" })}
              className="caret-movie-primary text-movie-fifth focus:ring-0 w-full font-medium text-body-m bg-transparent border-none pb-[1.06rem] pt-0 pl-[1rem] leading-[19px]"
              placeholder="Category"
            />
            {errors.category && (
              <p className="text-movie-primary text-nowrap">
                {errors.category.message}
              </p>
            )}
          </div>

          {/* THUMBNAIL */}
          <div
            className={`flex border-b-[1px] ${
              errors.thumbnail ? "border-movie-primary" : "border-movie-third"
            } has-[:focus]:border-movie-fifth`}
          >
            <input
              {...register("thumbnail", {
                required: "Thumbnail URL is required",
                validate: (value) => {
                  const imageRegex =
                    /^((https?:\/\/(?:www\.)?[^\s\/]+(?:\/[^\s\/?]+)*\/?[^\s?]+\.(?:jpg|jpeg|png|gif|bmp|svg|webp)(\?[^\s]*)?)|(\.\/(?:[^\/\0]+\/)*[^\/\0]+\.(?:jpg|jpeg|png|gif|bmp|svg|webp))|([a-zA-Z]:\\(?:[^<>:"\/\\|?*]+\\)*[^<>:"\/\\|?*]+\.(?:jpg|jpeg|png|gif|bmp|svg|webp))|(\/(?:[^\/\0]+\/)*[^\/\0]+\.(?:jpg|jpeg|png|gif|bmp|svg|webp)))$/;
                  return (
                    imageRegex.test(value) || "Invalid image URL or file path"
                  );
                },
              })}
              className="caret-movie-primary text-movie-fifth focus:ring-0 w-full font-medium text-body-m bg-transparent border-none pb-[1.06rem] pt-0 pl-[1rem] leading-[19px]"
              placeholder="Thumbnail URL"
            />
            {errors.thumbnail && (
              <p className="text-movie-primary text-nowrap">
                {errors.thumbnail.message}
              </p>
            )}
          </div>

          {/* YEAR */}
          <div
            className={`flex border-b-[1px] ${
              errors.year ? "border-movie-primary" : "border-movie-third"
            } has-[:focus]:border-movie-fifth`}
          >
            <input
              type="number"
              {...register("year", { required: "Year is required" })}
              className="caret-movie-primary text-movie-fifth focus:ring-0 w-full font-medium text-body-m bg-transparent border-none pb-[1.06rem] pt-0 pl-[1rem] leading-[19px]"
              placeholder="Year"
            />
            {errors.year && (
              <p className="text-movie-primary text-nowrap">
                {errors.year.message}
              </p>
            )}
          </div>

          {/* RATING */}
          <div
            className={`flex border-b-[1px] ${
              errors.rating ? "border-movie-primary" : "border-movie-third"
            } has-[:focus]:border-movie-fifth`}
          >
            <input
              type="number"
              {...register("rating", { required: "Rating is required" })}
              className="caret-movie-primary text-movie-fifth focus:ring-0 w-full font-medium text-body-m bg-transparent border-none pb-[1.06rem] pt-0 pl-[1rem] leading-[19px]"
              placeholder="Rating"
            />
            {errors.rating && (
              <p className="text-movie-primary text-nowrap">
                {errors.rating.message}
              </p>
            )}
          </div>
        </div>

        {/* IS TRENDING */}
        <div
          className={`flex justify-between border-b-[1px] ${
            errors.title ? "border-movie-primary" : "border-movie-third"
          } has-[:focus]:border-movie-fifth`}
        >
          <div>
            <select
              className="select w-full max-w-xs bg-movie-fourth text-movie-fifth"
              id="isTrending"
              {...register("isTrending", {
                required: "Is trending is required",
              })}
            >
              <option value="">Is trending</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>

          {errors.isTrending && (
            <p className="flex items-center text-movie-primary text-nowrap">
              {errors.isTrending.message}
            </p>
          )}
        </div>

        <div className="flex justify-center mt-5">
          <div className="flex flex-row gap-5">
            <Button type="submit">
              {heading === "Edit" ? "Submit" : "Add"}
            </Button>
            {heading === "Edit" && (
              <Button styleType="delete" onClick={handleDelete}>
                Delete
              </Button>
            )}
            <Button styleType="secondary" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MovieForm;
