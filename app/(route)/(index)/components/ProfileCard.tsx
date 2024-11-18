import NeumorphButton from "@/app/components/blocks/NeumorphButton";

const ProfileCard = () => {
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
        flex flex-col justify-between items-center
        `}
      >
        <div
          className={
            "w-full flex flex-col justify-between items-center h-[calc(100%-220px)] pb-[30px]"
          }
        >
          <div
            className={`
            flex flex-col items-center min-h-[200px] justify-between
              `}
          >
            <div
              className={`
              bg-center bg-cover w-[140px] h-[140px] rounded-full 
              bg-[url('https://media.licdn.com/dms/image/v2/D5603AQGRqqD4v04Amw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731290152178?e=1737590400&v=beta&t=quWAy74G7VDvpqDz4mxyIGDQ0azCssWqwyIqd4dF3U8')]
              shadow-[10px_10px_30px_#c5c5c5,-10px_-10px_30px_#ffffff]
              `}
            />
            <div
              className={
                "flex flex-col items-center w-full text-center whitespace-break-spaces"
              }
            >
              {`Jake Park (JP)\nMaker, Programmer`}
            </div>
          </div>
          <div
            className={
              "hidden hsm:flex hsm:flex-col hsm:w-full hsm:flex-1 items-center justify-center"
            }
          >
            {`
                  I am a fullstack software engineer with frontend-focused experience.\n
                  I love to create something new and has real values that can help people.
                  `}
          </div>
        </div>
        <div className={"flex flex-col w-full min-h-[220px] justify-between"}>
          <a href={"https://www.linkedin.com/in/eatnug/"}>
            <NeumorphButton>LinkedIn</NeumorphButton>
          </a>
          <a href={"https://github.com/eatnug"}>
            <NeumorphButton>Github</NeumorphButton>
          </a>
          <a href={"https://github.com/eatnug/resume"}>
            <NeumorphButton>Resume</NeumorphButton>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
