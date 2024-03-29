import { useState } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { getServerSideProps } from './api/todos'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 0.5rem;
`

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
`

const TodoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
`

const TodoItem = styled.li`
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
`

export default function Home({ todos }) {
  const [todosState, setTodosState] = useState(todos)

  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title>Todos</Title>

      <TodoList>
        {todosState.map(todo => (
          <TodoItem key={todo.id}>
            <p>ID: {todo.id}</p>
            <p>Title: {todo.title}</p>
            <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
          </TodoItem>
        ))}
      </TodoList>
    </Container>
  )
}

export { getServerSideProps }