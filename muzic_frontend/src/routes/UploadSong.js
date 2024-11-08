import { SolarCupMusicLinear } from '../logo/whitelogo';
import IconText from '../components/shared/IconText';
import { Icon } from '@iconify/react';
import TextwithHover from '../components/shared/TextwithHover';
import TextInput from '../components/shared/TextInput';
import CloudinaryUpload from '../components/shared/CloudinaryUpload';
import { useState } from 'react';
import { makeAuthenticatedPOSTRequest } from '../utils/serverHelper';
import { useNavigate } from 'react-router-dom';



const UploadSong = () => {
    const [name,setName]=useState("")
    const [thumbnail,setThumbnail]=useState("")
    const [Url,setUrl]=useState(null)
    const [uploadedSongFileName,setUploadedSongFileName]=useState()
    const navigate=useNavigate();

    const submitSong =async ()=>{
        const data={name,thumbnail,track:Url};
        const response=await makeAuthenticatedPOSTRequest("/song/create",data);
        console.log(response);
        if (response.err){
            alert("Could not create song");
            return ;
        }
        alert("Success");
        navigate("/home");
        
    }
    
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
              iconName={'material-symbols-light:library-music'}
              displayText={'My Music'}
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
        <div className="content p-8 pt-0 overflow-auto">
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
            {
                uploadedSongFileName ?
                (<div className="bg-white rounded-full p-3 w-1/3">{uploadedSongFileName.substring(0,35)}...</div>)
                :
                (<CloudinaryUpload setUrl={setUrl} setName={setUploadedSongFileName} />)

            }
          </div>
          <button className="w-1/6 p-3 rounded-full font-semibold flex items-center justify-center bg-white mt-5" onClick={submitSong}>Submit Song</button>
        </div>
      </div>
    </div>
  );
};



export default UploadSong;
