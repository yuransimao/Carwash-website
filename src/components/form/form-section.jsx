import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"


export default function FormSection() {
  return  <Form />
}

 
export function Form() {
  return(
    <>
      <Input type="name" placeholder="Name" />
      <Input type="email" placeholder="Email" />
      <Textarea placeholder="Description"/>
      <Button type="submit">Send Request</Button>
    </>
  )
}