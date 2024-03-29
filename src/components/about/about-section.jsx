import { Button } from "..";
  
export default function AboutSection() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            <img
            src=""
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
            />
        
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">We have the latest equipments</h2>
                    
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi optio ducimus accusamus quia assumenda suscipit maiores maxime ratione quibusdam? Consequuntur dolorem, nesciunt molestiae repellendus architecto nam eaque totam nisi sequi.
                    </p>

                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                            <Button className="text-black" variant="outline">
                                About Us
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}