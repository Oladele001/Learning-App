import React from 'react'
import { useState } from 'react'

const Learning = () => {
   
    const [first, setFirst] = useState(0)

    const items = [
        {letter: 'A',
            word: 'For Apple',
            Image: 'https://media.istockphoto.com/id/584226186/photo/green-apple.webp?a=1&b=1&s=612x612&w=0&k=20&c=VNntCM3sU8UCbhE-8hUO_foVIkZodDoAFAbaG6gKTMU='
          },
          {letter: 'B',
            word: 'For BALL',
            Image: 'https://media.istockphoto.com/id/182148488/photo/an-isolated-soccer-ball-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=qS5cy4kvUXHk71Pujf_sfR_kOUeiEvVqtb8bxLlttP8='
          },
          {letter: 'C',
            word: 'For CAT',
            Image: 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENhdHxlbnwwfHwwfHx8MA%3D%3D'
          },
          {letter: 'D',
            word: 'For DOG',
            Image: 'https://plus.unsplash.com/premium_photo-1722859221349-26353eae4744?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RE9HfGVufDB8fDB8fHww'
          },
          {letter: 'E',
            word: 'For EGG',
            Image: 'https://plus.unsplash.com/premium_photo-1671022581636-e711d888af04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGVnZ3xlbnwwfHwwfHx8MA%3D%3D'
          },
          {letter: 'F',
            word: 'For FLOWER',
            Image: 'https://plus.unsplash.com/premium_photo-1683134066903-aef20412abf3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RkxPV0VSfGVufDB8fDB8fHww'
          },
          {letter: 'G',
            word: 'For GOAT',
            Image: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29hdHxlbnwwfHwwfHx8MA%3D%3D'
          },
          {letter: 'H',
            word: 'For HOUSE',
            Image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8fDA%3D'
          },
          {letter: 'I',
            word: 'For Ice',
            Image: 'https://images.unsplash.com/photo-1578323851363-cf6a1a6afbb6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aWNlfGVufDB8fDB8fHww'
          },
          {letter: 'J',
            word: 'For JAGUAR',
            Image: 'https://media.istockphoto.com/id/1152709116/photo/jaguar-looking-at-camera-pantanal-wetlands-brazil.webp?a=1&b=1&s=612x612&w=0&k=20&c=v4aDbytK6UaeOjUj3eYEtrFu7YUCz3aZt5HtBAnLTUM='
          },
          {letter: 'K',
            word: 'For KING',
            Image: 'https://media.istockphoto.com/id/2163807109/photo/retro-office-royalty-business-man-wears-kings-crown.webp?a=1&b=1&s=612x612&w=0&k=20&c=qfKQqG-bSGbaxudGLwjMfbjyw1JaHn2N2TmHOQwOf_A='
          },
          {letter: 'L',
            word: 'For LION',
            Image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGlvbnxlbnwwfHwwfHx8MA%3D%3D'
          },
          {letter: 'M',
            word: 'For MONKEY',
            Image: 'https://images.unsplash.com/photo-1605559911160-a3d95d213904?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9ua2V5fGVufDB8fDB8fHww'
          },
          {letter: 'N',
            word: 'For NURSE',
            Image: 'https://media.istockphoto.com/id/1419093800/photo/portrait-of-smiling-nurse-wearing-uniform-standing-at-hospital-ward.webp?a=1&b=1&s=612x612&w=0&k=20&c=jM4MMyHXtfV7VyYH31per8O8hX4c8cwvDGGiIVAPt8Y='
          },
          {letter: 'O',
            word: 'For ORANGE',
            Image: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9yYW5nZXxlbnwwfHwwfHx8MA%3D%3D'
          },
          {letter: 'P',
            word: 'For Pen',
            Image: 'https://plus.unsplash.com/premium_photo-1679826780158-bef9a5b575b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVufGVufDB8fDB8fHww'
          },
          {letter: 'Q',
            word: 'For QUEEN',
            Image: 'https://images.unsplash.com/photo-1545828751-0a3b3a1da949?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cXVlZW58ZW58MHx8MHx8fDA%3D'
          },
          {letter: 'R',
            word: 'For RABBIT',
            Image: 'https://images.unsplash.com/photo-1535241749838-299277b6305f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJpZyUyMHJhYmJpdHxlbnwwfHwwfHx8MA%3D%3D'
          },
          {letter: 'S',
            word: 'For SEA',
            Image: 'https://plus.unsplash.com/premium_photo-1669131388906-2179e2b8a439?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2VhfGVufDB8fDB8fHww'
          },
          {letter: 'T',
            word: 'For TREE',
            Image: 'https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.webp?a=1&b=1&s=612x612&w=0&k=20&c=kiQ0Oc52rpY5wnYKPf-tLEfQ3BlwG7p0DH2-bealCn4='
          },
          {
            letter:'U',
            word: 'For umbrella',
            Image: 'https://images.unsplash.com/photo-1584096309831-9e9906c9e996?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dW1icmVsbGFyfGVufDB8fDB8fHww'
          },
          {
            letter:'V',
            word: 'For Van',
            Image: 'https://images.unsplash.com/photo-1563729494519-6cef8197f355?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZhbnxlbnwwfHwwfHx8MA%3D%3D'
          },
          {
            letter:'W',
            word: 'For Woman',
            Image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tYW58ZW58MHx8MHx8fDA%3D'
          },
          {
            letter:'X',
            word: 'For Xylophone',
            Image: 'https://plus.unsplash.com/premium_photo-1667490647415-d2c05c51e49a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8eHlsb3Bob25lfGVufDB8fDB8fHww'
          },
          {
            letter:'Y',
            word: 'For Yam',
            Image: 'https://media.istockphoto.com/id/1395343560/photo/whole-and-halved-raw-african-yam-on-wooden-background.jpg?s=612x612&w=0&k=20&c=QyRZYcrD9_goJRqqxW0GoJ2dwsK5rrZ6NtznYJFeAig='
          },
          {
            letter:'Z',
            word: 'For Zebra',
            Image: 'https://images.unsplash.com/photo-1503656142023-618e7d1f435a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8WmVicmF8ZW58MHx8MHx8fDA%3D'
          }
    ]

    const next = () =>{
        if( first < items.length - 1){
            setFirst(first + 1)
        }
    }

    const previous = () =>{
        if( first > 0 ){
            setFirst(first - 1)
        }
    }



  return (
    <div className='m-auto w-[37rem] mt-0 h-[65rem] border-2 border-b-black md:w-[45rem] md:bg-amber-600 md:h-[35]'>
        <h1 className='text-4xl font-bold ml-[9rem] mt-[2rem] md:ml-[12rem]'> My Learning App</h1>
        <div className='w-[26rem] h-[26rem] border-8 flex mt-[3rem] justify-center rounded-full m-auto md:rounded-none'>
            <img className='w-[24rem] h-[24rem] rounded-full bg-black mt-1.5 md:rounded-none' src={items[first].Image} alt="no internet connection" />
        </div>
        <div className='w-[15rem] m-auto h-[12rem] mt-[5rem] grid justify-center'>
            <h1 className=' font-bold text-4xl ml-[4rem]'>{items[first].letter}</h1>
            <h1 className=' font-bold text-4xl'>{items[first].word}</h1>
        </div>

        <div className='mt-[5rem] w-[26rem] m-auto h-[4rem] border-black'>
            <button className='w-[10.5rem] h-[4.5rem] text-xl font-medium rounded-2xl bg-black text-gray-100 mr-[2rem] ' onClick={previous}>PREVIOUS</button>
            <button className='w-[7.5rem] h-[4.5rem] text-xl font-medium rounded-2xl bg-black text-gray-100 ml-[5rem] ' onClick={next}>NEXT</button>
        </div>

    </div>
  )
}

export default Learning