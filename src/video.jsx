import React, { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./App.css";
// import myPeer from "./peer";
// import socket from "./socket";

// export default function Video() {
//   const ref = useRef(null);
//   const { ROOM_ID } = useParams();
//   const myVideo = useRef(null);
//   const peers = {};

//   useEffect(() => {
//     return () => {
//       navigator.mediaDevices
//         .getUserMedia({ video: true, audio: true })
//         .then((stream) => {
//           addVideoStream(myVideo.current, stream);

//           myPeer.on("call", (call) => {
//             call.answer(stream);
//             const video = document.createElement("video");
//             call.on("stream", (userVideoStream) => {
//               addVideoStream(video, userVideoStream);
//             });
//           });

//           socket.on("user-connected", (userId) => {
//             console.log("userconnected", userId);
//             connectToNewUser(userId, stream);
//           });
//         });

//       socket.on("user-disconnected", (userId) => {
//         if (peers[userId]) peers[userId].close();
//       });

//       myPeer.on("open", (id) => {
//         socket.emit("join-room", ROOM_ID, id);
//       });
//     };
//   }, []);

//   function connectToNewUser(userId, stream) {
//     const call = myPeer.call(userId, stream);
//     const video = document.createElement("video");
//     call.on("stream", (userVideoStream) => {
//       addVideoStream(video, userVideoStream);
//     });
//     call.on("close", () => {
//       video.remove();
//     });

//     peers[userId] = call;
//     console.log(peers, "peerspeers");
//   }

//   function addVideoStream(video, stream) {
//     video.srcObject = stream;
//     video.addEventListener("loadedmetadata", () => {
//       video.play();
//     });
//     if (ref.current) {
//       ref.current.append(video);
//     }
//   }

//   return (
//     <div className="App">
//       <div id="video-grid" ref={ref}>
//         <video ref={myVideo} muted width={100} height={100}></video>
//       </div>
//     </div>
//   );
// }
