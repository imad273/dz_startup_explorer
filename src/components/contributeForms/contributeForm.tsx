"use client";

import React, { useEffect } from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useForm, useFormState } from 'react-hook-form'
import * as z from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import useContribute from '@/hooks/useContribute';
import { motion } from 'framer-motion';

const formSchema = z.object({
  name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name can not have numbers or symbols",
  }).min(5, { message: "Invalid name" }),
  email: z.string({
    required_error: "Email is required"
  }).email({ message: "Invalid email address" }),
})

type schemaType = z.infer<typeof formSchema>

const contributeForm = () => {
  const form = useForm<schemaType>({
    resolver: zodResolver(formSchema),
  })

  const [submitRequest, { data, loading }] = useContribute();

  const submit = async (values: schemaType) => {
    submitRequest(values)

    data && console.log(data);
  }

  return (
    <div className='w-full pt-5'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submit)}>
          <div>
            <p className='pb-2 font-semibold'>Tell us about you</p>

            <div className='grid grid-cols-2 gap-3'>
              <motion.div
                initial={{ opacity: 0, x: "10%" }}
                animate={{ opacity: 1, x: "00%" }}
                transition={{ duration: 0.6, delay: 0.1 }} >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <div className='pb-3'>
                      <FormItem>
                        <FormLabel>Your name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} value={field.value ?? ''} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    </div>
                  )}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "10%" }}
                animate={{ opacity: 1, x: "00%" }}
                transition={{ duration: 0.6, delay: 0.1 }} >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <div className='pb-3'>
                      <FormItem>
                        <FormLabel>Your Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Email" {...field} value={field.value ?? ''} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    </div>
                  )}
                />
              </motion.div>
            </div>
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}

export default contributeForm