import PageWrapper from './pwrapper'
import idcover from '../components/images/idcover.png'
import GlareHover from './ui/GlareHover';
import TextType from './ui/TextType';

function About() {
    return (

    <PageWrapper>
      <div className="page w-full h-screen  bg-white py-16 px-4">
          <div className="page-content flex justify-center items-center  h-full">
            
              <GlareHover>
                <div className='card bg-[#DD9AC2] rounded-lg shadow-md flex items-center justify-center'>
                  <img className='w-50 h-50 ' src={idcover} alt="" />
                  <div className="cardtext flex-col items-center">
                    <h1 className='text-2xl  text-white underline'>ECLECTIC nails </h1>
                    <p className=' text-center  p-2 m-4 mr-10 text-[#ffffff] whitespace-nowrap'>your nails your canvas</p>
                  </div>
                    {/* <div className="col-span-1 row-span-1 flex  w-10  h-10 items-center justify-center p-7 mr-16 ">
                      <CircularText
                        text=" your nails, your canvas*"
                        onHover="speedUp"
                        spinDuration={20}
                        className="custom-class"
                      ></CircularText>
                    </div> */}
                
                </div>
              </GlareHover>
          
 
            <GlareHover>
              <div className='card bg-[#82667F] rounded-lg shadow-md flex flex-col items-center justify-center '>
                <h2 className=' flex justify-center items-center text-2xl font-bold m-4 text-[white]'>About</h2>
                <div className='tsuki flex justify-center p-4 m-4 text-[#ffffff]'>
                  
                 <TextType 
                  text={["Its ABOUT time you got your nails done!", "AHAHA get it?", "I do nails, come get your nails done"]}
                  typingSpeed={75}
                  pauseDuration={2500}
                  showCursor={true}
                  cursorCharacter="|"
                  font-family='Indie Flower'
                />  
                </div>
              </div>
            </GlareHover>
          </div>
      </div>
    </PageWrapper>
  );
}
  
  export default About;