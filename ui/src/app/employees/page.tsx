const Employees: React.FC = () => {
    const employees = [{ id: 1, name: 'Employee 1' }, { id: 2, name: 'Employee 2' }];

    return (
        <div className="flex min-h-screen flex-col items-center p-24">
            <h1>Employees</h1>
            {employees.map(employee => (
                <div key={employee.id}>{employee.name}</div>
            ))}
        </div>
    );
};

export default Employees;
