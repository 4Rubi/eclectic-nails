import PageWrapper from './pwrapper'
import GlareHover from './ui/GlareHover';
function page1() {
  

  return (
    <>
      <PageWrapper>
        <div className='page w-full h-screen  bg-white py-10 px-4'>
          <div className="page-content">
            <GlareHover> 
              <div className="card bg-[#B486AB] rounded-lg shadow-md flex items-center justify-center ">
                 <h1 className='text-2xl p-3'>Schedule</h1>
              </div>
            </GlareHover> 
            <GlareHover> 
              <div className="card bg-[#B486AB] rounded-lg shadow-md flex flex-col items-center justify-center">
                <p className='text-xl'>Friday - Sunday</p>
                <p className='text-xl'>8:00am - 5:00pm</p>
                <p className='text-xl'>Daystar University, Athi River</p>
              </div>
            </GlareHover> 
          </div>
        </div>
      </PageWrapper>


  </>
  )
}

export default page1;
