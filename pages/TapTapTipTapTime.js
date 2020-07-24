import Depiction from "../components/Depiction"

export default function TapTapTipTapTime() {
	return (
		<Depiction
			name="TapTapTipTapTime"
			github="https://github.com/YulkyTulky/TapTapTipTapTime"
			subtitle="Tap on the time to see the date in the status bar!"
		>

			<p>
			TapTapTipTapTime adds a tap gesture to the time in the status bar. Tap it to see the date! Tap again to go back to the time!
			</p>

			<p>Features:</p>
			<ul>
            <li>
				Configurable Options
					<ul>
                        <li>Date Separator (/, -, or .)</li>
                        <li>Show Year</li>
                        <li>Show Month Before Day or vice versa</li>
						<li>Show AM/PM</li>
						<li>24 Hour Time</li>
                        <li>Enable/DisableSwitch</li>
					</ul> 
				</li>
			</ul>

			<p>
			Developed by YulkyTulky and DimitarNestorov.
			</p>
			
		</Depiction>
	)
}