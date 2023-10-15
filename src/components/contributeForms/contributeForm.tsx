"use client";

import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import * as z from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const formSchema = z.object({
  name: z.string().min(2).max(50),
  location: z.string().min(2).max(50),
})

const contributeForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  return (
    <div className='container flex items-center justify-center min-h-[85vh]'>
      <div className='w-5/6'>
        <h2 className='mb-12 text-4xl font-bold text-center text-headingText'>Request To add</h2>
        <Form {...form}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <div className='pb-3'>
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </div>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <div className='pb-3'>
                <FormItem>
                  <FormLabel>Loaction</FormLabel>
                  <FormControl>
                    <Input placeholder="Location" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </div>
            )}
          />
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </div>
  )
}

export default contributeForm