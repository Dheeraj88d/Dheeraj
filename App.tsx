import Banner from "./components/Banner";
import Collections from "./components/Collections";
import Confident from "./components/Confident";	
import Explore from "./components/Explore";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/Services";

const App = () => {
	return (
		<div className="w-full flex flex-col">
			<Header />
			<Services />
			<Collections />
			<Confident/>						
			<Explore />
			<Intro />
			<Banner />
			<Footer />
		</div>
	);
};

export default App;
