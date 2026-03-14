const Banner = () => {
	return (
	  <div className="w-full flex justify-center bg-[#222222]">
		<div className="w-full max-w-[1400px] shadow-xl rounded-lg overflow-hidden bg-white flex flex-col lg:flex-row">
		  {/* Contact Information Section */}
		  <div
			className="w-full lg:w-1/2 p-10 bg-cover bg-center"
			style={{ backgroundImage: "url('/src/assets/images/AP.JPG')" }}
		  >
			<h2 className="text-white text-3xl font-bold mb-4">CONTACT US</h2>
			<p className="text-gray-300 mb-6">
			  We'd love to hear from you. Please fill out this form.
			</p>
			<p className="text-gray-200 mb-4">
			  The Space Gallery Studio <br />
			  1-65/312, Flat no.301, 3rd floor, <br />
			  Road No.7, Kakatiya Hills, Madhapur, <br />
			  Hyderabad, Telangana-500090.
			</p>
			<p className="text-gray-200">
			  thespacegallerystudio@gmail.com <br />
			  +91-91103 43736, +91-94949 63428
			</p>
		  </div>
  
		  {/* Contact Form Section */}
		  <div className="w-full lg:w-1/2 p-10 bg-[#222222] flex flex-col justify-center">
			<form className="flex flex-col gap-4">
			  <input
				type="text"
				placeholder="Your Name"
				className="p-3 rounded bg-white text-black outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500"
			  />
			  <input
				type="email"
				placeholder="Your Email"
				className="p-3 rounded bg-white text-black outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500"
			  />
			  <input
				type="text"
				placeholder="Phone Number"
				className="p-3 rounded bg-white text-black outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500"
			  />
			  <textarea
				placeholder="Your Message"
				rows={4}
				className="p-3 rounded bg-white text-black outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500"
			  ></textarea>
			  <button
				type="submit"
				className="bg-#222222-800 text-white font-medium py-3 px-5 border border-gray-500 hover:bg-gray-700 transition duration-300"
			  >
				Submit
			  </button>
			</form>
		  </div>
		</div>
	  </div>
	);
  };
  
  export default Banner;
  
