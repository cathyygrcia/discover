import { FaRegHeart } from 'react-icons/fa';
import { FaMagnifyingGlass } from 'react-icons/fa6';

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
          <FaMagnifyingGlass className="glass" />
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
