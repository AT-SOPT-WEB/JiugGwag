interface MessageProps {
  message: "warning" | "correct" | "wrong" | "";
  result?: string;
}

const Message = ({ message, result }: MessageProps) => {
  let content;

  switch (message) {
    case "warning":
      content = "서로 다른 숫자 3자리를 입력해주세요!";
      break;
    case "correct":
      content = "정답입니다! 3초뒤에 게임이 리셋 됩니다.";
      break;
    case "wrong":
      content = result;
      break;
    default:
      content = "";
  }

  return <div>{content}</div>;
};

export default Message;
