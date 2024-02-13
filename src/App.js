import React from "react";
import { useState } from "react";
import './App.css'
// import Landing from "./components/Landing";

export default function App() {
   const [state, setState] = useState(1);
   const [click, setClick] = useState(0);

   function mouseOver() {
      if (state === 1) {
         setState((prevVal) => (prevVal += 2));
      } else if (state === 2) {
         setState((prevVal) => (prevVal += 2));
      } else if (state === 3) {
         setState((prevVal) => (prevVal -= 2));
      }
   }

   var mystyle = {
      left:
         state === 1 ? "43vw" : state === 2 ? "25vw" : state === 3 ? "15vw" : "", position: "absolute",
   };

   return (
      <>
         {click == 0 &&
            <div className="mx-auto my-32">
               <img src="https://media.tenor.com/1jrUvITt1QcAAAAi/github-sticker.gif" alt="" className="flex justify-center h-60 mb-10 mx-auto">
               </img>
               <p className="font-bold text-3xl text-center mb-2 text-pink-600">
                  Will you be my Valentine ?
               </p>
               <p className="font-bold text-lg text-center mb-10 text-pink-600 underline">
                  (ห้ามกดไม่)
               </p>

               <div className="flex gap-96 align-middle justify-center items-center">
                  <button onMouseOver={mouseOver} style={mystyle} type="button" class="font-bold text-xl px-5 py-3 run-btn text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 rounded-lg text-center me-2 mb-2">
                     ไม่ ;(
                  </button>

                  <button onClick={() => setClick(1)} type="button" class="font-bold text-xl ml-20 px-5 py-3 text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 rounded-lg text-center me-2 mb-2">
                     ก็ด้ะ
                  </button>
               </div>
            </div>
         }
         {
            click == 1 &&

            <div className="mx-auto my-40">
               <img src="https://media.tenor.com/7Ie2NGeUuFgAAAAi/cutecat.gif" alt="" className="flex justify-center h-60 mb-10 mx-auto" />
               <p className="font-bold text-3xl text-center mb-10 text-pink-600">
                  เย้ๆๆ น่ารักมากไอ้เตี้ย(มาก)
               </p>
               <div className="flex align-middle justify-center gap-2">
                  <button onClick={() => { alert('<3 <3 <3 ดูนี่ๆ'); setClick(2); }} type="button" class="font-bold text-xl px-5 py-3 text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 rounded-lg text-center">
                     กดนี่ๆ
                  </button>
                  <button onClick={() => { alert('ไม่ได้เฟ้ย'); setClick(2); }} type="button" class="font-bold text-xl px-5 py-3 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 rounded-lg text-center">
                     กวนตีนเกิน ขอเปลี่ยนใจ
                  </button>
               </div>
            </div>
         }
         {
            click == 2 &&
            <div className="mx-auto my-40">
               <div className="flex flex-col items-center justify-center gap-5">
                  <div className="flex items-center justify-center gap-3">
                     <img src={process.env.PUBLIC_URL + '/1.JPG'} alt="Logo" className=" h-80" />
                  </div>
                  <p className="font-semibold text-3xl text-pink-500">Happy Valentine ค้าบบ ไปเที่ยวกัน เย้ๆ 🥰🥰🥰</p>
               </div>
            </div>
         }
      </>
   );
}