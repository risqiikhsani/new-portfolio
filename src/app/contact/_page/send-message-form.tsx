
"use client"
import { toast } from 'sonner';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
    email: z.string().min(2).max(50),
    message: z.string(),
})


export default function SendMessageForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            message: "",
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.

        console.log(values)
        const data = {
            email: values.email,
            message: values.message,
        };


        try {
            const response = await fetch('/api/contact', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            });
        
            if (response.ok) {
              const result = await response.json();
              console.log(result.message); // Email sent successfully!
              toast.success("Message sent successfully")
              form.reset()
            } else {
              console.error('Failed to send email');
              toast.warning("Failed to send message")
              form.reset()
            }
          } catch (error) {
            console.error('Failed to send email:', error);
            toast.warning('Something went wrong.')
            form.reset()
          }
    }


    return (
        <div className="bg-emerald-400 p-10">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>email</FormLabel>
                            <FormControl>
                                <Input placeholder="your@gmail.com" {...field} />
                            </FormControl>
                            <FormDescription>
                                Please provide your email.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea {...field} />
                            </FormControl>
                            <FormDescription>
                                Send me message.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <p>{form.formState.isSubmitting && "Loading..."}</p>
                <Button type="submit">Submit</Button>
            </form>
        </Form>
        </div>

    )
}