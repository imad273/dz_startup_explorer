"use client";

import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import * as z from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import useContribute from '@/hooks/useContribute';
import { motion } from 'framer-motion';

const formSchema = z.object({
  name: z.string().min(2).max(50),
  location: z.string().min(2).max(50),
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
    <div className='w-full pt-6'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submit)}>
          <motion.div
            initial={{ opacity: 0, x: "10%" }}
            animate={{ opacity: 1, x: "00%" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <div className='pb-3'>
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Name" {...field} value={field.value ?? ''} />
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
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <div className='pb-3'>
                  <FormItem>
                    <FormLabel>Loaction</FormLabel>
                    <FormControl>
                      <Input placeholder="Location" {...field} value={field.value ?? ''} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </div>
              )}
            />
          </motion.div>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}

export default contributeForm