import { SolarCupMusicLinear } from '../logo/whitelogo';
import IconText from '../components/shared/IconText';
import { Icon } from '@iconify/react';
import TextwithHover from '../components/shared/TextwithHover';
import TextInput from '../components/shared/TextInput';
import CloudinaryUpload from '../components/shared/CloudinaryUpload';
import { useState } from 'react';
import { makeAuthenticatedPOSTRequest } from '../utils/serverHelper';
import { useNavigate } from 'react-router-dom';
import LoggedInContainer from '../containers/LoggedInContainer';

const UploadSong = () => {
  const [name, setName] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [Url, setUrl] = useState(null);
  const [uploadedSongFileName, setUploadedSongFileName] = useState();
  const navigate = useNavigate();

  const submitSong = async () => {
    const data = { name, thumbnail, track: Url };
    const response = await makeAuthenticatedPOSTRequest('/song/create', data);
    console.log(response);
    if (response.err) {
      alert('Could not create song');
      return;
    }
    alert('Success');
    navigate('/home');
  };

  return (
    <LoggedInContainer>
      <div className="mt-10 text-white text-3xl font-semibold">
        Upload Your Music
      </div>
      <div className="w-2/3 flex space-x-4">
        <div className="w-1/2">
          <TextInput
            label="Name"
            labelclassName="text-white"
            placeholder="Name"
            value={name}
            setValue={setName}
          />
        </div>
        <div className="w-1/2">
          <TextInput
            label="Thumbnail"
            labelclassName="text-white"
            placeholder="Thumbnail"
            value={thumbnail}
            setValue={setThumbnail}
          />
        </div>
      </div>
      <div className="mt-5">
        {uploadedSongFileName ? (
          <div className="bg-white rounded-full p-3 w-1/3">
            {uploadedSongFileName.substring(0, 35)}...
          </div>
        ) : (
          <CloudinaryUpload setUrl={setUrl} setName={setUploadedSongFileName} />
        )}
      </div>
      <button
        className="w-1/6 p-3 rounded-full font-semibold flex items-center justify-center bg-white mt-5"
        onClick={submitSong}
      >
        Submit Song
      </button>
    </LoggedInContainer>
  );
};

export default UploadSong;
