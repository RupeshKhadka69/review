import React, { useState } from "react";
import myimage from "../assets/myimage.jpg";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";

const data = [
    {
      img: myimage,
      name: "Susan Smith",
      position: "Web Developer",
      description: `I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry`,
    },
    {
      
      img: photo1,
      name: "Anna Johnson",
      position: "Web Designer",
      description: `Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.`,
    },
    {
      img: photo2,
      name: "peter jones",
      position: "intern",
      description: `Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.`,
    },
    {
      img: photo3,
      name: "bill anderson",
      position: "the boss",
      description: `Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. `,
    },
  ]

const Slider = () => {
   const [count, setCount] = useState(0)
   const {img,name,position,description}= data[count]

   const numberSet = (number) => {
    if(number > data.length - 1){
      return 0;
    }
    if (number < 0){
      return data.length - 1
    }
    return number

   }

   const nextBtn = () => {
    setCount((count) => {
      let newCount = count + 1
      return numberSet(newCount)
    }) 
   }

   const prevBtn = () => {
    setCount((count) => {
      let newCount = count - 1
      return numberSet(newCount)
    })
   }

   const randomNumber = () => {
     setCount(() => {
      let rnumber = Math.floor(Math.random() * data.length)
       
      if(rnumber == count){
        rnumber = count + 1
      } 
      return numberSet(rnumber)
    })

   }
    

return (
    <div className="grid px-6 place-items-center  min-h-screen">
      <div className="box rounded-md hover:shadow-2xl duration-300 ease-in p-12 border-2  bg-white max-w-3xl w-11/12 ">
        <div className="relative img image w-40 h-40 mx-auto">
          <img className=" relative w-full h-full object-cover
           rounded-full" src={img} alt="main" />
          <span className="bg-blue-600 p-2 rounded-full absolute top-2 left-4">
            <svg
              stroke="white"
              fill="white"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
            </svg>
          </span>
        </div>
        <div className="info pt-4  grid place-items-center">
          <h1 className="text-2xl  f-nunito">{name}</h1>
          <h1 className="mb-4 text-blue-400">{position}</h1>
          <p className="md:px-10 mb-4  text-center ">
            {description}
          </p>
        </div>
        <div className="btn  gap-4 mb-4 flex justify-center">
          <button onClick={prevBtn} className="text-lg" >
            <svg
              stroke="#645cff"
              fill="#645cff"
              stroke-width="0"
              viewBox="0 0 320 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
            </svg>
          </button>
          <button  onClick={nextBtn} className="text-lg " >
            <svg
              stroke="#645cff"
              fill="#645cff"
              stroke-width="0"
              viewBox="0 0 320 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
            </svg>
          </button>
        </div>
        <div className="btn2 flex justify-center">
          <button onClick={randomNumber} className="border-2 px-3 text-purple-600 ease-in duration-300 bg-purple-300 hover:bg-purple-600 hover:text-gray-200">
            Surprise Me
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Slider;
