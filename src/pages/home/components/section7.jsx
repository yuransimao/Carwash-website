import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
    Separator
  } from "@/components"
function Section7() {


    const Question = [
        {
            question: 'What are the different types of car washing available?',
            answer: 'There are several types of car washing, such as basic (external) washing, full-service (internal and external) washing, dry washing, steam washing, among others. Each type caters to specific vehicle and customer needs.'
        },
        {
            question: 'What is the difference between basic and full-service washing?',
            answer: 'Basic washing typically focuses on the external cleaning of the vehicle, including washing the body, tires, and windows. Full-service washing, on the other hand, includes internal cleaning, such as vacuuming, cleaning the seats, dashboard, and other internal areas, in addition to external washing.'
        },
        {
            question: ' Is it safe to wash my car frequently?',
            answer: 'Yes, it is safe to wash your car frequently, as long as it is done properly and with products specifically designed for automobiles. Regular washing helps maintain the appearance and value of the vehicle, as well as protect the paint from dirt and damage.'
        },
        {
            question: 'Is dry washing effective?',
            answer: 'Yes, dry washing is an effective option for cleaning the car without using water. It uses specific products that remove dirt and grease from the vehicle\'s surface, leaving it clean and shiny. It is a sustainable and cost-effective alternative to traditional washing.'
        },
        {
            question: 'What are the benefits of steam washing?',
            answer: 'Steam washing offers several benefits, such as water savings, effective removal of dirt and germs, deep cleaning without the use of harsh chemicals, and preservation of the vehicle\'s paint and finish.'
        },
        /*
        {
            question: 'Is it recommended to wax the car after washing?',
            answer: 'Yes, waxing the car after washing is recommended. Wax helps protect the paint from the effects of sun, rain, pollution, and other external agents, as well as provide an extra shine and prolong the new appearance of the vehicle.'
        },
        {
            question: 'Can I wash my car engine during the wash?',
            answer: 'It is not recommended to wash the car engine during a regular wash, as this can damage electronic and mechanical components. For engine cleaning, it is best to seek a specialized service that uses appropriate techniques and products for this purpose.'
        },
        {
            question: 'What is the best time of year to wash the car?',
            answer: 'There is no specific time of year to wash the car, but it is important to avoid washing under strong sunlight or on very hot days, as this can cause paint stains due to rapid drying of water and cleaning products.'
        },
        {
            question: 'Does car washing remove scratches and imperfections in the paint?',
            answer: 'Regular car washing does not remove scratches and imperfections in the paint. To correct these issues, it is necessary to perform polishing, waxing, or specialized painting services, which should be done by qualified professionals.'
        },
        {
            question: 'Can I wash my car at home?',
            answer: 'Yes, you can wash your car at home, but it is important to follow recommendations and use appropriate products to avoid damaging the paint and finishes of the vehicle. Additionally, it is important to consider environmental and water conservation issues when washing the car at home.'
        }*/
    ];
  return (

    <React.Fragment>

        <div className='flex justify-center items-center mb-6'>
        <div className="w-9/12">
            <div className='flex flex-col justify-center items-center mb-8 gap-2'> 
            
            <h3 className='text-blue-700 font-semibold '>FAQ</h3>
          <Separator className="w-16 h-1 rounded-full bg-blue-500"/>
          <h2 className='text-2xl lg:text-3xl md:text-3xl font-semibold'>Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible className="w-full flex flex-col gap-4">

            {Question.map((item, index) => (
                <AccordionItem value={`item-${index}`} className='bg-zinc-300/10 border-none rounded-md px-4 shadow-none' key={index} >
                <AccordionTrigger className="hover:no-underline">
                    <h3 className='text-base font-medium'> <span className='text-blue-700'>{index + 1}.</span> {item.question}</h3>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-8" >
                <p className='text-sm'>
                    {item.answer}
                </p>
                </AccordionContent>
                    </AccordionItem>
            ))}
                  
                </Accordion>
        </div>
        </div>
    </React.Fragment>
  )
}

export {Section7}