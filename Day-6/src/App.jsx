import React, { useRef } from 'react'

const App = () => {
  console.log('App render')
  const InputRef=useRef({})
  console.log(InputRef)
 
  const handleChange=(e)=>{
    e.preventDefault()
    console.log(InputRef.current.name.value)
   
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

        <form className="space-y-3" onSubmit={handleChange}>
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
              Full Name
            </label>
            <input
              id="name"
              type="text"
             
              placeholder="Enter your name"
              ref={(e) => (InputRef.current.name = e)}
              className="w-full rounded-md border border-slate-300 px-4 py-2 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              ref={(e) => (InputRef.current.email = e)}
              className="w-full rounded-md border border-slate-300 px-4 py-2 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label htmlFor="subject" className="mb-1 block text-sm font-medium text-slate-700">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Enter subject"
              ref={(e) => (InputRef.current.subject = e)}
              className="w-full rounded-md border border-slate-300 px-4 py-2 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">
              Message
            </label>
            <textarea
              id="message"
              rows="2"
              placeholder="Write your message"
              ref={(e) => (InputRef.current.message = e)}
              className="w-full resize-none rounded-md border border-slate-300 px-4 py-2 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  )
}

export default App
