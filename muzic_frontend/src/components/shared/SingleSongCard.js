import { useContext } from 'react';
import songContext from '../../contexts/songContext';
import { thumbnail } from '@cloudinary/url-gen/actions/resize';

const SingleSongCard = ({ info, playSound }) => {
  const {currentSong,setCurrentSong} = useContext(songContext);
  
 
  
  return (
    <div
      className="flex hover:bg-gray-400 hover:bg-opacity-20 p-2 rounded-sm"
      onClick={()=>{
        setCurrentSong(info);
      }}
    >
      <div
        className="w-12 h-12 bg-cover bg-center  "
        style={{
          backgroundImage: `url("${info.thumbnail}")`,
        }}
      ></div>
      <div className="w-full flex">
        <div className="text-white flex justify-center flex-col pl-4 w-5/6">
          <div className="hover:underline cursor-pointer">{info.name}</div>
          <div className="text-xs text-gray-400 hover:underline cursor-pointer">
            {info.artist.firstname + ' ' + info.artist.lastname}
          </div>
        </div>
        <div className="w-1/6 flex items-center justify-center text-gray-400 text-sm">
          <div>3:44</div>
        </div>
      </div>
    </div>
  );
};

export default SingleSongCard;
