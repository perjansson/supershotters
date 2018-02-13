import Game from '../components/game'
import Title from '../components/title'

const GamePage = () => (
	<div className="gamePage">
		<Title>Owens spel: Glaciär race</Title>
		<Game src="//scratch.mit.edu/projects/embed/197973866/?autostart=true" />
		<style jsx>{`
			.gamePage {
				margin: 10px 0;
				height: 100%;
			}
		`}</style>
	</div>
)

export default GamePage
