const Orders: React.FC = () => {
    const orders = [{ id: 1, name: 'Order 1' }, { id: 2, name: 'Order 2' }];

    return (
        <div className="flex min-h-screen flex-col items-center p-24">
            <h1>Orders</h1>
            {orders.map(order => <div key={order.id}>{order.name}</div>)}
        </div>
    );
};

export default Orders;
