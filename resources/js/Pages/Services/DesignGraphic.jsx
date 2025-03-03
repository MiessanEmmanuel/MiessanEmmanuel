import PageConstruction from "@/Components/PageConstruction"
import Header from "@/Layouts/Header"


const DesignGraphic = () => {
    return (
        <>
            <Header />
            <div className=" flex-col items-center justify-center mt-[8em]">
               <div className="mb-5">
                <h2 className="text-center  font-bold text-3xl lg:text-4xl font-bold  bg-gradient-to-r from-white  to-secondary text-transparent bg-clip-text" >Design Graphic </h2>
               </div>
                <PageConstruction />
            </div>
        </>
    )
}
export default DesignGraphic
