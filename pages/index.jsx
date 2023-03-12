import Footer from '../components/Footer';
import Banner from '../components/HomeComponents/Banner';
import MyExpertise from '../components/HomeComponents/MyExpertise';
import Recommendations from '../components/HomeComponents/Recommendations';
import XScroller from '../components/HomeComponents/XScroller';
const home = () => {
    return (
        <div className="PARENT -z-10">
            <Banner />
            <MyExpertise />
            <Recommendations />
            <XScroller />
            <Footer />

        </div >
    )
}

export default home