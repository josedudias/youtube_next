import { useState } from 'react'

export default function Todos({ todos }) {
    const [todosState, setTodosState] = useState(todos)

    return (
        <div>
            <h1>Todos</h1>
            <ul>
                {todosState.map(todo => (
                    <div key={todo.id}>
                        <p> {todo.id} : {todo.title} </p>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos = await res.json()

    return {
        props: {
            todos,
        },
    }
}