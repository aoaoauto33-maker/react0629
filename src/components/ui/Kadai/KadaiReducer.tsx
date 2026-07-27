// import { useReducer } from "react";

// type Product = {
//     id: number;
//     name: string;
//     price: number;
// }

// const itemList: Product[] =[
//     {id: 1, name: "ノート", price: 150},
//     {id: 2, name: "ボールペン", price: 100},
//     {id: 3, name: "消しゴム", price: 80},
//     {id: 4, name: "定規", price: 120},
// ]

// export default function KadaiReducer(){
//     const [state, dispatch ] = useReducer(
//         (state, action ) => {
//             switch(action.type){
//                 case 'update':
//                     return { count: state.count + action.step};
//                 case 'reset':
//                     return { count: action.init};
//                 default:
//                     return state;
//             }
//         },
//         {
//             count: 0,
//         }
//     );

//     const handleUp = () => dispatch({ type: 'update', step: 1 });
//     const handleDown = () => dispatch({ type: 'update', step: -1});
//     const handleReset = () => dispatch({ type: 'reset', init:0});

//     return(
//         <>
//         <div>
//             <p>ノート</p>
//             <p>150円</p>
//             <button onClick={handleUp}>カートに追加</button>
//         </div>
//         <div>
//             <p>ボールペン</p>
//             <p>100円</p>
//             <button onClick={handleUp}>カートに追加</button>
//         </div>
//         <div>
//             <p>消しゴム</p>
//             <p>80円</p>
//             <button onClick={handleUp}>カートに追加</button>
//         </div>
//         <div>
//             <p>定規</p>
//             <p>120円</p>
//             <button onClick={handleUp}>カートに追加</button>
//         </div>

//         <h1>カートの中身</h1>
//         <ul>
//             { itemList.length === 0
//             ? (<p>カートの中身は何もありません</p>)
//             : (
//                 <ul>
//                 {itemList.map((itemlist) => (

//                 ))}
//                 </ul>
//             )}
//         </ul>
//         </>
//     )
// }



import { useReducer } from "react";

// 1. 商品の型定義
type Product = {
  id: number;
  name: string;
  price: number;
};

// 2. カートの商品 + 数量
type CartItem = {
  product: Product;
  quantity: number;
};

// 3. State
type CartState = {
  cart: CartItem[];
};

// 4. Action
type CartAction =
  | { type: "ADD_TO_CART"; product: Product }
  | { type: "REMOVE_FROM_CART"; id: number }
  | { type: "CLEAR_CART" };

// 商品一覧
const itemList: Product[] = [
  { id: 1, name: "ボールペン", price: 150 },
  { id: 2, name: "消しゴム", price: 80 },
  { id: 3, name: "定規", price: 120 },
];

// Reducer
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingIndex = state.cart.findIndex(
        (item) => item.product.id === action.product.id
      );

      if (existingIndex > -1) {
        const newCart = [...state.cart];

        newCart[existingIndex] = {
          ...newCart[existingIndex],
          quantity: newCart[existingIndex].quantity + 1,
        };

        return { cart: newCart };
      }

      return {
        cart: [
          ...state.cart,
          {
            product: action.product,
            quantity: 1,
          },
        ],
      };
    }

    case "REMOVE_FROM_CART":
      return {
        cart: state.cart.filter(
          (item) => item.product.id !== action.id
        ),
      };

    case "CLEAR_CART":
      return {
        cart: [],
      };

    default:
      return state;
  }
}

export default function ShoppingCart() {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
  });

  // 合計金額
  const totalPrice = state.cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  // 商品追加
  const handleAddToCart = (product: Product) => {
    dispatch({
      type: "ADD_TO_CART",
      product,
    });
  };

  // 商品削除
  const handleRemoveFromCart = (id: number) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id,
    });
  };

  // カートを空にする
  const handleClearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>📦 商品一覧</h2>

      <ul>
        {itemList.map((product) => (
          <li key={product.id} style={{ marginBottom: "8px" }}>
            <strong>{product.name}</strong>
            （{product.price.toLocaleString()}円）
            <button onClick={() => handleAddToCart(product)}>
              カートに追加
            </button>
          </li>
        ))}
      </ul>

      <hr />

      <h2>🛒 カートの中身</h2>

      {state.cart.length === 0 ? (
        <p>カートは空です。</p>
      ) : (
        <>
          <ul>
            {state.cart.map((item) => (
              <li key={item.product.id}>
                {item.product.name} -{" "}
                {item.product.price.toLocaleString()}円 *{" "}
                {item.quantity}個 ={" "}
                <strong>
                  {(item.product.price * item.quantity).toLocaleString()}円
                </strong>

                <button
                  onClick={() => handleRemoveFromCart(item.product.id)}
                >
                  削除
                </button>
              </li>
            ))}
          </ul>

          <h3>
            💰 合計金額：
            <span style={{ color: "red" }}>
              {totalPrice.toLocaleString()}円
            </span>
          </h3>

          <button onClick={handleClearCart}>
            カートを空にする
          </button>
        </>
      )}
    </div>
  );
}