import Edu_Card from "../components/Background/Edu_Card";
import Exp_Card from "../components/Background/Exp_Card";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";

const eduCards = [
    {
        id: 0,
        title: 'UET Peshawar',
        degree: 'BS, Computer System Engineering',
        detail: "Bachelor's Degree in Computer System Engineering from UET Peshawar.",
        year: '2018-2022'
    },
    {
        id: 1,
        title: 'Peshawar Model Degree College',
        degree: 'HSSC, Pre Engineering',
        detail: "Bachelor's Degree in Computer System Engineering from UET Peshawar.",
        year: '2018-2022'
    },
    {
        id: 2,
        title: 'Falcon Academy',
        degree: 'SSC, Computer System Engineering',
        detail: "Bachelor's Degree in Computer System Engineering from UET Peshawar.",
        year: '2018-2022'
    },
]

const expCards = [
    {
        id: 0,
        title: 'Spatay.com',
        role: 'React Developer',
        url: 'https://spatay.com/',
        desc: 'Lorem ipusm sfke sfdea kwaa contan safe  eka earere fsatita kakwig  faa eie sfiioaap faira',
        year: '09/2020 - 02/2021',
        location: 'Peshawar, Pakistan'
    },
    {
        id: 1,
        title: 'Otawix',
        role: 'React Developer',
        url: 'https://b2c.otawix.com/',
        desc: 'Lorem ipusm sfke sfdea kwaa contan safe  eka earere fsatita kakwig  faa eie sfiioaap faira',
        year: '09/2020 - 02/2021',
        location: 'Peshawar, Pakistan'
    },
    {
        id: 1,
        title: 'HuzaTech',
        role: 'React Developer',
        url: 'https://spatay.com/',
        desc: 'Lorem ipusm sfke sfdea kwaa contan safe  eka earere fsatita kakwig  faa eie sfiioaap faira',
        year: '09/2020 - 02/2021',
        location: 'Peshawar, Pakistan'
    },
    {
        id: 1,
        title: 'Encoder Bytes',
        role: 'React Developer',
        url: 'https://spatay.com/',
        desc: 'Lorem ipusm sfke sfdea kwaa contan safe  eka earere fsatita kakwig  faa eie sfiioaap faira',
        year: '09/2020 - 02/2021',
        location: 'Peshawar, Pakistan'
    },
    {
        id: 1,
        title: 'JMM Technologies',
        role: 'React / Nextjs Developer',
        url: 'https://spatay.com/',
        desc: 'Lorem ipusm sfkea sfdea kwaa contan safe  eka earere fsatita kakwig  faa eie sfiioaap faira',
        year: '09/2020 - 02/2021',
        location: 'Peshawar, Pakistan'
    },
]
function background() {
    return (
        <BannerLayout>
            <div class="grid md:grid-cols-2 md:divide-x-4 md:divide-yellow-600 px-4 pb-2 pt-10">
                <div class="order-2 md:order-1">
                    <div class="mt-10 md:mt-0 text-xl text-white font-semibold">Education</div>
                    {
                        eduCards.map((data, key) =>
                            <Edu_Card key={key} data={data} />
                        )
                    }

                </div>
                <div class="order-1 md:order-2">
                    <div class="md:ml-12">
                        <div class="md:pt-0 pt-4 text-xl text-white font-semibold">Experience</div>

                        {
                            expCards.map((data, key) =>
                                <Exp_Card key={key} data={data} />
                            )
                        }

                    </div>
                </div>
            </div>
            <Footer />
        </BannerLayout>
    );
}

export default background;
