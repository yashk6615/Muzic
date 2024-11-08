
import { Howl, Howler } from 'howler';
import { useState } from 'react';
import LoggedInContainer from '../containers/LoggedInContainer';


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

const LoggedInHomeComponent = () => {
   

  return (
    <LoggedInContainer curActiveScreen={"home"}>
      <PlaylistView titleText="Focus" cardsData={focusCardsData} />
      <PlaylistView titleText="Trending " cardsData={MuzicPlaylistCardsData} />
      <PlaylistView titleText="Your Kind" cardsData={focusCardsData} />
    </LoggedInContainer>
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

export default LoggedInHomeComponent;
