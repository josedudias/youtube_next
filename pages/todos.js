export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos = await res.json()

    return {
        props: {
            todos,
        },
    }
}