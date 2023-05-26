import React from 'react'
import { useParams } from 'react-router-dom'

function Cast() {
    const {movieId} = useParams()
    // тут делаем http запрос по инф о фильме
  return (
    <div>
       `тут информация o фильме по Id фильма {movieId}`
    </div>



  )
}

export default Cast

// const {movieId} = useParams()
// // console.log(`тут информа ${movieId}`)
//   return (
//     <div>
//       Reviews info `тут информация отзывы по Id фильма ${movieId}`
//     </div>
//   )