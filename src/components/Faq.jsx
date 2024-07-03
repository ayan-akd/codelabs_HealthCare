const Faq = () => {
  return (
    <div className="mx-48 my-20 text-black ">
      <button className="border border-black rounded-[32px] px-6 py-2">
        Faq
      </button>
      <h2 className="font-semibold text-4xl mt-4 mb-8">Frequently Asked Question</h2>
      <div>
        <div className="collapse collapse-arrow bg-[#FFFFF5] mb-3 rounded-lg">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium leading-6 capitalize px-12">
          What are your office hours?
          </div>
          <div className="collapse-content text-sm text-[#343268] bg-[#F5FCFF] capitalize pl-12 lg:pr-36 leading-6">
            <p className="my-2">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#FFFFF5] mb-3 rounded-lg">
          <input type="radio" name="my-accordion-3"  />
          <div className="collapse-title text-xl font-medium leading-6 capitalize px-12">
          How can I schedule an appointment?
          </div>
          <div className="collapse-content text-sm text-[#343268] bg-[#F5FCFF] capitalize pl-12 lg:pr-36 leading-6">
            <p className="my-2">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#FFFFF5] mb-3 rounded-lg">
          <input type="radio" name="my-accordion-3"  />
          <div className="collapse-title text-xl font-medium leading-6 capitalize px-12">
          Do you accept insurance?
          </div>
          <div className="collapse-content text-sm text-[#343268] bg-[#F5FCFF] capitalize pl-12 lg:pr-36 leading-6">
            <p className="my-2">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#FFFFF5] mb-3 rounded-lg">
          <input type="radio" name="my-accordion-3"  />
          <div className="collapse-title text-xl font-medium leading-6 capitalize px-12">
          What should I bring to my appointment??
          </div>
          <div className="collapse-content text-sm text-[#343268] bg-[#F5FCFF] capitalize pl-12 lg:pr-36 leading-6">
            <p className="my-2">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#FFFFF5] rounded-lg">
          <input type="radio" name="my-accordion-3"  />
          <div className="collapse-title text-xl font-medium leading-6 capitalize px-12">
           Do you offer telemedicine appointments?
          </div>
          <div className="collapse-content text-sm text-[#343268] bg-[#F5FCFF] capitalize pl-12 lg:pr-36 leading-6">
            <p className="my-2">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
