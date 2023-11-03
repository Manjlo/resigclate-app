import { TemplateGeo } from "../templates/TemplateGeo"

function Geoviewer(){
    return(
        <div className="flex items-center justify-center h-screen">
            <section className="bg-white w-full h-full sm:w-[99%] sm:h-[98vh] sm:rounded-md sm:shadow-md">
                <TemplateGeo/>
            </section>
        </div>
    )
}

export { Geoviewer }