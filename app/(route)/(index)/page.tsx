import ProfileCard from "@/app/(route)/(index)/components/ProfileCard";
import PostCard from "@/app/(route)/(index)/components/PostCard";

const LandingPage = () => {
  return (
    <div
      className={`
      flex flex-row flex-1 justify-center items-center bg-[#e3e3e3] flex-wrap 
      gap-0 md:gap-[50px] lg:gap-[7%] snap-mandatory overflow-y-hidden`}
    >
      <ProfileCard />
      <PostCard />
    </div>
  );
};

export default LandingPage;
