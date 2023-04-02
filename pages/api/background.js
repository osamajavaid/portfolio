const background = [
    {
        eduCards: [
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
    },
    {
        expCards: [
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
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
