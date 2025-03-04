// import { useParams } from 'react-router-dom';

// import { useSelector, useDispatch } from 'react-redux';
// import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

// import { setActiveSong, playPause } from '../redux/features/playerSlice';
// import { useGetSongDetailsQuery, useGetTopChartsQuery } from '../redux/Services/shazamCore';
// import{ SongBar} from '../components';




// const SongDetails = () => {
//     const dispatch = useDispatch();
//     const { songid } = useParams();
//     const { activeSong, isPlaying } = useSelector((state) => state.player);
//     const { data: songData} = useGetSongDetailsQuery({ songid });
// const {data, isFetching, error} = 
// useGetTopChartsQuery();
 
// const handlePauseClick = () => {
//   dispatch(playPause(false));  
// };

// const handlePlayClick = (song, i) => {
//   dispatch(setActiveSong({ song, data, i }));  
//   dispatch(playPause(true)); 
// };
// if (isFetching) return <Loader title="loading songs..." />;

// if (error) return <Error />;



//  return(
// //     <div className='flex flex-col'>
// //         <DetailsHeader artistId="" songData={songData} />
// //    <div className='mb-10'>
// //     <h2 className='text-white text-3xl font-bold'>Lyrics: </h2>
   
// //     <div className='mt-5'>
// //   {data?.sections?.[0]?.type === 'TEXT' &&
// //     data.sections[0]?.text.map((line, i) => (
// //       <p className="text-gray-400 text-base my-1" key={i}>{line}</p>
// //     ))
// //   }
// //   {!data?.sections?.[0]?.text && (
// //     <p className="text-gray-400 text-base my-1">Sorry, No lyrics found!</p>
// //   )}
 
// // </div>

// //     <h1 className="font-bold text-3xl text-white">Related Songs:</h1>
// //    </div>

// //    {data.tracks.map((song, i) => (

// //               <SongBar 
// //               key={song.key}
// //               song={song}
// //               i={i}
// //               activeSong={activeSong}
// //               isPlaying={isPlaying}
// //               handlePauseClick={handlePauseClick}
// //              handlePlayClick={handlePlayClick}
// //               />
// //           ))}
//     // </div>
//  )
// };

// export default SongDetails;
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { setActiveSong, playPause } from '../redux/features/playerSlice';
import { useGetSongDetailsQuery, useGetSongRelatedQuery } from '../redux/Services/shazamCore';
;

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  // const { data, isFetching: isFetchinRelatedSongs, error } = useGetSongRelatedQuery({ songid });
  const { data: songData, isFetching: isFetchingSongDetails } = 
  useGetSongDetailsQuery({ songid });

  // if (isFetchingSongDetails && isFetchinRelatedSongs) return <Loader title="Searching song details" />;

  // console.log(songid);
  console.log(songData)

  // if (error) return <Error />;

  // const handlePauseClick = () => {
  //   dispatch(playPause(false));
  // };

  // const handlePlayClick = (song, i) => {
  //   dispatch(setActiveSong({ song, data, i }));
  //   dispatch(playPause(true));
  // };

  return (
    <div className="flex flex-col">
      {/* <DetailsHeader
        artistId={artistId}
        songData={songData}
      /> */}

      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics </h2>

        <div className="mt-5">
          {songData?.sections[1].type === 'LYRICS'
            ? songData?.sections[1]?.text.map((line, i) => (
              <p className="text-gray-400 text-base my-1">{line}</p>
            ))
            : (
              <p className="text-gray-400 text-base my-1">Sorry, No lyrics found!</p>
            )}
        </div>
      </div>

      {/* <RelatedSongs
        data={data}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      /> */}

    </div>
  );
};

export default SongDetails;
