const Counter = ({ children }) => (
    <div className="container">
        <div />
        <style jsx>{`
            .container {
                position: relative;
            }

            .container > div {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        `}</style>
    </div>
)

export default Counter
