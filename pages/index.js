import { Component } from 'react'
import Link from 'next/link'

import ProgressiveImage from '../components/progressiveImage'

const getProps = dimmed => ({
	placeholder:
		'data:image/jpeg;base64,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',
	image: '/static/supershotters_large.jpg',
	style: {
		height: '100vh',
		width: '100vw',
		filter: 'contrast(130%) saturate(150%)',
		opacity: !dimmed ? '1' : '0.15',
		transition: 'opacity 1s'
	}
})

class IndexPage extends Component {
	state = {
		counter: 3
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState(prevState => ({
				counter: prevState.counter - 1
			}))
		}, 1000)
	}

	componentWillUnmount() {
		clearInterval(this.interval)
	}

	render() {
		const dimmed = this.state.counter <= 0
		const buttons = dimmed ? <Buttons /> : null

		return (
			<div>
				<ProgressiveImage {...getProps(dimmed)} />
				{buttons}
			</div>
		)
	}
}

const Buttons = () => (
	<div className="buttons">
		<div>
			<Link prefetch href="/game">
				<a>Spela ett spel</a>
			</Link>
			<a href="https://www.youtube.com/channel/UCBTPyoo10fPDBLGt5hgbbOQ">
				Youtube kanal
			</a>
		</div>
		<style jsx>{`
			.buttons {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}

			a {
				font-size: 3em;
				margin-left: 50px;
			}
		`}</style>
	</div>
)

export default IndexPage
