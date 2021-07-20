//@ts-ignore
import { ReactFlvPlayer } from 'react-flv-player'
import React, { FC } from "react";


const Player: FC<{ url: string, width: number, height: number }> = ({ url, width, height }) => {
  return (
    <div>
      <ReactFlvPlayer
        url={url}
        width={`${width}px`}
        heigh={`${height}px`}
        isMuted={false}
        isLive={true}
      />
    </div>
  );
};

export default Player;
