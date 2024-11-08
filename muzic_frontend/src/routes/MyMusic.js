
import { Howl,Howler } from 'howler';
import { makeAuthenticatedGETRequest } from '../utils/serverHelper';
// import LoggedInContainer from '../containers/LoggedInContainer';
import { SolarCupMusicLinear } from '../logo/whitelogo';
import IconText from '../components/shared/IconText';
import { Icon } from '@iconify/react';
import TextwithHover from '../components/shared/TextwithHover';

import { useState ,useEffect} from 'react';
import SingleSongCard from '../components/shared/SingleSongCard';
import LoggedInContainer from '../containers/LoggedInContainer';


// const songData = [
//   {
//     thumbnail:
//       'https://images.pexels.com/photos/975656/pexels-photo-975656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     name: 'Believer',
//     artist: 'Imagine Dragons',
//   },
// ];
const MyMusic = () => {
  const [songData, setSongData] = useState([]);
  const [soundPlayed,setSoundPlayed]=useState(null);

  const playSound= (songSrc)=>{
    if (soundPlayed){
        soundPlayed.stop()
    }
    let sound=new Howl({
        src:[songSrc],
        html5:true,
    })
    setSoundPlayed(sound);
    sound.play();
  }

  useEffect(() => {
    const getData = async () => {
      const response = await makeAuthenticatedGETRequest('/song/get/mysongs');
      setSongData(response.data);
    };
    getData();
  }, []);

  return (
    // <LoggedInContainer curActiveScreen="myMusic">
    //   <div className="text-white text-xl font-semibold pb-4 pl-2 pt-8">
    //     My Songs
    //   </div>
    //   <div className="space-y-3 overflow-auto">
    //     {songData.map((item) => {
    //       return <SingleSongCard info={item} playSound={() => {}} />;
    //     })}
    //   </div>
    // </LoggedInContainer>
    <LoggedInContainer curActiveScreen="mymusic">
      <div className="content text-white p-8  overflow-auto">
        <div className="text-white font-semibold text-xl pb-4">My Music</div>
        {songData.map((item) => {
          return <SingleSongCard info={item} playSound={playSound} />;
        })}
      </div>
    </LoggedInContainer>
  );
};

export default MyMusic;
