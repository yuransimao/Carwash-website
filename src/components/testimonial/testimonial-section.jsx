import { StarIcon } from 'lucide-react'; 

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"

import { 
  Card, 
  CardHeader, 
  CardContent
} from "@/components/ui/card"; 

export function TestimonialCard() {
  return (
    <Carousel className="w-full h-full">
      <CarouselContent className="flex justify-center items-center h-full">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="w-full max-w-xs">
              <Card className="bg-gray-200 p-8 rounded-lg shadow-lg">
                <CardHeader className="header flex items-center space-x-4 mb-4">
                  <div className="image w-16 h-16 bg-blue-500 rounded-full"></div>
                  <div className="flex flex-col items-center justify-center"> 
                    <p className="name text-xl font-semibold">John Doe</p>
                    <div className="stars flex space-x-1 justify-center">
                      {[...Array(5)].map((_, index) => (
                        <StarIcon key={index} className="h-5 w-5 text-yellow-500" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="message">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatem alias ut provident sapiente repellendus.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default function Testimonial(){
  return(
    <div className="h-screen">
      <div className="flex justify-center">
        <h2 className="font-bold tracking-tight text-slate-800 sm:text-4xl">What our clients say</h2>
      </div>
      <TestimonialCard />
    </div>
  )
}
