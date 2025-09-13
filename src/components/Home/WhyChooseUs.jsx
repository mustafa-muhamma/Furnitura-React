import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTruckFast, faShieldHalved, faHeadset } from "@fortawesome/free-solid-svg-icons";

function WhyChooseUs() {
  const features = [
    {
      id: 1,
      icon: faCheckCircle,
      title: "High Quality",
      desc: "We provide premium quality products with durable materials.",
    },
    {
      id: 2,
      icon: faTruckFast,
      title: "Fast Delivery",
      desc: "Quick and reliable shipping straight to your door.",
    },
    {
      id: 3,
      icon: faShieldHalved,
      title: "Secure Payment",
      desc: "Safe and easy payment methods you can trust.",
    },
    {
      id: 4,
      icon: faHeadset,
      title: "24/7 Support",
      desc: "Always here to help you with any inquiries.",
    },
  ];

  return (
    <section className="whyChooseUs bg-[#F9F6F3] py-12">
      <div className="container">
        <h2 className="text-3xl font-semibold text-[#1C352D] text-center mb-10">
          Why Choose Us
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="w-full md:w-[45%] lg:w-[22%] bg-white rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 p-6 text-center"
            >
              <div className="mb-4 text-[#1C352D] text-4xl">
                <FontAwesomeIcon icon={feature.icon} />
              </div>
              <h3 className="text-xl font-semibold text-[#1C352D] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
