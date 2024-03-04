import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { useGetSongsByCountryQuery } from '../redux/Services/shazamCore';

const CountryTracks = () => {
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  useEffect(() => {
    axios
      .get('https://geo.ipify.org/api/v2/country?apiKey=at_SoiAWvS49eJYay4FlL5sZB4HSPLBy')
      .then((res) => setCountry(res?.data?.location?.country))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const { data, isFetching, error } = useGetSongsByCountryQuery({ country });

  if (loading) return <Loader title="loading country information..." />;
  if (isFetching) return <Loader title="loading songs..." />;
  if (error) {
    console.error('Error fetching country tracks:', error);
    return <Error />;
  }

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Around you </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default CountryTracks;











// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useSelector } from 'react-redux';

// import { Error, Loader, SongCard } from '../components';
// import { useGetSongsByCountryQuery } from '../redux/Services/shazamCore';

// const CountryTracks = () => {
//   const [country, setCountry] = useState('');
//   const [loading, setLoading] = useState(true);
//   const { activeSong, isPlaying } = useSelector((state) => state.player);

//   useEffect(() => {
//     axios
//       .get('https://geo.ipify.org/api/v2/country?apiKey=at_SoiAWvS49eJYay4FlL5sZB4HSPLBy')
//       .then((res) => {
//         console.log('Country Information:', res?.data?.location?.country);
//         setCountry(res?.data?.location?.country);
//       })
//       .catch((err) => console.error('Error fetching country information:', err))
//       .finally(() => setLoading(false));
//   }, []);

//   const { data, isFetching, error } = useGetSongsByCountryQuery({ country });

//   if (loading) return <Loader title="loading country information..." />;
//   if (isFetching) return <Loader title="loading songs..." />;
//   if (error) {
//     console.error('Error fetching country tracks:', error);
//     return <Error />;
//   }

//   return (
//     <div className="flex flex-col">
//       <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Around you </h2>
//       <div className="flex flex-wrap sm:justify-start justify-center gap-8">
//         {data?.map((song, i) => (
//           <SongCard
//             key={song.key}
//             song={song}
//             isPlaying={isPlaying}
//             activeSong={activeSong}
//             data={data}
//             i={i}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CountryTracks;
