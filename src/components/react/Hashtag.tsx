type Props = {
  color: string;
  children: React.ReactNode;
};

const Hashtag = ({ children, color }: Props) => (
  <span className={`inline-block font-semibold`} style={{ color }}>
    #{children}
  </span>
);

export default Hashtag;
