import { FaRegHeart } from 'react-icons/fa';

type Props = {
  text: string;
  section: string;
};

export default function Header({ text, section }: Props) {
  return (
    <>
      <div className="header">
        <div className="column-third text">
          <p className="header-text">{text}</p>
        </div>
        <div className="column-third">
          <p className="section">{section}</p>
        </div>
        <div className="column-third">
          <div className="favorites">
            <p className="favorites-text">Favorites</p>
            <FaRegHeart className="heart" />
          </div>
        </div>
      </div>
    </>
  );
}
