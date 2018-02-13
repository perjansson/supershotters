export default ({ children }) => (
	<h1>
		{children}
		<style jsx>{`
			h1 {
				text-align: center;
				margin: 10px 0;
				font-size: 60px;
				color: green;
			}
		`}</style>
	</h1>
)
