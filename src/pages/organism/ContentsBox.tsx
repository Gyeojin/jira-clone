const ContentsBox = (props: { title: string }) => {
  // const [contentsArr, setContentsArr] = useState([]);
  return (
    <div className="each_cont_box">
      <div className="title text-left text-sm w-full pb-2.5">{props.title}</div>
      <button className="add_board_btn flex items-center justify-start w-full p-2.5">
        <i></i>
        <span>이슈 만들기</span>
      </button>
      <div className="content"></div>
    </div>
  );
};

export default ContentsBox;
