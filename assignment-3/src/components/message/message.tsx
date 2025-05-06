interface MessageProps {
  message: string;
}

const Message = ({ message }: MessageProps) => {
  return <div>{message}</div>;
};

export default Message;
