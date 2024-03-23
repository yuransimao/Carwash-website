import {
    Carousel,
    CarouselContent,
    CarouselItem
  } from "@/components/ui/carousel"
  
export default function CarouselMain() {
  return (
    <>
        <Carousel>
            <CarouselContent>
                <CarouselItem>
                    <div className="relative isolate overflow-hidden bg-gray-200 py-24 sm:py-32">
                        <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">Car Wash & Auto Detailing</h2>
                        <img
                            src=""
                            alt=""
                            className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                        />
                    </div>
                </CarouselItem>

                <CarouselItem>
                    <div className="relative isolate overflow-hidden bg-gray-200 py-24 px-10 sm:py-32 rounded-2xl">
                        <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">Car Wash & Auto Detailing</h2>
                        <img
                            src=""
                            alt=""
                            className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                        />
                    </div>
                </CarouselItem>

                <CarouselItem>
                    <div className="relative isolate overflow-hidden bg-gray-200 py-24 sm:py-32">
                        <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">Car Wash & Auto Detailing</h2>
                        <img
                            src=""
                            alt=""
                            className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                        />
                    </div>
                </CarouselItem>
            </CarouselContent>
        </Carousel>
    </>
  )
}
