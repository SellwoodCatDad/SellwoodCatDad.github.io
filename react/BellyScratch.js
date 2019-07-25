const bellyStyles = [
	{
		height: 400, width: 500, marginLeft: 'auto', 
		marginRight: 'auto', display: 'block'
	},
	{
		height: 400, width: 600, marginLeft: 'auto', 
		marginRight: 'auto', display: 'block'
	},
	{
		height: 600, width: 400, marginLeft: 'auto', 
		marginRight: 'auto', display: 'block'
	},
	{
		height: 600, width: 400, marginLeft: 'auto', 
		marginRight: 'auto', display: 'block'
	},
]
	
const bellySources = [
		'../pics/BellyScratch_1.jpg',
		'../pics/BellyScratch_2.jpg',
		'../pics/BellyScratch_3.jpg',
		'../pics/BellyScratch_4.jpg'
	]
	
const bellyScratchPhrases = [
	'Hey, what\'s up? Scratch my belly, now!',
	'Wait, let me get setup.',
	'Alright, I\'m comfy; let the scratching begin.',
	'I\'m comfortable. Stop moving, please!'
]

//This will keep track of clicks
let i = 0;

class BellyScratch extends React.Component {
	constructor(props) {
		super(props);
		this.state = 
		{
			src: bellySources[0],
			phrase: bellyScratchPhrases[0],
			style: bellyStyles[0]
		}
		this.scratch = this.scratch.bind(this);
	}
	
	scratch(e) {
		if (i < bellySources.length - 1){
			i++;
			this.setState({		
				src: bellySources[i],
				phrase: bellyScratchPhrases[i],
				style: bellyStyles[i]
			});

		} else {
			i = 0;
			this.setState({		
				src: bellySources[i],
				phrase: bellyScratchPhrases[i],
				style: bellyStyles[i]
			});
		}
	};
	
	render() {		
		return (
		<div>
			<h1 align="center">{this.state.phrase}</h1>;
			<img style={this.state.style} onClick={this.scratch} src={this.state.src} />
		</div>
		)
	}
}

ReactDOM.render(<BellyScratch />, document.getElementById('BellyScratch'));