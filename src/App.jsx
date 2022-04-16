import { useState } from "react";
import { Download, Features, SectionWrapper } from "./components";
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
		</>
	);
};

export default App;
