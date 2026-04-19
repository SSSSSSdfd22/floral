import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Absolutely stunning arrangement! The flowers were so fresh and the design was even more beautiful than the photo. Delivery was right on time. Will definitely order again!",
    occasion: "Birthday",
  },
  {
    name: "James T.",
    rating: 5,
    text: "Ordered a sympathy arrangement and it was handled with such care and professionalism. The family was incredibly touched. Thank you Flower Whispers for your compassion.",
    occasion: "Sympathy",
  },
  {
    name: "Priya K.",
    rating: 5,
    text: "The Lemon Lime bouquet was gorgeous! My friend couldn't stop talking about it. The colours were vibrant, fresh, and perfectly put together. 10/10 experience!",
    occasion: "Just Because",
  },
  {
    name: "Michelle R.",
    rating: 5,
    text: "Flower Whispers did our wedding florals and they were absolutely dream-like. Every centrepiece, bouquet, and boutonniere was perfection. We got so many compliments!",
    occasion: "Wedding",
  },
  {
    name: "David L.",
    rating: 5,
    text: "Same-day delivery was a lifesaver! I forgot our anniversary and they saved the day. The roses were stunning and my wife was thrilled. You are the best!",
    occasion: "Anniversary",
  },
  {
    name: "Karen B.",
    rating: 5,
    text: "I've been ordering from Flower Whispers for years and they never disappoint. The quality is always exceptional and the staff are so friendly and helpful.",
    occasion: "Regular Customer",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-rose-500 font-semibold text-sm uppercase tracking-widest mb-2">
            ⭐ Customer Love
          </p>
          <h2 className="text-4xl font-extrabold text-gray-800 mb-3">
            What Our Customers Say
          </h2>
          <p className="text-gray-500 max-w-md mx-auto text-sm">
            Real reviews from real people who trust Flower Whispers with their most meaningful moments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-rose-50 rounded-2xl p-6 border border-rose-100 hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">{review.name}</p>
                  <p className="text-xs text-rose-500 font-medium">{review.occasion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust stats */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { stat: "500+", label: "Happy Customers" },
            { stat: "5★", label: "Average Rating" },
            { stat: "10+", label: "Years in Business" },
            { stat: "100%", label: "Satisfaction Guarantee" },
          ].map(({ stat, label }) => (
            <div key={label} className="text-center">
              <p className="text-4xl font-extrabold text-rose-600 mb-1">{stat}</p>
              <p className="text-gray-500 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
