import Footer from '../components/Footer';
import Banner from '../components/HomeComponents/Banner';
import MyExpertise from '../components/HomeComponents/MyExpertise';
import Recommendations from '../components/HomeComponents/Recommendations';
import YScroller from '../components/HomeComponents/YScroller';
const home = () => {
    return (
        <div className="PARENT -z-10">
            <Banner />
            <MyExpertise />
            <Recommendations />
            <YScroller />
            <Footer />

        </div >
    )
}

export default home