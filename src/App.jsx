import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)



  const handleMarkAsRead = time  => {
    setReadingTime(readingTime + time)
    

  }


  const handleAddtoBookmark = blog => {
     const newBookmarks = [...bookmarks,blog]
     setBookmarks(newBookmarks)
  }
  return (
    <>
      <Header></Header>
      
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddtoBookmark = {handleAddtoBookmark} handleMarkAsRead = {handleMarkAsRead}></Blogs>
      <Bookmarks readingTime = {readingTime} bookmarks = {bookmarks}></Bookmarks>
      </div>
      
    </>
  )
}

export default App
