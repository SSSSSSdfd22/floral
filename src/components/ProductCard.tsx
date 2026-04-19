import { ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";
import type { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [wished, setWished] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const badgeColors: Record<string, string> = {
    "Best Seller": "bg-amber-400 text-amber-900",
    Popular: "bg-emerald-500 text-white",
    Luxury: "bg-purple-600 text-white",
    Funeral: "bg-slate-600 text-white",
    Birthday: "bg-pink-500 text-white",
    "Get Well": "bg-green-500 text-white",
    "New Baby": "bg-sky-400 text-white",
    Grad: "bg-indigo-500 text-white",
    "Valentine's": "bg-rose-500 text-white",
    Wedding: "bg-fuchsia-500 text-white",
    Seasonal: "bg-orange-500 text-white",
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100">
      {/* Image */}
      <div className="relative overflow-hidden bg-gray-50 aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Badge */}
        {product.badge && (
          <span
            className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full ${badgeColors[product.badge] ?? "bg-rose-500 text-white"}`}
          >
            {product.badge}
          </span>
        )}
        {/* Wishlist */}
        <button
          onClick={() => setWished(!wished)}
          className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110"
          aria-label="Add to wishlist"
        >
          <Heart
            size={15}
            className={wished ? "fill-rose-500 text-rose-500" : "text-gray-400"}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-gray-800 text-sm leading-tight uppercase tracking-wide">
          {product.name}
        </h3>
        {product.subtitle && (
          <p className="text-xs text-gray-400 mt-0.5 italic">{product.subtitle}</p>
        )}
        {product.description && (
          <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed flex-1">
            {product.description}
          </p>
        )}

        <div className="mt-3 flex items-center justify-between">
          <div>
            {product.price !== null ? (
              <span className="text-lg font-bold text-rose-600">
                ${product.price.toFixed(2)}
              </span>
            ) : (
              <span className="text-sm font-semibold text-gray-500 italic">
                {product.priceLabel ?? "Call for pricing"}
              </span>
            )}
          </div>
          <button
            onClick={handleAdd}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
              added
                ? "bg-green-500 text-white scale-95"
                : "bg-rose-600 hover:bg-rose-700 text-white hover:shadow-md hover:scale-105"
            }`}
          >
            <ShoppingCart size={13} />
            {added ? "Added!" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
