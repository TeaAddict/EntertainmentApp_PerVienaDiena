import avatar from "../../assets/image-avatar.png";
const ProfilePictureButton = () => {
  return (
    <section>
      <img
        src={avatar}
        alt="profile-photo"
        className="w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem] border-[0.06rem] border-movie-fifth rounded-[1.5rem] desktop:w-[2.5rem] desktop:h-[2.5rem] "
      />
    </section>
  );
};

export default ProfilePictureButton;
