const Game = ({ src }) => (
	<div className="gameWrapper">
		<iframe
			title="glaciarRace"
			allowTransparency="true"
			width="100%"
			height="90%"
			src={src}
			frameBorder="0"
			allowFullScreen
		/>
		<style jsx>{`
			.gameWrapper {
				width: 100%;
				height: 95%;
			}
		`}</style>
	</div>
)

export default Game
