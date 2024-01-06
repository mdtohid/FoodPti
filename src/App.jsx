import './App.css'
import Header from './Components/Header/Header'
import boyAvatar from './image/boyAvatar.png'

function App() {

  return (
    <div className='bg-[#EEEFF0]'>
      <Header></Header>
      {/* <div className='w-10/12 mx-auto flex items-center bg-[#F99F1C] ps-24 rounded-lg text-[#FFEFE7] mb-32'>
        <div>
          <h3 className='mb-6 text-4xl font-semibold'>Deliver Food To Your Door Step</h3>
          <p className='text-lg'>Authentic Food, Quick Service, Fast Delivery</p>
        </div>
        <div>
          <img src={boyAvatar} alt="" />
        </div>
      </div> */}
      <div className='w-10/12 mx-auto flex flex-col lg:flex-row items-center justify-center lg:bg-[#F99F1C] lg:ps-24 rounded-lg lg:text-[#FFEFE7] text-center lg:text-left mb-32'>
        <div className='mb-[19%] lg:mb-0'>
          <h3 className='mb-6 text-4xl font-semibold'>Deliver Food To Your Door Step</h3>
          <p className='text-lg'>Authentic Food, Quick Service, Fast Delivery</p>
        </div>
        <div className='bg-[#FD9460] rounded-lg lg:bg-transparent'>
          <img className='-mt-[19%] lg:mt-0' src={boyAvatar} alt="" />
        </div>
      </div>

      
    </div>
  )
}

export default App
