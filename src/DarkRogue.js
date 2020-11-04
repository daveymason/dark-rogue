import React, {useRef, useEffect} from 'react';

const DarkRogue = ({width, height, tilesize}) => {
    const canvasRef = React.useRef(); //hook
    useEffect(() => {
        console.log("Draw");
        const ctx = canvasRef.current.getContext('2d');
        ctx.clearRect(0,0,width*tilesize,height*tilesize);
        ctx.fillStyle = '#000'
        ctx.fillRect(12,22,16,16);
    });
    return(
    <canvas 
        ref={canvasRef}
        width={width * tilesize}
        height={height * tilesize}
        style={{border: '3px solid black'}}>
    </canvas>
    );
};

export default DarkRogue;