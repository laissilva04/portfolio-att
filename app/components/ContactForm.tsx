"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { CheckCircle } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, { message: "Nome precisa ter no minimo 2 caracteres." }),
  email: z.string().email({ message: "Insira um email válido." }),
  phoneNumber: z.string().min(10, { message: "Insira um telefone válido." }),
  message: z.string().min(10, { message: "A Mensagem deve ter no minimo 10 caracteres." }),
})

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      setIsSubmitted(true)
      form.reset()

      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 2000)
  }

  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden" id="contato">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="container mx-auto px-2 py-10 relative z-10">
        <div className="max-w-2xl mx-auto" >
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Contato
            </h2>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-2">Mensagem Enviada!</h3>
                <p className="text-gray-400">Obrigada por entrar em contato! :)</p>
              </motion.div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white text-base font-normal">Nome</FormLabel>
                        <FormControl>
                          <Input
                            className="h-14 bg-transparent border border-gray-600 text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-lg"
                            placeholder="Seu nome completo"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white text-base font-normal">Email</FormLabel>
                        <FormControl>
                          <Input
                            className="h-14 bg-transparent border border-gray-600 text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-lg"
                            type="email"
                            placeholder="seu@email.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white text-base font-normal">Telefone</FormLabel>
                        <FormControl>
                          <Input
                            className="h-14 bg-transparent border border-gray-600 text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-lg"
                            type="tel"
                            placeholder="(85) 99999-9999"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white text-base font-normal">Mensagem</FormLabel>
                        <FormControl>
                          <Textarea
                            className="min-h-[120px] bg-transparent border border-gray-600 text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-lg resize-none"
                            placeholder="Me envie uma mensagem"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full h-14 text-blue-500 text-blue-700 text-white font-medium text-base rounded-lg transition-colors duration-200"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </div>
                    ) : (
                      "Enviar Mensagem"
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
