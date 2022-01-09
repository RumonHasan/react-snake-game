import { useEffect, useRef, useState } from "react";
   //animate loop
export const useAnimationHook = callback =>{
    const reqTimeRef = useRef();
    const prevTimeRef = useRef();

    const animate = (time)=>{
        if(prevTimeRef.current !== undefined){
            const deltaTime = time - prevTimeRef.current;
            callback(deltaTime);
        }
        prevTimeRef.current = time;
        reqTimeRef.current = requestAnimationFrame(animate);
    }

    useEffect(()=>{
        reqTimeRef.current = requestAnimationFrame(animate);
        return ()=>{
        cancelAnimationFrame(reqTimeRef.current);
        }
    },[])
}