export function App() {
    return (
        <div>
            <button 
                onClick={() => {
                    API.client.findAll({limit: 20, offset: 0})
                        .then(data => console.log(data))
                }}
            >
                Click here
            </button>
        </div>
    )
}