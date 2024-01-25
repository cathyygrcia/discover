import { FaRegHeart } from 'react-icons/fa';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

type Props = {
  text: string;
  section: string;
};

export default function Header({ text, section }: Props) {
  return (
    <>
      <div className="header">
        <div className="column-third text">
          <Link to="/">
            <p className="header-text">{text}</p>
          </Link>
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
