import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'

const App = () => {
  
  const { register, handleSubmit,reset , formState: { errors } } = useForm()
  console.log(errors)
  const handleFromSubmit = (data) => {
    console.log(data)
    reset()
  }
  return (
     <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-6">
      <section className="max-w-xl rounded-lg bg-white p-4 shadow-md sm:p-5">
        <div className="mb-4 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Contact Us</h1>
          <p className="mt-1 text-sm text-slate-600">
            Fill out the form below and we will get back to you soon.
          </p>
        </div>

        <form onSubmit={handleSubmit(handleFromSubmit)} className="space-y-3">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name",{required:'name is required',
                minLength: {
                  value: 3,
                  message: 'Name must be at least 3 characters',
                }
              })}

              placeholder="Enter your name"
             
              className="w-full rounded-md border border-slate-300 px-4 py-2 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              {...register("email",{required:'email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                }
              })}
              placeholder="Enter your email"
             
              className="w-full rounded-md border border-slate-300 px-4 py-2 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
              {errors.email && (
              <p className="text-red-500"> 

               {errors.email.message}</p>
            )} 
          </div>

          <div>
            <label htmlFor="subject" className="mb-1 block text-sm font-medium text-slate-700">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Enter subject"
              {...register("subject",{required:'subject is required'})}
              className="w-full rounded-md border border-slate-300 px-4 py-2 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
            {errors.subject && (
              <p className="text-red-500">{errors.subject.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">
              Message
            </label>
            <textarea
              id="message"
              rows="2"
              placeholder="Write your message"
              {...register("message",{required:'message is required' })}
              className="w-full resize-none rounded-md border border-slate-300 px-4 py-2 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
            {errors.message && (
              <p className="text-red-500">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-md  bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  )
}

export default App