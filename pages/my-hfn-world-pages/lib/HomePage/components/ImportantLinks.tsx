export const ImportantLinks = () => {
	return (
		<section>
			<h4 className="font-bold">Important Links</h4>
			<ol className="menu menu-md bg-primary w-full">
				{[
					{
						label: "Daaji.org",
						url: "https://www.daaji.org",
					},
					{
						label: "Heartfulness Masterclass",
						url: "https://heartfulness.org/global/masterclass",
					},
					{
						label: "Bhandara Messages",
						url: "https://heartfulness.org/global/bhandara-messages",
					},
					{
						label: "Heartfulness.org",
						url: "https://heartfulness.org/global",
					},
					{
						label: "Heartful Communication",
						url: "https://heartfulness.org/heartful-communication/",
					},
					{
						label: "Celebrations(Bhandara) Registration",
						url: "https://hfn.li/celebration",
					},
				].map(({ label, url }) => (
					<li key={url}>
						<a className="link text-primary-content" href={url}>
							{label}
						</a>
					</li>
				))}
			</ol>
		</section>
	);
};
