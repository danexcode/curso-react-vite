import { useContext } from "react"
import { Link } from "react-router-dom";
import OrdersCard from "../../components/OrdersCard"
import { ShoppingCartContext } from "../../context"

function MyOrders() {
  const context = useContext(ShoppingCartContext);

  return (
    <div>
      <div className="flex justify-center items-center w-96 mb-6 relative">
        <h1>MyOrders</h1>
      </div>
      {
        context.order.map((order, index) => {
          return (
            <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard
                totalPrice={order.totalPrice}
                totalProducts={order.totalProducts}
                date={order.date}
              />
            </Link>
          )
        })
      }
    </div>
  )
}

export default MyOrders
