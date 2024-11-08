import { SolarCupMusicLinear } from '../logo/whitelogo';
import IconText from '../components/shared/IconText';
import { Icon } from '@iconify/react';
import TextwithHover from '../components/shared/TextwithHover';

const focusCardsData = [
  {
    title: 'Peaceful Piano',
    description: 'Relax and indulge with beautiful piano pieces',
    imgUrl:
      'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80',
  },
  {
    title: 'Deep Focus',
    description: 'Keep calm and focus with this music',
    imgUrl:
      'https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1766&q=80',
  },
  {
    title: 'Instrumental Study',
    description: 'Focus with soft study music in the background.',
    imgUrl:
      'https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
  },
  {
    title: 'Focus Flow',
    description: 'Up tempo instrumental hip hop beats',
    imgUrl:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  },
  {
    title: 'Beats to think to',
    description: 'Focus with deep techno and tech house',
    imgUrl:
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  },
];
const MuzicPlaylistCardsData = [
  {
    title: 'Top Trending 50 India',
    description: 'Relax and indulge with top trending India playlist',
    imgUrl:
      'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80',
  },
  {
    title: 'Top Trending 50 International',
    description: 'Relax and indulge with top trending International playlist',
    imgUrl:
      'https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1766&q=80',
  },
  {
    title: 'Instrumental Study',
    description: 'Focus with soft study music in the background.',
    imgUrl:
      'https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
  },
  {
    title: 'Focus Flow',
    description: 'Up tempo instrumental hip hop beats',
    imgUrl:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  },
  {
    title: 'Beats to think to',
    description: 'Focus with deep techno and tech house',
    imgUrl:
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  },
];


const HomeComponent = () => {
  return (
    <div className="w-full h-full flex ">
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
              active
            />
            <IconText
              iconName={'line-md:search-twotone'}
              displayText={'Search'}
            />
            <IconText
              iconName={'fluent:library-32-filled'}
              displayText={'Your Library'}
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
            <div className="w-3/5 flex justify-around">
              <TextwithHover displayText={'Premium'} />
              <TextwithHover displayText={'Support'} />
              <TextwithHover displayText={'Download'} />
            </div>
            <div className="w-2/5 flex justify-around h-full items-center">
              <TextwithHover displayText={'Sign Up'} />
              <div className="Login h-2/3 px-8 bg-white text-black text-lg flex items-center justify-center rounded-full">
                Log In
              </div>
            </div>
          </div>
        </div>
        <div className="content p-8 pt-0 overflow-auto">
          <PlaylistView titleText="Focus" cardsData={focusCardsData} />
          <PlaylistView titleText="Trending " cardsData={MuzicPlaylistCardsData}/>
          <PlaylistView titleText="Your Kind" cardsData={focusCardsData}/>
        </div>
      </div>
    </div>
  );
};

const PlaylistView = ({ titleText, cardsData }) => {
  return (
    <div className="text-white mt-8">
      <div className="text-2xl font-semibold mb-5">{titleText}</div>
      <div className="w-full flex  justify-center space-x-10">
        {cardsData.map((item) => {
          return (
            <Card
              title={item.title}
              description={item.description}
              imgUrl={item.imgUrl}
            />
          );
        })}
        {/* <Card
          title="Guitar's Melody"
          description="Dive deep into the acoustic world"
          imgUrl="https://images.pexels.com/photos/65716/pexels-photo-65716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Card
          title="Deep Focus"
          description="Keep calm and focus with this music"
          imgUrl="https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Card
          title="Instrumental study"
          description="Focus with soft music in the background"
          imgUrl="https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg"
        />
        <Card
          title="Focus Flow "
          description="Up tempo instrumental hip hop beats"
          imgUrl="https://images.pexels.com/photos/1024975/pexels-photo-1024975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Card
          title="Beats to think to"
          description="Focus with deep thinking"
          imgUrl="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        /> */}
      </div>
    </div>
  );
};

const Card = ({ title, description, imgUrl }) => {
  return (
    <div className="bg-black bg-opacity-60 w-1/6 p-4 rounded-lg">
      <div className="py-4">
        <img className="w-full rounded-md" src={imgUrl} alt=""></img>
      </div>
      <div className="text-white font-semibold py-3">{title}</div>
      <div className="text-gray-500 text-sm">{description}</div>
    </div>
  );
};

export default HomeComponent;
