import PageWrapper from "./pwrapper";
import GlareHover from "./ui/GlareHover";
function Form() {
    return (
        <>
            <PageWrapper>
                <div className="page w-full h-screen  bg-white py-16 px-4">
                    <div className="page-content">

                        <GlareHover>
                            <div className="card bg-[#82667F] rounded-lg shadow-md flex items-center justify-center">
                                <h1 className="text-2xl">Socials</h1>
                            </div>
                        </GlareHover>
                        
                        <GlareHover>
                            <div className="card bg-[#DD9AC2] rounded-lg shadow-md flex flex-col items-center justify-center">
                                <button className="text-2xl">
                                    <a href="https://www.instagram.com/EclecticNailsKe/">instagram</a>
                                </button>
                            </div>
                        </GlareHover>
                    </div>
                </div>
            </PageWrapper>
        </>
    );
}
export default Form;