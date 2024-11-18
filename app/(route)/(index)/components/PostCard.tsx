import NeumorphButton from "@/app/components/blocks/NeumorphButton";

const PostCard = () => {
  return (
    <div
      className={`
      flex flex-col justify-center items-center
      w-[100vw] h-[100vh] px-[10vw] py-[10vh]
      sm:w-[100vw] sm:h-[100vh]
      md:w-[339px] md:h-[800px] md:px-0 md:py-0
      lg:w-[33%] lg:max-w-[400px] lg:h-[800px] 
    `}
    >
      <div
        className={`
        w-[100%] h-[100%]
        rounded-[50px] bg-[#e3e3e3] 
        shadow-[20px_20px_60px_#c1c1c1,-20px_-20px_60px_#ffffff]
        px-[30px] py-[40px]
        flex flex-col justify-between items-center gap-[5%]
        `}
      >
        <div className={"flex flex-row items-center w-full font-bold"}>
          Recent Posts
        </div>
        <div className={"flex flex-col w-full h-full justify-between"}>
          <NeumorphButton
            className={"h-[15%] flex flex-row items-center text-left"}
          >
            <a
              href={
                "https://dev.to/eatnug/codepush-fy-your-react-native-app-in-5-minutes-2el7"
              }
            >
              🔫 Codepush-fy your react-native app in 5 minutes!
            </a>
          </NeumorphButton>
          <NeumorphButton
            disabled
            className={"h-[15%] flex flex-row items-center"}
          >
            <a>🚧 WIP</a>
          </NeumorphButton>
          <NeumorphButton
            disabled
            className={"h-[15%] flex flex-row items-center"}
          >
            <a>🚧 WIP</a>
          </NeumorphButton>
          <NeumorphButton
            disabled
            className={"h-[15%] flex flex-row items-center"}
          >
            <a>🚧 WIP</a>
          </NeumorphButton>
          <NeumorphButton
            disabled
            className={"h-[15%] flex flex-row items-center"}
          >
            <a>🚧 WIP</a>
          </NeumorphButton>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
