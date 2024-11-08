import { openUploadWidget } from '../../utils/CloudinaryService';
import { cloudinay_upload_preset,cloudinary_cloudname } from '../../config';
const CloudinaryUpload = ({setUrl,setName}) => {
  const uploadSongWidget = () => {
    
    let myUploadWidget = openUploadWidget(
      {
        cloudName: cloudinary_cloudname,
        uploadPreset: cloudinay_upload_preset,
        sources: ['local'],
      },
      function (error, result) {
        if (!error && result.event === 'success') {
          setUrl(result.info.secure_url);
          setName(result.info.original_filename)
        } else {
          if (error) {
            console.log(error);
          }
        }
      }
    );
    myUploadWidget.open();
  };

  return (
    <button className="text-black bg-white rounded-full font-semibold px-5 py-4 " onClick={uploadSongWidget}>
      Select Song
    </button>
  );
};

export default CloudinaryUpload;
