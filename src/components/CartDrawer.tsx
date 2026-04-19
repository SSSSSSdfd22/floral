import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import type { Product } from "../data/products";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQty: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

export default function CartDrawer({
  open,
  onClose,
  items,
  onUpdateQty,
  onRemove,
}: CartDrawerProps) {
  const subtotal = items.reduce(
    (sum, { product, quantity }) => sum + (product.price ?? 0) * quantity,
    0
  );

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-rose-50">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-rose-600" />
            <h2 className="font-bold text-gray-800 text-lg">Your Cart</h2>
            {items.length > 0 && (
              <span className="bg-rose-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {items.reduce((s, i) => s + i.quantity, 0)}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-rose-100 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-gray-400 py-16">
              <ShoppingBag size={56} className="mb-4 text-gray-200" />
              <p className="font-semibold text-lg mb-1">Your cart is empty</p>
              <p className="text-sm">Add some beautiful flowers!</p>
              <button
                onClick={onClose}
                className="mt-6 text-rose-600 hover:text-rose-700 underline text-sm font-medium"
              >
                Continue shopping
              </button>
            </div>
          ) : (
            items.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="flex gap-3 bg-gray-50 rounded-xl p-3 border border-gray-100"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded-lg shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-800 text-sm leading-tight truncate">
                    {product.name}
                  </p>
                  {product.subtitle && (
                    <p className="text-xs text-gray-400 italic">{product.subtitle}</p>
                  )}
                  <p className="text-rose-600 font-bold text-sm mt-1">
                    {product.price !== null
                      ? `$${(product.price * quantity).toFixed(2)}`
                      : "Call for pricing"}
                  </p>

                  {/* Qty controls */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => onUpdateQty(product.id, -1)}
                      className="w-6 h-6 rounded-full bg-gray-200 hover:bg-rose-100 hover:text-rose-600 flex items-center justify-center transition-colors"
                    >
                      <Minus size={11} />
                    </button>
                    <span className="text-sm font-bold text-gray-700 w-4 text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQty(product.id, 1)}
                      className="w-6 h-6 rounded-full bg-gray-200 hover:bg-rose-100 hover:text-rose-600 flex items-center justify-center transition-colors"
                    >
                      <Plus size={11} />
                    </button>
                    <button
                      onClick={() => onRemove(product.id)}
                      className="ml-auto text-gray-300 hover:text-red-400 transition-colors"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 px-5 py-5 bg-white">
            <div className="flex justify-between text-sm text-gray-500 mb-1">
              <span>Subtotal</span>
              <span className="font-semibold text-gray-700">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xs text-gray-400 mb-4">
              <span>Delivery calculated at checkout</span>
            </div>
            <button className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-rose-400/40 transition-all duration-200 text-sm">
              Proceed to Checkout
            </button>
            <button
              onClick={onClose}
              className="w-full mt-2 text-gray-500 hover:text-rose-600 text-sm font-medium py-2 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
