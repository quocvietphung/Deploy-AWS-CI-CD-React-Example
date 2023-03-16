import React, { useState } from 'react';

function App() {
    const [data, setData] = useState([
        { id: 1, name: 'John Doe', age: 30 },
        { id: 2, name: 'Jane Smith', age: 25 },
        { id: 3, name: 'Bob Johnson', age: 40 },
    ]);

    return (
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
            </tr>
            </thead>
            <tbody>
            {data.map((row) => (
                <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>{row.age}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default App;
