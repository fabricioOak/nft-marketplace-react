import { useState } from "react";
import { Download, Features, Footer, SectionWrapper } from "./components";
import assets from "./assets";

const App = () => {
	const [count, setCount] = useState(0);

	return (
		<>
			<SectionWrapper
				title="Your own store of amazing NFTs. Simple, fast, and secure."
				description="Buy, store, exchange and earn crypto. Join 5+ million people using ProNef"
				showBtn
				mockupImg={assets.homeHero}
				banner="banner"
			/>
			<SectionWrapper
				title="Smart User Experience and Security with ProNef Store"
				description="ProNef is a decentralized, open-source, and fully-featured NFT exchange."
				mockupImg={assets.homeCards}
				reverse
			/>
			<Features />
			<SectionWrapper
				title="Deployment"
				description="ProNef is built using Expo, a React Native framework that is easy to deploy to any device. you can easily get your app into people's hands."
				mockupImg={assets.feature}
				reverse
			/>
			<SectionWrapper
				title="Creative way to showcase the store"
				description="The app has only two screens, the home screen and the details screen. The home screen is a list of NFTs, and the details screen is a detailed view of the NFT."
				mockupImg={assets.mockup}
				banner="banner02"
			/>
			<Download />

			<Footer />
		</>
	);
};

export default App;
