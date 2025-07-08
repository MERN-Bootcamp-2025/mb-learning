import { createContext, useContext, useEffect, useState } from "react";
import { fetchMeals } from "../data/api";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const [showOptimized, setShowOptimized] = useState(false);

  const [meals, setMeals] = useState([]); //initialize the empty array

  const [originalTotal, setOriginalTotal] = useState(0);
  const [optimizedTotal, setOptimizedTotal] = useState(0);

  //Load cart from localStorage on first render
  //   useEffect(()=>{
  //     const savedCart = localStorage.getItem('cart');
  //     if(savedCart){
  //         setCartItems(JSON.parse(savedCart));
  //     }
  //   },[])
  //this is running before useEffect() loadds the cart
  // therfore we will initialize the localstorage directly at the time of state creation

  //Fetch meals globally
//   useEffect(() => {
//   fetchMeals()
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error("Failed to fetch meals");
//       }
//       return res.json(); // only works if response is JSON
//     })
//     .then((data) => setMeals(data))
//     .catch((err) => console.error("Failed to load meals", err));
// }, []);

  //save cart to localStorage on every update
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));

    const { original, optimized } = calculateTotals(cartItems);
    setOriginalTotal(original);
    setOptimizedTotal(optimized);
  }, [cartItems]);

  const addToCart = (item, type = "product") => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id && i.type === type);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id && i.type === type
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      } else {
        return [...prev, { ...item, quantity: 1, type }];
      }
    });
  };

  const increment = (id, type = "product") => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.type === type
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrement = (id, type = "product") => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id && item.type === type
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id, type = "product") => {
    setCartItems((prev) =>
      prev.filter((item) => item.id !== id || item.type !== type)
    );
  };

  const clearCart = () => {
    setCartItems([]);
    setShowOptimized(false); // reset bill visibility on clear
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const optimizeCart = () => {
    console.log("Start Optimizing");
    if (!meals || meals.length === 0) {
      console.log("no meals available for optimization");
      return;
    }

    const suggestions = getMealSuggestions(cartItems, meals);
    console.log("Suggestions", suggestions);

    if (suggestions.length === 0) {
      alert("No Optimized Combo Found!");
      return;
    }

    const best = suggestions.reduce((a, b) => (a.savings > b.savings ? a : b));
    console.log("best Suggestion", best);

    console.log("Cart Items:", cartItems);
    console.log("Meals", meals);

    replaceItemsWithMeal(best);
    setShowOptimized(true); //showOptimized values only after button clicks
  };

  const getMealSuggestions = (cart, meals) => {
    const suggestions = [];

    for (const meal of meals) {
      const cartMap = new Map(
        cart.filter((i) => i.type === "product").map((item) => [item.id, item])
      );

      let canReplace = true;
      let originalCost = 0;

      for (const prod of meal.Products || []) {
        const cartItem = cartMap.get(prod.id);
        const requireQty = prod.MealsProduct?.quantity || 1;

        if (!cartItem || cartItem.quantity < requireQty) {
          canReplace = false;
          break;
        }

        originalCost += cartItem.price * requireQty;
      }
      const savings = originalCost - meal.price;

      if (canReplace && savings > 0) {
        suggestions.push({
          meal,
          originalCost,
          savings,
          replacedItems: meal.Products,
        });
      }
    }
    return suggestions;
  };

  const replaceItemsWithMeal = (suggestion) => {
    setCartItems((prevCart) => {
      const updatedCart = [...prevCart];

      suggestion.replacedItems.forEach((mealProduct) => {
        const index = updatedCart.findIndex(
          (item) => item.id === mealProduct.id && item.type === "product"
        );
        if (index !== -1) {
          const item = updatedCart[index];
          const newQty =
            item.quantity - (mealProduct.MealsProduct?.quantity || 1);
          if (newQty > 0) {
            updatedCart[index] = { ...item, quantity: newQty };
          } else {
            updatedCart.splice(index, 1);
          }
        }
      });

      //Add the meal
      const existingMeal = updatedCart.find(
        (item) => item.id === suggestion.meal.id && item.type === "meal"
      );
      if (existingMeal) {
        existingMeal.quantity += 1;
      } else {
        updatedCart.push({
          ...suggestion.meal,
          quantity: 1,
          type: "meal",
        });
      }
      return updatedCart;
    });
  };

  const calculateTotals = (items) => {
    let original = 0;
    let optimized = 0;

    items.forEach((item) => {
      const itemTotal = item.price * item.quantity;
      original += itemTotal;

      if (item.type === "meal") {
        optimized += itemTotal;
      } else {
        optimized += itemTotal;
      }
    });

    return { original, optimized };
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increment,
        decrement,
        removeItem,
        clearCart,
        totalItems,
        optimizeCart,
        setMeals,
        originalTotal,
        optimizedTotal,
        showOptimized,
        meals
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
