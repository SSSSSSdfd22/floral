import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { products, categories } from "../data/products";
import type { Product } from "../data/products";
import ProductCard from "./ProductCard";

interface ShopProps {
  onAddToCart: (product: Product) => void;
}

export default function Shop({ onAddToCart }: ShopProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      const matchCategory =
        activeCategory === "all" || p.category.includes(activeCategory);
      const matchSearch =
        searchQuery.trim() === "" ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.description ?? "").toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchSearch;
    });

    if (sortBy === "price-asc") {
      result = [...result].sort((a, b) => (a.price ?? 9999) - (b.price ?? 9999));
    } else if (sortBy === "price-desc") {
      result = [...result].sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
    } else if (sortBy === "name") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [activeCategory, searchQuery, sortBy]);

  const activeCategoryLabel =
    categories.find((c) => c.id === activeCategory)?.label ?? "All Products";

  return (
    <section id="shop" className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10">
          <p className="text-rose-500 font-semibold text-sm uppercase tracking-widest mb-2">
            Shop Online
          </p>
          <h2 className="text-4xl font-extrabold text-gray-800 mb-3">
            Our Floral Collection
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Every arrangement is handcrafted with love by our talented designers.
            Order online or call us — we're here to help!
          </p>
        </div>

        {/* Search & Sort bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search flowers, occasions, colours..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-xl bg-white text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={15} />
              </button>
            )}
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="sm:hidden flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-xl bg-white text-sm text-gray-600 shadow-sm"
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-3 border border-gray-200 rounded-xl bg-white text-sm text-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-300 cursor-pointer"
          >
            <option value="default">Sort: Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name">Name: A–Z</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Sidebar categories */}
          <aside className={`${showFilters ? "block" : "hidden"} sm:block w-full sm:w-56 shrink-0`}>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sticky top-24">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 px-2">
                Categories
              </h3>
              <ul className="space-y-0.5">
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => {
                        setActiveCategory(cat.id);
                        setShowFilters(false);
                      }}
                      className={`w-full text-left flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                        activeCategory === cat.id
                          ? "bg-rose-600 text-white shadow-sm"
                          : "text-gray-600 hover:bg-rose-50 hover:text-rose-600"
                      }`}
                    >
                      <span className="text-base leading-none">{cat.icon}</span>
                      <span className="leading-tight">{cat.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1 min-w-0">
            {/* Results info */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-700">
                {activeCategoryLabel}
                <span className="ml-2 text-sm font-normal text-gray-400">
                  ({filtered.length} {filtered.length === 1 ? "product" : "products"})
                </span>
              </h3>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-24 text-gray-400">
                <p className="text-5xl mb-4">🌸</p>
                <p className="text-lg font-semibold mb-1">No flowers found</p>
                <p className="text-sm">Try a different search or category.</p>
                <button
                  onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
                  className="mt-4 text-rose-600 hover:text-rose-700 underline text-sm font-medium"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
