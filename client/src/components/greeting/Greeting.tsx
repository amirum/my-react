import './Greeting.css'

const name = "Amir"

export const Greeting = (props: { name: string }) => {
    return (
        <div>
            {props.name}
            <h1 className="title">Hello {name}! awsome website</h1>
        </div>
    )
}

/* export default function Greeting () {
    <h1>Hello awsome website</h1>

}
*/