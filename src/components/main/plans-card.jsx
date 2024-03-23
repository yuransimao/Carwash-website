import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { Button } from ".."
import { CircleCheck, X } from "lucide-react"
  
export default function PlansCard() {
  return (
    <>
        <CardTitle>Washing Plan</CardTitle>
        <CardDescription>Choose Your Plan</CardDescription>
        <CardPlan />
        <CardPlan />
        <CardPlan />
    </>
  )
}

export function CardPlan(){
    return(
        <Card>
            <CardHeader>
                <CardTitle>Basic Cleaning</CardTitle>
                <CardDescription>$49.99</CardDescription>
            </CardHeader>
            <CardContent>
                <p>
                    <CircleCheck /> 
                    Seats Washing
                </p>
                <p>
                    <CircleCheck />
                    <span>Seats Washing</span>
                </p>
                <p>
                    <X />
                    <span>Floor Washing</span>
                </p>
                <p>
                    <X />
                    <span>Floor Washing</span>
                </p>
                <p>
                    <X />
                    <span>Floor Washing</span>
                </p>
                <p>
                    <X />
                    <span>Floor Washing</span>
                </p>
            </CardContent>
            <CardFooter>
                <Button type="submit">Book now</Button>
            </CardFooter>
        </Card>
    )
}