import { useState } from "react";
import {
  IndianRupee,
  TrendingUp,
  Wallet,
  CalendarDays,
  RotateCcw,
  Info,
  TrendingDown,
} from "lucide-react";

// import { useNavigate } from "react-router-dom";

import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import SIPCalculator from "./Pages/Home/SipCalculator.jsx";

// function App() {
//   const [count, setCount] = useState(0)

//   // const navigate = useNavigate();

//   return (
//     <>
//       <section id="center">

//        <div className="min-h-screen bg-slate-100 px-4 py-10 text-slate-800 sm:px-6"> 
//         <div className="mx-auto max-w-5xl">
//           {/* Header Area */}
//           <header className="mb-10 text-center bg-indigo-100 rounded-xl py-3 px-3">
//             <div className="bg-indigo-600 rounded-2xl shadow-lg shadow-indigo-200 text-white w-14 h-14 mb-4 mx-auto flex justify-center items-center">
//               <TrendingUp size={28}

//               // onClick={(e) => {
//               //   navigate("/home/SIP");
//               // }}

//               />
//             </div>

//           <h1 className="text-3xl font-bold sm:text-4xl">
//             SIP Returns Calculator
//           </h1>
//           <p className="mt-3 text-sm text-slate-500 sm:text-base">
//             Plan your future monthly investments and estimate your future wealth
//           </p>
//           </header>

//           {/* Calculator */}
//           <main>
//             <section>
//               <p> Hello! </p>
//             </section>
//           </main>


//         </div>



//         </div>


//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>


//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/home" element={<Home/>}/> */}
        {/* Default route: redirect / to /home */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        <Route path="/home" element={<Home/>}/>
        <Route path="/home/sip-calculator" element={<SIPCalculator/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App
