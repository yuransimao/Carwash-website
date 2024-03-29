import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel"

import carwash1 from "@/assets/carwash1.png"
import carwash2 from "@/assets/carwash2.jpg"
import wiping1 from "@/assets/wiping1.jpg"

export default function CarouselMain() {
  return (
    <>
        <Carousel>
            <CarouselContent>
                <CarouselItem>
                    <div className="relative isolate overflow-hidden bg-gray-200 py-24 sm:py-32">
                        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-1 sm:gap-y-8">
                            <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
                                Car Wash
                            </h2>
                            <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">&amp; Auto Detailing</h2>
                        </div>
                        <img
                            src={ carwash1 }
                            alt="Man Cleaning Car"
                            className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                        />
                    </div>
                </CarouselItem>

                <CarouselItem>
                    <div className="relative isolate overflow-hidden bg-gray-200 py-24 sm:py-32">
                        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-1 sm:gap-y-8">
                            <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
                                Car Wash
                            </h2>
                            <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">&amp; Auto Detailing</h2>
                        </div>
                        <img
                            src={ carwash2 }
                            alt="Man Cleaning Car"
                            className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                        />
                    </div>
                </CarouselItem>

                <CarouselItem>
                    <div className="relative isolate overflow-hidden bg-gray-200 py-24 sm:py-32">
                        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-1 sm:gap-y-8">
                            <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
                                Car Wash
                            </h2>
                            <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">&amp; Auto Detailing</h2>
                        </div>
                        <img
                            src={ wiping1 }
                            alt="Man Cleaning Car"
                            className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                        />
                    </div>
                </CarouselItem>
            </CarouselContent>
        </Carousel>
    </>
  )
}
