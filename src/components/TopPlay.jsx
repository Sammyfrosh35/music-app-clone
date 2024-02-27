import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import PlayPause from "./PlayPause";
import { useGetTopChartsQuery } from "../redux/Services/shazamCore";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import "swiper/css";
import "swiper/css/free-mode";

const TopChartCard = ({ song }) => (
  <div
    className="w-full flex flex-row items-center 
  hover:bg[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2"
  >
    {song.title}
  </div>
);
const TopPlay = (song, i) => {
  const dispatch = useDispatch();
  const { setActiveSong, isPlaying } = useSelector((state) => state.player);
  const { data, isLoading, isError } = useGetTopChartsQuery();
  const divRef = useRef(null);

  //  console.log(data)
  if (isLoading) {
    // You can return a loading state or wait for data to be fetched
    return <p>Loading...</p>;
  }

  if (isError) {
    // Handle error state, you can log the error or show an error message
    console.error("Error fetching top charts data");
    return <p>Error fetching data</p>;
  }

  const topPlays = data.tracks.slice(0, 5);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  }, []); 

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div
      ref={divRef}
      className="xl:ml-6 ml-0 xl:mb-0 mb-6 
  flex-1 xl:max-w-[500px] max-w-full flex flex-col"
    >
      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Top Charts</h2>
          <Link to="/top-charts">
            <p className="text-gray-300 text-base cursor-pointer"> See more</p>
          </Link>
        </div>
        <div className="mt-4 flex flex-col gap-1">
          {topPlays?.map((song, i) => (
            <TopChartCard key={song.key} song={song} i={i} />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col mt-8">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Top Artistss</h2>
          <Link to="/top-artists">
            <p className="text-gray-300 text-base cursor-pointer"> See more</p>
          </Link>
        </div>


      <Swiper 
      slidesPerView="auto"
      spaceBetween={15}
      freeMode
      centeredSlides
      centeredSlidesBounds
      modules={[FreeMode]}
      className="mt-4"
      >
        {topPlays?.map((song, i)=> (
          <SwiperSlide
          key={song?.key}
          style={{width: '25%', height: 'auto'}}
          className="shadow-lg rounded-full animate-slideright">
            <Link to={`/artists/${song?.artists[0].admid}`}>
              <img src={song?.images.background} alt="name" className="
              rounded-full object-cover"/>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
};

export default TopPlay;
