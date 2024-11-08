const express=require("express")
const router=express.Router();
const Playlist=require("../Models/Playlist")
const User=require("../Models/User")
const Song=require("../Models/Song")
const passport=require("passport")

router.post(
  '/create',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
   const currentUser=req.user;
   const {name,thumbnail,songs}=req.body;
   const PlaylistData={
    name,
    thumbnail,
    songs,
    owner:currentUser._id,
    collaborators:[],
   };
   const playlist=await Playlist.create(PlaylistData);
   return res.status(200).json(playlist);
  }
);

router.get("/get/playlist/:playlistId",passport.authenticate("jwt",{session:false}),async (req,res)=>{
    const playlistId=req.params.playlistId;
    const playlist=await Playlist.findOne({_id:playlistId});
    if (!playlist){
        return res.status(301).json({error:"Invalid ID"})
    }
    return res.status(200).json(playlist);
})

router.get("/get/artist/:artistId",passport.authenticate("jwt",{session:false}),async (req,res)=>{
    const artistId=req.params.artistId;

    const artist= await User.findOne({_id: artistId});
    if (!artist){
        return res.status(304).json({error:"Invalid Artist Id"})
    }
    const playlists=await Playlist.find({owner: artistId});
    return res.status(200).json({data: playlists})
})

router.post("/add/song",passport.authenticate("jwt",{session:false}),async (req,res)=>{
    const currentUser=req.user;
    const {playlistId,songId}=req.body;
    const playlist=await Playlist.findOne({_id:playlistId});
    if (!playlist){
        return res.status(304).json({error:"Playlist does not exist"})
    }

    if (!playlist.owner.equals(currentUser._id) && !playlist.collaborators.includes(currentUser._id)){
        return res.status(400).json({error:"Not allowed"})
    }

    const song=await Song.findOne({_id:songId});
    if (!song){
        return res.status(304).json({error:"Song does not exist"})
    }

    playlist.songs.push(song);
    await playlist.save();

    return res.status(200).json(playlist);
})

module.exports= router