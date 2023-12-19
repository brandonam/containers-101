const Items: React.FC = () => {
    const items = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }];

    return (
        <div className="flex min-h-screen flex-col items-center p-24">
            <h1>Items</h1>
            {items.map(item => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    );
};

export default Items;
