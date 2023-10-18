import React from 'react'
import lang from '../Utils/Language'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const language = useSelector((store)=> store.config.lang)
    console.log(language)
  return (
    <div>
        <div className='absolute -z-10'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="netflix" />
      </div>
    
    <div className='p-[10%] '>
      <form className=' m-4 bg-black grid grid-cols-12 bg-opacity-70'>
        <input className='p-4 m-4 col-span-9 rounded-md' type="text" placeholder={lang[language].GptPlaceHolder}></input>
        <button className='col-span-3 m-4 py-2 px-2 bg-red-600 rounded-md'>{lang[language].search}</button>
      </form>
    </div>
    </div>
  )
}

export default GptSearchBar
