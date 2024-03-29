import { Button } from "..";

import wipin2 from "@/assets/wiping2.jpg"

export default function AboutSection() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            <img
            src={ wipin2 }
            alt="Wiping"
            className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
            />
        
            <div className="mx-auto max-w-2xl px-6 lg:px-8 bg-slate-300 rounded-lg overflow-hidden shadow-lg">
                <div className="mx-auto max-w-2xl lg:mx-0 bg-white-smoke bg-opacity-50 p-6 rounded-lg">
                    <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
                        We have the latest equipments
                    </h2>
            
                    <p className="mt-6 text-lg leading-8 text-gray-900">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi optio ducimus accusamus quia assumenda suscipit maiores maxime ratione quibusdam? Consequuntur dolorem, nesciunt molestiae repellendus architecto nam eaque totam nisi sequi.
                    </p>

                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7  sm:grid-cols-2 md:flex lg:gap-x-10 ">
                            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border-none">
                                About Us
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}