import { SolarCupMusicLinear } from '../logo/whitelogo';
import IconText from '../components/shared/IconText';
import { Icon } from '@iconify/react';
import TextwithHover from '../components/shared/TextwithHover';
import { Howl, Howler } from 'howler';
import { useContext, useState,useLayoutEffect,useRef } from 'react';
import songContext from '../contexts/songContext';

const LoggedInContainer = ({ children,curActiveScreen }) => {
 
  const { currentSong, setCurrentSong ,soundPlayed,setSoundPlayed,isPaused,setIsPaused} = useContext(songContext);
  console.log(currentSong);

  const firstUpdate=useRef(true);

  useLayoutEffect(()=>{

    if (firstUpdate.current){
      firstUpdate.current=false;
      return;
    }
    if (!currentSong){
        return;
    }
    changeSong(currentSong.track);
  },[currentSong && currentSong.track]
);
   

  const playSound=()=>{
    if (!soundPlayed){
        return;
    }
    soundPlayed.play();
  }

  const changeSong = (songSrc) => {
    if (soundPlayed) {
      soundPlayed.stop();
    }
    let sound = new Howl({
      src: [songSrc],
      html5: true,
    });
    setSoundPlayed(sound);
    sound.play();
    setIsPaused(false);
  };

  const pauseSound = () => {
    soundPlayed.pause();
  };

  const togglePlayPause = () => {
    if (isPaused) {
      playSound();
      setIsPaused(false);
    } else {
      pauseSound();
      setIsPaused(true);
    }
  };

  return (
    <div className="w-full h-full bg-app-black">
      <div className={`${currentSong ? 'h-9/10' : 'h-full'} w-full flex`}>
        {/* {first Div will be left panel} */}
        <div className="h-full w-1/5 bg-black pt-3 flex flex-col justify-between pb-10">
          <div>
            <div className="logoDiv flex items-center justify-center mb-5 ">
              <SolarCupMusicLinear
                style={{ width: '70px', height: '70px', color: 'white' }}
              />
            </div>
            <div>
              <IconText
                iconName={'line-md:home-alt-twotone'}
                displayText={'Home'}
                active={curActiveScreen === 'home'}
                targetLink="/home"
              />
              <IconText
                iconName={'line-md:search-twotone'}
                displayText={'Search'}
                active={curActiveScreen === 'search'}
                targetLink="/search"
              />
              <IconText
                iconName={'material-symbols-light:library-music'}
                displayText={'My Music'}
                targetLink="/mymusic"
                active={curActiveScreen === 'mymusic'}
              />
              <IconText
                iconName={'fluent:library-32-filled'}
                displayText={'Your Library'}
                active={curActiveScreen === 'library'}
              />
            </div>
            <div className="pt-10">
              <IconText
                iconName={'material-symbols:add-box'}
                displayText={'Create Playlist'}
              />
              <IconText
                iconName={'fluent:heart-32-filled'}
                displayText={'Liked Songs'}
              />
            </div>
          </div>
          <div className="px-5">
            <div className="border border-gray-100 text-white w-2/5 rounded-full flex items-center justify-center">
              <div className="py-2">
                <Icon icon="ion:earth-sharp" />
              </div>
              <div className="ml-2">English</div>
            </div>
          </div>
        </div>

        <div className="h-full w-4/5 bg-app-black overflow-auto">
          <div className="navbar w-full h-1/10 bg-black bg-opacity-30 flex items-center justify-end">
            <div className="w-1/2 flex h-full">
              <div className="w-2/3 flex justify-around">
                <TextwithHover displayText={'Premium'} />
                <TextwithHover displayText={'Support'} />
                <TextwithHover displayText={'Download'} />
              </div>
              <div className="w-1/3 flex justify-around h-full items-center">
                <TextwithHover displayText={'Upload Song'} />
                <div className="Login w-10 h-10 bg-white text-black text-lg flex items-center justify-center rounded-full">
                  AC
                </div>
              </div>
            </div>
          </div>
          <div className="content p-8 pt-0 overflow-auto">{children}</div>
        </div>
      </div>

      {currentSong && (
        <div className="h-1/10 w-full bg-black bg-opacity-30 text-white flex items-center px-4">
          <div className="w-1/4 flex">
            <img
              src={currentSong.thumbnail}
              alt="currentsong"
              className="h-12 w-12 rounded-md"
            />
            <div className="pl-4 flex justify-center flex-col">
              <div className="text-sm">{currentSong.name}</div>
              <div className="text-xs">
                {currentSong.artist.firstname +
                  ' ' +
                  currentSong.artist.lastname}
              </div>
            </div>
          </div>
          <div className="w-1/2  h-full flex items-center justify-center  ">
            <div className="w-1/4 flex justify-between items-center">
              <Icon
                icon="fluent:arrow-shuffle-16-filled"
                fontSize={22}
                className="text-gray-400 hover:text-white"
              />
              <Icon
                icon="radix-icons:track-previous"
                fontSize={22}
                className="text-gray-400 hover:text-white"
              />

              <Icon
                icon={isPaused ? 'el:play-alt' : 'zondicons:pause-solid'}
                fontSize={30}
                className="text-gray-400 hover:text-white"
                onClick={() => {
                  togglePlayPause();
                }}
              />
              <Icon
                icon="radix-icons:track-next"
                fontSize={22}
                className="text-gray-400 hover:text-white"
              />
              <Icon
                icon="tabler:repeat-once"
                fontSize={22}
                className="text-gray-400 hover:text-white"
              />
            </div>
          </div>
          <div className="w-1/4 flex items-center justify-end">
            <Icon icon="iconamoon:heart" className="text-2xl" />
          </div>
        </div>
      )}
    </div>
  );
};

export default LoggedInContainer;
