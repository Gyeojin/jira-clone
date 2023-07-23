import ContentsBox from "./organism/ContentsBox";

const MainList = () => {
  return (
    <div className="w-full h-full px-5">
      <h1 className="main_title text-left py-2.5 text-xl font-bold">
        Jira-clone board
      </h1>
      <div className="main_cont_box flex w-full h-full">
        <ContentsBox title={"할 일"} />
        <ContentsBox title={"진행중"} />
        <ContentsBox title={"완료"} />
      </div>
    </div>
  );
};

export default MainList;
