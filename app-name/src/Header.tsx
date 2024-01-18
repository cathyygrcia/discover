import { FaRegHeart } from 'react-icons/fa';

type Props = {
  text: string;
  section: string;
};

export default function Header({ text, section }: Props) {
  return (
    <>
      <div className="header">
        <div className="column-third ">
          <p className="header-text">{text}</p>
        </div>
        <div className="column-third">
          <p className="section">{section}</p>
        </div>
        <div className="column-third">
          <FaRegHeart className="heart" />
        </div>
      </div>
    </>
  );
}
