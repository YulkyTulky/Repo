import Depiction from "../components/Depiction"

export default function ColorfulLines() {
	return (
		<Depiction
			name="Colorful Lines"
			github="https://github.com/YulkyTulky/Colorful-Lines"
			subtitle="Customize the scrollbar and cursor!"
		>

			<p>
			Colorful Lines provides coloring (including custom opacity) and hiding options for the iOS scrollbar and cursor.
			It also includes custom options for the text selection bars and highlight view! Built for iOS 12 and 13.
			</p>

			<p>Features:</p>
			<ul>
				<li>
					Color and Customize:
					<ul>
						<li>Cursor</li>
						<li>Floating Cursor</li>
						<li>Text Selection Bars</li>
						<li>Highlight View</li>
					</ul>
				</li>
				<li>
					Enable/Disable switches
				</li>
				<li>
					Seamless preferences experience through libSparkColourPicker
				</li>
			</ul>
			
		</Depiction>
	)
}