import React from 'react'
import Notifications from '../../components/Notifications'
import { jwtDecode } from 'jwt-decode';

const TopNav = (props) => {

    const[ user, setUser ] = React.useState(null);
  const decoded = jwtDecode(sessionStorage.getItem("access_token"));

  console.log("Decoded data",decoded)

  React.useEffect(()=>{
    async function getData(){
      const decoded= jwtDecode(sessionStorage.getItem('access_token'));
       const result = decoded;
       setUser(result)

    }
    getData()
  },[])

  return (
    <div className='nav-bar flex flex-row justify-between bg-slate-50 w-full h-20 shadow'>
        <div className='p-4 font-bold'>
            <h1 className='text-xl font-bold text-gray-900 dark:text-white text-left'>
                <span className='text-transparent bg-clip-text bg-gradient-to-r to-[#2f0071] from-[#983367]'>
                    {props.title}
                </span>
            </h1>
        </div>
        <div className='inline-flex items-center space-x-2 pr-8'>
            <Notifications/>
            <div className='flex items-center space-x-2'>
                <img src={require("../../assets/profile.jpg")}
                className={`rounded-full w-10 h-10`}
                alt=''
                />
                <div className='relative flex flex-col items-center pt-2'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r to-[#2f0071] from-[#983367]'>
                        <p className='font-bold whitespace-pre'>{decoded.username}</p>
                    </span>
                    <span className='text-transparent bg-clip-text bg-gradient-r to-red-500 from-blue-400'>
                        <p className='text-gray-300'>Admin</p>
                    </span>
                </div>
            </div>

        </div>

    </div>
  )
}

export default TopNav