import React, { useState, useRef } from "react";

export default function Email(props) {
  return props.trigger ? (
    <div className="fixed inset-0 flex items-center justify-center p-12 bg-black bg-opacity-50">
      <div className="mx-auto w-full max-w-[550px] bg-white rounded-lg shadow-md p-8">
        <form method="POST">
          <div className="mb-5">
            <input
              type="text"
              name="Full-Name"
              id="name"
              placeholder="Full Name"
              className="w-full rounded-md border border-[#020202] py-3 px-6 text-base font-medium text-[#040404] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <input
              type="email"
              name="Email"
              id="email"
              placeholder="example@domain.com"
              className="w-full rounded-md border border-[#070707] py-3 px-6 text-base font-medium text-[#060606] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <input
              type="text"
              name="Subject"
              id="subject"
              placeholder="Enter your subject"
              className="w-full rounded-md border border-[#050505] py-3 px-6 text-base font-medium text-[#020303] outline-none focus:border-[#f18764] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <textarea
              rows="4"
              name="Message"
              id="message"
              placeholder="Please include the services you wanted..."
              className="w-full resize-none rounded-md border border-[#0d0d0d] py-3 px-6 text-base font-medium text-[#000000] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="hover:shadow-form rounded-md text-[#0d0d0d] bg-green-500 py-3 px-8 text-base font-semibold outline-none"
            >
              Submit
            </button>
            <button
              onClick={() => props.setTrigger(false)}
              className="hover:shadow-form ml-5 rounded-md text-[#040404] bg-green-500 py-3 px-8 text-base font-semibold outline-none"
            >
              Close
            </button>
            {props.children}
          </div>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
}
// import React, { useState, useRef } from "react";

// export default function Email(props) {

//   return props.trigger ? (
//     <div className="fixed  inset-0 flex tems-center justify-center p-12 ">
//       <div className=" mx-auto  w-full max-w-[550px]  ">
//         <form method="POST">
//           <div className="mb-5">
//             <input
//               type="text"
//               name="Full-Name"
//               id="name"
//               placeholder="Full Name"
//               className="w-full rounded-md border border-[#020202]  py-3 px-6 text-base font-medium text-[#040404] outline-none focus:border-[#6A64F1] focus:shadow-md"
//             />
//           </div>
//           <div className="mb-5">
//             <input
//               type="email"
//               name="Email"
//               id="email"
    
//               placeholder="example@domain.com"
//               className="w-full rounded-md border border-[#070707]  py-3 px-6 text-base font-medium text-[#060606] outline-none focus:border-[#6A64F1] focus:shadow-md"
//             />
//           </div>
//           <div className="mb-5">
          
//             <input
//               type="text"
//               name="Subject"
//               id="subject"
        
//               placeholder="Enter your subject"
//               className="w-full rounded-md border border-[#050505]   py-3 px-6 text-base font-medium text-[#020303] outline-none focus:border-[#f18764] focus:shadow-md"
//             />
//           </div>
//           <div className="mb-5">
        
//             <textarea
//               rows="4"
//               name="Message"
//               id="message"
            
//               placeholder=" Please include the services you wanted..."
//               className="w-full resize-none rounded-md border border-[#0d0d0d] py-3 px-6 text-base font-medium text-[#000000] outline-none focus:border-[#6A64F1] focus:shadow-md"
//             ></textarea>
//           </div>
//           <div>
//             <button
//               type="submit"
//               className="hover:shadow-form rounded-md text-[#0d0d0d] bg-green-500  py-3 px-8 text-base font-semibold  outline-none "
//             >
//               Submit
//             </button>

//             <button
//               onClick={() => props.setTrigger(false)}
//               className="hover:shadow-form ml-5 rounded-md text-[#040404] bg-green-500  py-3 px-8 text-base font-semibold outline-none "
//             >
//               Close
//             </button>
//             {props.children}
//           </div>
//         </form>
//       </div>
//     </div>
//   ) : (
//     ""
//   );
// }
