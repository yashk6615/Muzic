import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const TextwithHover = ({ displayText, active ,targetLink}) => {
  return (
    <Link to={targetLink}>
      <div className="flex items-center justify-start cursor-pointer">
        <div
          className={`${
            active ? 'text-white' : 'text-gray-400'
          } text-lg font-semibold hover:text-white`}
        >
          {displayText}
        </div>
      </div>
    </Link>
  );
};

export default TextwithHover;
