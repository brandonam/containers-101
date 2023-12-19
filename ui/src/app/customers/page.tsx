const Customers: React.FC = () => {
    const customers = [{ id: 1, name: 'Customer 1' }, { id: 2, name: 'Customer 2' }];

    return (
        <div className="flex min-h-screen flex-col items-center p-24">
            <h1>Customers</h1>
            {customers.map(customer => (
                <div key={customer.id}>{customer.name}</div>
            ))}
        </div>
    );
};

export default Customers;
