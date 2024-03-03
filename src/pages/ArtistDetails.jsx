import { useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';


import { useGetArtistDetailsQuery } from '../redux/Services/shazamCore';
import{ SongBar} from '../components';




const ArtistDetails = () => {
   
    const { id: artistId } = useParams();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
  
const {data : artistData, isFetching, error} = 
useGetArtistDetailsQuery(artistId);
 
// const handlePauseClick = () => {
//   dispatch(playPause(false));  
// };

// const handlePlayClick = (song, i) => {
//   dispatch(setActiveSong({ song, data, i }));  
//   dispatch(playPause(true)); 
// };
if (isFetching) return <Loader title="loading songs..." />;

if (error) return <Error />;



 return(
    <div className='flex flex-col'>
        <DetailsHeader artistId={artistId} artistData={artistData} />

   {data.tracks.map((song, i) => (

              <RelatedSongs
              data={Object.values(artistData?.songs)}
              artistId={artistId}
              activeSong={activeSong}
              isPlaying={isPlaying}
            
              />
          ))}
    </div>
 )
};

export default ArtistDetails;
