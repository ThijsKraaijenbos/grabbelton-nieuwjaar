import { useState } from "react";
import rules from "./rules.json";

const rulesArray = Object.entries(rules).map(([id, text]) => ({
	id,
	text,
}));

function App() {
	const [previousRules, setPreviousRules] = useState([]);
	const [selectedRule, setSelectedRule] = useState(null);

	const getRandomRule = () => {
		const availableRules = rulesArray.filter(
			rule => !previousRules.some(prev => prev.id === rule.id)
		);

		if (availableRules.length === 0) {
			setSelectedRule("De regels zijn op!");
			return;
		}

		const randomRule =
			availableRules[Math.floor(Math.random() * availableRules.length)];

		setSelectedRule(randomRule.text);
		setPreviousRules(prev => [...prev, randomRule]);
	};

	return (
		<div className="app">
			<h1>De nieuwjaar grabbeldoos!</h1>
			<p>Pak een regel uit de grabbeldoos. Je <strong>MOET</strong> je aan deze regel houden. Als iemand je betrapt dat je dat niet doet moet je een biertje atten of een shot nemen.</p>

			<h2>Deze regel is voor:</h2>
			<input placeholder={"naam"}/>

			<p className="rule">{selectedRule}</p>
			<button onClick={getRandomRule}>
				🎲 Pak een regel uit de grabbeldoos!
			</button>

			<div className="box">
				<div className="box-lid"></div>
				<div className="box-body"></div>
			</div>
		</div>
	);

}

export default App;
