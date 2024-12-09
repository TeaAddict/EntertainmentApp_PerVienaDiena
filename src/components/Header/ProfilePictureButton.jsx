import avatar from "../../assets/image-avatar.png";
const ProfilePictureButton = () => {
  return (
    <button>
      <img
        src={avatar}
        alt="profile-photo"
        className="w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem] border-[1px] border-movie-fifth rounded-[1.5rem] desktop:w-[2.5rem] desktop:h-[2.5rem] "
      />
    </button>
  );
};

export default ProfilePictureButton;
