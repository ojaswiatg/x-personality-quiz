export type TPersonality =
    | "Rabbit"
    | "Monkey"
    | "Sloth"
    | "Wolf"
    | "Elephant"
    | "Dolphin"
    | "Butterfly";

export type TOption = {
    id: string;
    option: string;
    personalities: TPersonality[];
};

export type TQuestion = {
    id: string;
    question: string;
    options: TOption[];
};

export const QUESTIONS: TQuestion[] = [
    {
        id: "1",
        question: "What’s your ideal weekend activity? 🌞🐾",
        options: [
            {
                id: "A",
                option: "Binge-watching a series and cuddling up in bed 📺",
                personalities: ["Sloth", "Wolf"],
            },
            {
                id: "B",
                option: "Going for a long hike in the mountains 🏞️",
                personalities: ["Wolf", "Elephant"],
            },
            {
                id: "C",
                option: "Trying new foods at a street market 🍣",
                personalities: ["Monkey", "Rabbit", "Butterfly"],
            },
            {
                id: "D",
                option: "Spending time at the beach with friends 🏖️",
                personalities: ["Dolphin", "Monkey", "Butterfly"],
            },
        ],
    },
    {
        id: "2",
        question: "How do you handle stress? 😤🧘",
        options: [
            {
                id: "A",
                option: "I take a nap and escape into my dreams 😴",
                personalities: ["Sloth", "Elephant"],
            },
            {
                id: "B",
                option: "I go for a walk and clear my mind 🦋",
                personalities: ["Butterfly", "Rabbit"],
            },
            {
                id: "C",
                option: "I dive into a hobby or a creative activity 🎨",
                personalities: ["Monkey", "Rabbit", "Dolphin", "Elephant"],
            },
            {
                id: "D",
                option: "I face it head-on and power through 💪",
                personalities: ["Wolf", "Elephant"],
            },
        ],
    },
    {
        id: "3",
        question: "How would your friends describe you? 🐯💬",
        options: [
            {
                id: "A",
                option: "The loyal and dependable one 🐕",
                personalities: ["Elephant", "Wolf"],
            },
            {
                id: "B",
                option: "The playful and adventurous spirit 🦁",
                personalities: ["Monkey", "Dolphin", "Butterfly"],
            },
            {
                id: "C",
                option: "The quiet thinker 🦉",
                personalities: ["Elephant", "Wolf"],
            },
            {
                id: "D",
                option: "The life of the party 🦄",
                personalities: ["Monkey", "Butterfly", "Dolphin"],
            },
        ],
    },
    {
        id: "4",
        question: "What’s your go-to snack? 🍫🐍",
        options: [
            {
                id: "A",
                option: "Chips and salsa 🧀",
                personalities: ["Monkey", "Dolphin", "Rabbit"],
            },
            {
                id: "B",
                option: "Fresh fruits and nuts 🍇🥜",
                personalities: ["Rabbit", "Elephant", "Sloth"],
            },
            {
                id: "C",
                option: "Chocolate or candy 🍬",
                personalities: ["Sloth", "Butterfly", "Rabbit"],
            },
            {
                id: "D",
                option: "A hearty sandwich or burger 🍔",
                personalities: ["Wolf", "Elephant"],
            },
        ],
    },
    {
        id: "5",
        question: "How do you approach a new challenge? 🧗‍♀️🐅",
        options: [
            {
                id: "A",
                option: "I take my time and plan carefully 🦊",
                personalities: ["Rabbit", "Elephant", "Wolf"],
            },
            {
                id: "B",
                option: "I jump right in and learn as I go 🐅",
                personalities: ["Monkey", "Butterfly", "Wolf"],
            },
            {
                id: "C",
                option: "I work with others to tackle it as a team 🐺",
                personalities: ["Elephant", "Dolphin", "Butterfly"],
            },
            {
                id: "D",
                option: "I rely on my instincts and go for it 🦁",
                personalities: ["Dolphin", "Monkey", "Wolf"],
            },
        ],
    },
    {
        id: "6",
        question: "What’s your ideal pet? 🐶🐱",
        options: [
            {
                id: "A",
                option: "A playful dog that loves to run 🐕",
                personalities: ["Wolf", "Monkey"],
            },
            {
                id: "B",
                option: "A lazy cat who enjoys lounging around 🐈",
                personalities: ["Sloth", "Elephant"],
            },
            {
                id: "C",
                option: "A clever parrot that can talk 🦜",
                personalities: ["Monkey", "Butterfly", "Dolphin"],
            },
            {
                id: "D",
                option: "A small, low-maintenance hamster 🐹",
                personalities: ["Sloth", "Wolf", "Monkey"],
            },
        ],
    },
    {
        id: "7",
        question: "Which of these animals would you choose as your spirit animal? 🌟🐾",
        options: [
            {
                id: "A",
                option: "A playful dolphin 🌊",
                personalities: ["Dolphin", "Monkey", "Butterfly"],
            },
            {
                id: "B",
                option: "A wise elephant 🐘",
                personalities: ["Elephant", "Wolf"],
            },
            {
                id: "C",
                option: "A gentle rabbit 🐇",
                personalities: ["Rabbit", "Butterfly"],
            },
            {
                id: "D",
                option: "A free-spirited butterfly 🦋",
                personalities: ["Butterfly", "Monkey", "Dolphin"],
            },
        ],
    },
    {
        id: "8",
        question: "What kind of weather makes you feel most alive? 🌤️🌧️",
        options: [
            {
                id: "A",
                option: "Bright and sunny days 🌞",
                personalities: ["Dolphin", "Butterfly"],
            },
            {
                id: "B",
                option: "Cloudy and cool days 🌥️",
                personalities: ["Sloth", "Rabbit"],
            },
            {
                id: "C",
                option: "Rainy and cozy days 🌧️",
                personalities: ["Elephant", "Wolf"],
            },
            {
                id: "D",
                option: "Misty and mysterious mornings 🌫️",
                personalities: ["Monkey", "Dolphin"],
            },
        ],
    },
    {
        id: "9",
        question: "Which of these sounds most like you? 🎵🐾",
        options: [
            {
                id: "A",
                option: "A peaceful forest, full of quiet rustling leaves 🍃",
                personalities: ["Rabbit", "Sloth", "Butterfly"],
            },
            {
                id: "B",
                option: "A bustling city, always alive with energy 🏙️",
                personalities: ["Monkey", "Wolf", "Rabbit"],
            },
            {
                id: "C",
                option: "A calm river, flowing gently through the landscape 🌊",
                personalities: ["Dolphin", "Elephant", "Sloth"],
            },
            {
                id: "D",
                option: "A tropical jungle, full of wild surprises 🌴",
                personalities: ["Monkey", "Butterfly", "Wolf"],
            },
        ],
    },
    {
        id: "10",
        question: "What’s your idea of a perfect vacation? 🏖️✈️",
        options: [
            {
                id: "A",
                option: "Relaxing at a cozy cabin in the mountains 🏔️",
                personalities: ["Elephant", "Sloth"],
            },
            {
                id: "B",
                option: "Exploring a lively city and trying new things 🏙️",
                personalities: ["Monkey", "Dolphin"],
            },
            {
                id: "C",
                option: "Visiting tropical beaches and soaking up the sun 🏖️",
                personalities: ["Dolphin", "Butterfly"],
            },
            {
                id: "D",
                option: "Camping in the wild and embracing nature 🌲",
                personalities: ["Wolf", "Rabbit"],
            },
        ],
    },
];

export const ADMIN_LINK = "http://twtr.openinapp.co/cnqzb";
