import React from 'react';
import { Link } from 'react-router-dom';

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="flex-1 mt-4 flex items-center justify-start w-[60%]">
    {/* if song is playing, then animate image in clock wise direction */}
    <Link to={`/songs/${activeSong?.key}`}>
      <div className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} hidden sm:block h-16 w-16 mr-4`}>
        <img src={activeSong?.images?.coverart} alt="cover art" className="rounded-full" />
      </div>
    </Link>
    <div className="w-[70%]">
      <p className="truncate text-white font-bold text-lg">
        <Link to={`/songs/${activeSong?.key}`}>
          {activeSong?.title ? activeSong?.title : 'No active Song'}
        </Link>
      </p>
      <p className="truncate text-gray-300">
        <Link to={activeSong.artists ? `/artists/${activeSong?.artists[0]?.adamid}` : '/top-artists'}>
          {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}
        </Link>
      </p>
    </div>
  </div>
);

export default Track;

// round circular image of current active song, song name and artist name.
