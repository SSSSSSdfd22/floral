import { MapPin, Phone, Mail, Clock, Award, Truck, Heart } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Heart size={22} className="text-rose-500" />,
      title: "Handcrafted with Love",
      desc: "Every arrangement is uniquely designed and handcrafted by our talented local florists.",
    },
    {
      icon: <Truck size={22} className="text-rose-500" />,
      title: "Same-Day Delivery",
      desc: "Order before 2 PM for same-day delivery to Airdrie, AB and surrounding areas.",
    },
    {
      icon: <Award size={22} className="text-rose-500" />,
      title: "5-Star Quality",
      desc: "We take pride in delivering only the freshest, highest-quality blooms to your door.",
    },
  ];

  return (
    <>
      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/about-flowers.jpg"
                  alt="Our florist at work"
                  className="w-full h-[480px] object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-rose-600 text-white p-6 rounded-2xl shadow-xl max-w-[200px]">
                <p className="text-4xl font-extrabold">10+</p>
                <p className="text-sm font-medium text-rose-100 mt-1">Years of floral artistry in Airdrie</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-rose-500 font-semibold text-sm uppercase tracking-widest mb-3">
                About Us
              </p>
              <h2 className="text-4xl font-extrabold text-gray-800 mb-5 leading-tight">
                Where Flowers Are <br />
                <span className="text-rose-600">Uniquely Designed</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We're a local Airdrie, AB florist with a lovely variety of fresh flowers and
                creative gift ideas to suit any style or budget. It is our pleasure to assist
                you with any local, as well as worldwide deliveries.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                From green plants, blooming plants, and dish gardens to fruit baskets, gourmet
                snack baskets, gift baskets, baby items, chocolates, greeting cards, candles,
                stuffed animals, balloons and more — we have something for every occasion!
              </p>

              <div className="space-y-4 mb-8">
                {features.map(({ icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center shrink-0">
                      {icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm">{title}</h4>
                      <p className="text-gray-500 text-sm mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#shop"
                className="inline-block bg-rose-600 hover:bg-rose-700 text-white px-8 py-3.5 rounded-full font-bold shadow-lg hover:shadow-rose-400/40 transition-all duration-200"
              >
                Shop Our Collection
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-rose-500 font-semibold text-sm uppercase tracking-widest mb-2">Get in Touch</p>
            <h2 className="text-4xl font-extrabold text-gray-800">Contact Us</h2>
            <p className="text-gray-500 mt-3 max-w-md mx-auto">
              We'd love to help you find the perfect arrangement. Call us, visit our shop, or order online 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: <MapPin size={24} className="text-rose-500" />,
                title: "Our Location",
                lines: ["502-3 Stonegate Drive NW", "Airdrie, AB T4B 0N2"],
              },
              {
                icon: <Phone size={24} className="text-rose-500" />,
                title: "Phone",
                lines: ["(587) 449-9428"],
                link: "tel:+15874499428",
              },
              {
                icon: <Mail size={24} className="text-rose-500" />,
                title: "Email",
                lines: ["info@airdrieflowers.ca"],
                link: "mailto:info@airdrieflowers.ca",
              },
              {
                icon: <Clock size={24} className="text-rose-500" />,
                title: "Hours",
                lines: ["Mon–Fri: 9am – 5pm", "Sat: 9am – 3pm", "Sun: Closed"],
              },
            ].map(({ icon, title, lines, link }) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-rose-100 text-center">
                <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {icon}
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
                {lines.map((line) =>
                  link ? (
                    <a
                      key={line}
                      href={link}
                      className="block text-gray-500 text-sm hover:text-rose-600 transition-colors"
                    >
                      {line}
                    </a>
                  ) : (
                    <p key={line} className="text-gray-500 text-sm">{line}</p>
                  )
                )}
              </div>
            ))}
          </div>

          {/* Custom orders CTA */}
          <div id="custom-orders" className="bg-rose-700 rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl">
            <p className="text-rose-200 text-sm font-semibold uppercase tracking-widest mb-3">Custom Orders</p>
            <h3 className="text-3xl font-extrabold mb-4">Planning a Wedding or Special Event?</h3>
            <p className="text-rose-100 max-w-xl mx-auto mb-8 leading-relaxed">
              Our talented designers create stunning bouquets, arrangements, and on-site decorating
              tailored to your individual style and budget. Let's bring your floral vision to life!
            </p>
            <a
              href="tel:+15874499428"
              className="inline-flex items-center gap-2 bg-white text-rose-700 hover:bg-rose-50 px-8 py-3.5 rounded-full font-bold shadow-lg transition-all duration-200"
            >
              <Phone size={18} />
              Call (587) 449-9428 to Schedule a Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
