import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { updateMovie } from "../helpers/movies/put";
import { deleteMovie } from "../helpers/movies/delete";
import { postMovie } from "../helpers/movies/post"; // <-- Add the addMovie helper
import Button from "./Button";
import { useUpdate } from "./Context/UpdateContext";

const MovieManipulation = ({ movie, onClose, heading }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { update } = useUpdate(); // <-- Add this

  // If editing, prepopulate the form with movie data
  useEffect(() => {
    if (heading === "Edit") {
      setValue("title", movie.title);
      setValue("category", movie.category);
      setValue("thumbnail", movie.thumbnail?.regular?.large || "");
      setValue("year", movie.year);
      setValue("rating", movie.rating);
    }
  }, [movie, setValue]);

  const onSubmit = async (data) => {
    try {
      if (heading === "Edit") {
        // Update movie logic
        await updateMovie(movie.id, {
          title: data.title,
          category: data.category,
          thumbnail: { regular: { large: data.thumbnail } },
          year: data.year,
          rating: data.rating,
        });
      } else if (heading === "Add") {
        // Add movie logic
        await postMovie({
          title: data.title,
          category: data.category,
          thumbnail: { regular: { large: data.thumbnail } },
          year: data.year,
          rating: data.rating,
        });
      }

      update();
      onClose();
    } catch (error) {
      console.error("Failed to submit movie:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteMovie(movie.id);
      update();
      onClose();
    } catch (error) {
      console.error("Failed to delete movie:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
      <div className="bg-movie-fourth rounded-[20px] p-[1.5rem] pb-[2rem] md:p-[2rem] w-[20.4375rem] md:w-[25rem] max-w-md">
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
          <div className="flex justify-center mt-5">
            <div className="flex flex-row gap-5">
              <Button>{heading === "Edit" ? "Submit" : "Add"}</Button>
              {heading === "Edit" && (
                <Button type="delete" onClick={handleDelete}>
                  Delete
                </Button>
              )}
              <Button type="secondary" onClick={onClose}>
                Close
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MovieManipulation;
