import React, {useState} from 'react'

function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        keepLoggedIn: false,
      });
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === 'checkbox' ? checked : value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted', formData);
      };

  return (
    <>
    <div className="bg-white rounded-lg py-5">    
      <div className="container flex flex-col mx-auto bg-white rounded-lg">
        <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
          <div className="flex items-center justify-center w-full lg:p-12">
            <div className="flex items-center xl:p-10">
              <form className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl" onSubmit={handleSubmit}>
                <h3 className="mb-3 text-4xl font-extrabold text-zinc-900 text-dark-grey-900">Sign In</h3>
                <p className="mb-4 text-grey-700">Enter your email and password</p>
                
                <div className="flex items-center mb-3">
                  
                </div>
                <label htmlFor="email" className="mb-2 text-sm text-start text-grey-900">Email*</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="mail@loopple.com"
                  className="flex items-center w-full px-5 py-4 mr-2 bg-slate-100 focus:bg-slate-200 text-sm font-medium outline-none mb-7 placeholder:text-grey-800 text-dark-grey-900 rounded-2xl"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="password" className="mb-2 text-sm text-start text-grey-900">Password*</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter a password"
                  className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm bg-slate-100 focus:bg-slate-200 font-medium outline-none placeholder:text-grey-700 text-dark-grey-900 rounded-2xl"
                  value={formData.password}
                  onChange={handleChange}
                />
                <div className="flex flex-row justify-between mb-8">
                  <label className="relative inline-flex items-center mr-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      name="keepLoggedIn"
                      className="sr-only peer"
                      checked={formData.keepLoggedIn}
                      onChange={handleChange}
                    />
                    <div className="w-5 h-5 bg-white border-2 rounded-sm border-grey-500 peer peer-checked:border-0 peer-checked:bg-purple-800">
                      <img
                        className=""
                        src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/icons/check.png"
                        alt="tick"
                      />
                    </div>
                    <span className="ml-3 text-sm font-normal text-grey-900">Keep me logged in</span>
                  </label>
                  <a href="#" className="mr-4 text-sm font-medium text-purple-800">Forget password?</a>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 bg-purple-700"
                >
                  Sign In
                </button>
                <p className="text-sm leading-relaxed text-grey-900">
                  Not registered yet? <a href="#" className="font-bold text-grey-700 hover:text-purple-800">Create an Account</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </>
  )
}

export default Login