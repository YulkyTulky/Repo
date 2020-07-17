import Links from "./Links"
import Page from "./Page"
import Section, { SectionPadding } from "./Section"

import { icons } from "../loader!../repo"

export default function Depiction({ children, name, subtitle, github }) {
	return (
		<Page title={name}>
			<style jsx>{`
				.title {
					margin: 16px 0;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.title > img {
					width: 48px;
					height: 48px;
				}

				.titles {
					margin: 0 0 0 8px;
					text-align: center;
				}

				.titles > h1 {
					font-size: 24px;
					margin: 0;
				}

				.titles > h2 {
					font-size: 12px;
					margin: 0;
					font-weight: 400;
				}

				h1 {
					text-decoration: underline;
					font-size: 32px;
					font-family: monospace;
					letter-spacing: normal;
					background: linear-gradient(to right, #6666ff, #0099ff , #00ff00, #ff3399, #6666ff);
					-webkit-background-clip: text;
					background-clip: text;
					color: transparent;
					animation: rainbow_animation 6s ease-in-out infinite;
					background-size: 400% 100%;
				}

				@keyframes rainbow_animation {
					0%,100% {
						background-position: 0 0;
					}
				
					50% {
						background-position: 100% 0;
					}
				}
			`}</style>
			<div className="title">
				<img src={icons[name]} alt={`${name} icon`} />
				<div className="titles">
					<h1>{name}</h1>
					{subtitle && <h2>{subtitle}</h2>}
				</div>
			</div>
			<Section>
				<SectionPadding>{children}</SectionPadding>
			</Section>
			<Links>
				{[
					{ icon: "/assets/link-icons/GitHub.png", label: "GitHub", href: github },
					{ icon: "/assets/link-icons/Discord.png", label: "Discord", href: "https://discord.gg/gbzhzV" }
				]}
			</Links>
		</Page>
	)
}
