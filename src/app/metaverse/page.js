"use client";
import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import MapFloor from "../../components/ThreeD/MapFloor";
import Lights from "../../components/ThreeD/Lights";
import { Character } from "../../components/ThreeD/Character";
import { Sky } from "@react-three/drei";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "antd";



export default function Page() {
  const testing = false;
  return (
    <div>
      <ToastContainer />
      <div className=" h-[100vh] relative">
        {/* Segmented Control in the top center with only icons */}
       
    
     


        {/* Controls for Movement */}
        <div className="absolute bottom-4 left-4 z-20">
          <div className="flex">
            <div className="flex flex-col items-center ml-4">
              <Button
                shape="default"
                style={{
                  width: 60,
                  height: 60,
                  margin: 1,
                  borderRadius: 5,
                  opacity: 0.9,
                }}
              >
                <div className="text-center flex flex-col">
                  <div className="text-lg font-bold">W</div>
                  <div className="text-xs font-thin">Forward</div>
                </div>
              </Button>
              <div className="flex flex-row">
                <Button
                  shape="default"
                  style={{
                    width: 60,
                    height: 60,
                    margin: 1,
                    borderRadius: 5,
                    opacity: 0.9,
                  }}
                >
                  <div className="text-center flex flex-col">
                    <div className="text-lg font-bold">A</div>
                    <div className="text-xs font-thin">Left</div>
                  </div>
                </Button>
                <Button
                  shape="default"
                  style={{
                    width: 60,
                    height: 60,
                    margin: 1,
                    borderRadius: 5,
                    opacity: 0.9,
                  }}
                >
                  <div className="text-center flex flex-col">
                    <div className="text-lg font-bold">S</div>
                    <div className="text-xs font-thin">Backward</div>
                  </div>
                </Button>
                <Button
                  shape="default"
                  style={{
                    width: 60,
                    height: 60,
                    margin: 1,
                    borderRadius: 5,
                    opacity: 0.9,
                  }}
                >
                  <div className="text-center flex flex-col">
                    <div className="text-lg font-bold">D</div>
                    <div className="text-xs font-thin">Right</div>
                  </div>
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-center ml-4">
              <div className="flex flex-row">
                <Button
                  shape="default"
                  style={{
                    width: 60,
                    height: 60,
                    margin: 1,
                    borderRadius: 5,
                    opacity: 0.9,
                  }}
                >
                  <div className="text-center flex flex-col">
                    <div className="text-lg font-bold">1</div>
                    <div className="text-xs font-thin">Emote</div>
                  </div>
                </Button>
                <Button
                  shape="default"
                  style={{
                    width: 60,
                    height: 60,
                    margin: 1,
                    borderRadius: 5,
                    opacity: 0.9,
                  }}
                >
                  <div className="text-center flex flex-col">
                    <div className="text-lg font-bold">2</div>
                    <div className="text-xs font-thin">Emote</div>
                  </div>
                </Button>
              </div>
              <Button
                shape="default"
                style={{
                  width: 70,
                  height: 60,
                  margin: 1,
                  borderRadius: 5,
                  opacity: 0.9,
                }}
              >
                <div className="text-center flex flex-col">
                  <div className="text-lg font-bold">SHIFT</div>
                  <div className="text-xs font-thin">Sprint</div>
                </div>
              </Button>
            </div>
          </div>
        </div>

        <Canvas
          shadows
          camera={{ position: [0, 30, 55], fov: 50 }}
          style={{ zIndex: 0 }}
        >
          {testing ? <axesHelper visible={testing} args={[200]} /> : null}
          {testing ? <gridHelper args={[200, 200]} /> : null}
          <OrbitControls />
          {testing ? <Stats /> : null}
          <Lights />
            <Sky 
            distance={45000} 
            sunPosition={[1, 0.5, 0]}
            turbidity={1}
            rayleigh={0.05}
            mieCoefficient={0.0008}
            mieDirectionalG={0.95}
          />
          <MapFloor />
          <Character />
        
        </Canvas>
      </div>






    </div>
  );
}
