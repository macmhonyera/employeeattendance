import React from 'react'

const Auth = (props) => {
    return (
        <div className="h-screen bg-auto flex items-center p-20 2xl:p-24">
          
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
              <div className="bg-gray-200 flex flex-col justify-center rounded-l-md pb-10">
                  <label className="text-center text-4xl font-bold p-2">
                    {props.title}
                  </label>
                  {props.children}
              </div>
              <div className="w-auto h-auto rounded-r-lg">
              {/* <div className="bg-back-image w-[full] h-[700px] object-fit rounded-r-lg" /> */}
              <img className="w-auto h-full rounded-r-md" src={require("../../assets/background.jpg")}></img>
              </div>
            </div>
          </div>
      );
}

export default Auth