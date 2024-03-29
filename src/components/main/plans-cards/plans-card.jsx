import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { Button } from "../.."
import { CircleCheck, X } from "lucide-react"
  
export default function PlansCard() {
  return (
    <div className="flex justify-center">
        <CardPlan title="Basic Cleaning" price="$49.99"  />
        <CardPlan title="Premium Cleaning" price="$149.99" emphasize/>
        <CardPlan title="Deep Cleaning" price="$99.99" />
    </div>
  )
}

export function CardPlan({ title, price, emphasize }){
    return(
        <Card className={`border-2 ${emphasize ? 'border-gray-600' : 'border-transparent'} bg-white rounded-3xl shadow-md p-6`}>
            <CardHeader className="header flex justify-between items-center mb-4">
                <CardTitle>
                    <p className="title text-lg font-medium">{ title }</p>
                </CardTitle>
                <CardDescription className="price-container">
                    <span>$</span>{ price }
                </CardDescription>
            </CardHeader>
          <CardContentList emphasize={ emphasize } />
            <CardFooter className="button-container flex justify-center">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Book Now
                </Button>
            </CardFooter>
        </Card>
    )
}

function CardContentList({ emphasize }) {
    return (
      <CardContent>
        <p className="flex items-center"><span className="mr-2">{emphasize ? <CircleCheck /> : <X />}</span>Seats Washing</p>
            <p className="flex items-center"><span className="mr-2">{emphasize ? <CircleCheck /> : <X />}</span>Floor Washing</p>
            <p className="flex items-center"><span className="mr-2">{emphasize ? <CircleCheck /> : <X />}</span>Window Cleaning</p>
            <p className="flex items-center"><span className="mr-2">{emphasize ? <CircleCheck /> : <X />}</span>Interior Vacuum</p>
            <p className="flex items-center"><span className="mr-2">{emphasize ? <CircleCheck /> : <X />}</span>Exterior Wash</p>
            <p className="flex items-center"><span className="mr-2">{emphasize ? <CircleCheck /> : <X />}</span>Tire Shine</p>
        </CardContent>
    );
  }
