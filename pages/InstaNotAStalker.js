import Depiction from "../components/Depiction"

export default function InstaNotAStalker() {
	return (
		<Depiction
			name="InstaNotAStalker"
			github="https://github.com/YulkyTulky/InstaNotAStalker"
			subtitle="Confirm Instagram likes with a slew of preferences!"
		>

			<p>
			InstaNotAStalker displays a confirmation alert before liking Instagram posts and/or following anyone.
			</p>

			<p>
			Updated for the latest builds of Instagram.
			</p>
	
			<p>Features:</p>
			<ul>
				<li>
					Three Modes
					<ul>
						<li>Double-Tap Mode</li>
						<li>Heart Icon Mode</li>
						<li>Follow Mode</li>
					</ul> 
				</li>
				<li>
				Configurable Options
					<ul>
						<li>Choose which posts display an alert (how many days, weeks, months, or years old)</li>
						<li>Alert's style</li>
						<li>Enable/Disable switch</li>
					</ul> 
				</li>
			</ul>
			
		</Depiction>
	)
}