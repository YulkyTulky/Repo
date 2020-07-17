import Depiction from "../components/Depiction"

export default function Actify() {
	return (
		<Depiction
			name="Actify"
			github="https://github.com/YulkyTulky/Actify"
			subtitle="Activator event to display a custom notification from any app!"
		>

			<p>
			Actify allows you to trigger push notifications with a custom title and message (from any app) through Activator.
			It includes a brand new CLI tool for sending notifications from the command line! Just type "actify" in any terminal (e.g. NewTerm) to view the Tool's options!
			</p>

			<p>Features:</p>
			<ul>
				<li>
					Notification from anywhere through Activator
				</li>
				<li>
					Any Title, any message, any application (with notification permissions)
				</li>
				<li>
					Support for multiple different notifications and actions through the Actify Tool and Activator's command-building feature
				</li>
			</ul>
			
		</Depiction>
	)
}