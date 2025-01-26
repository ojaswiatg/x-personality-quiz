export type TOption = {
    id: string;
    option: string;
    points: number;
};

export type TQuestion = {
    id: string;
    question: string;
    options: TOption[];
};

export const MAX_GAY_POINTS = 100;

export const QUESTIONS: TQuestion[] = [
    {
        id: "question_1",
        question: "How do you feel about glitter? ✨",
        options: [
            {
                id: "option_1",
                option: "It’s a lifestyle, I’m obsessed! 🌟",
                points: 10,
            },
            {
                id: "option_2",
                option: "It’s cute, but I’ll pass. 🏃‍♂️",
                points: 2,
            },
            {
                id: "option_3",
                option: "Eh, not my thing. 😅",
                points: 0,
            },
            {
                id: "option_4",
                option: "I accidentally swallowed some once… never again. 🙈",
                points: 3,
            },
        ],
    },
    {
        id: "question_2",
        question: "If you were to pick a dance move for a Friday night, what are you doing? 💃",
        options: [
            {
                id: "option_1",
                option: "The moonwalk, all the way. 🌙",
                points: 5,
            },
            {
                id: "option_2",
                option: "A chill little two-step. 💃",
                points: 2,
            },
            {
                id: "option_3",
                option: "I’m not much of a dancer, more of a wallflower. 🌸",
                points: 0,
            },
            {
                id: "option_4",
                option: "I’ll just vibe to the beat with some shoulder shimmy. ✨",
                points: 10,
            },
        ],
    },
    {
        id: "question_3",
        question: "Which vacation destination sounds like your kind of paradise? 🏖️",
        options: [
            {
                id: "option_1",
                option: "A fabulous beach resort, with cocktails in hand! 🍹",
                points: 3,
            },
            {
                id: "option_2",
                option: "A cozy cabin, surrounded by trees and calm. 🌲",
                points: 0,
            },
            {
                id: "option_3",
                option: "A big city full of culture and food! 🏙️",
                points: 5,
            },
            {
                id: "option_4",
                option: "A secret rooftop party in the middle of nowhere. 🎉",
                points: 10,
            },
        ],
    },
    {
        id: "question_4",
        question: "Pick a movie genre to binge-watch all weekend. 🎬",
        options: [
            {
                id: "option_1",
                option: "Rom-coms with a side of cheese. 🧀",
                points: 10,
            },
            {
                id: "option_2",
                option: "Action-packed blockbusters! 💥",
                points: 3,
            },
            {
                id: "option_3",
                option: "Documentary or indie vibes! 🎥",
                points: 0,
            },
            {
                id: "option_4",
                option: "Horror—gotta keep it spooky. 👻",
                points: 5,
            },
        ],
    },
    {
        id: "question_5",
        question: "If you were a dessert, which one would you be? 🧁",
        options: [
            {
                id: "option_1",
                option: "A rainbow cake with lots of sprinkles! 🌈",
                points: 10,
            },
            {
                id: "option_2",
                option: "A dark chocolate truffle—rich and mysterious. 🍫",
                points: 0,
            },
            {
                id: "option_3",
                option: "A fresh fruit tart, light and refreshing. 🍓",
                points: 3,
            },
            {
                id: "option_4",
                option: "A doughnut with extra sprinkles on top. 🍩",
                points: 5,
            },
        ],
    },
    {
        id: "question_6",
        question: "How do you feel about getting a mani-pedi? 💅",
        options: [
            {
                id: "option_1",
                option: "Yes please, I love a good mani-pedi day! 💅",
                points: 10,
            },
            {
                id: "option_2",
                option: "Maybe once in a while, if I’m in the mood. 💁‍♂️",
                points: 3,
            },
            {
                id: "option_3",
                option: "Nah, not really my thing. 🚶‍♂️",
                points: 0,
            },
            {
                id: "option_4",
                option: "I can’t sit still for that long. 🙃",
                points: 8,
            },
        ],
    },
    {
        id: "question_7",
        question: "Pick your perfect pizza topping combo! 🍕",
        options: [
            {
                id: "option_1",
                option: "Pineapple and extra cheese (controversial, I know)! 🍍🧀",
                points: 5,
            },
            {
                id: "option_2",
                option: "Classic pepperoni, please! 🍕",
                points: 0,
            },
            {
                id: "option_3",
                option: "Veggies, all the veggies. 🥬",
                points: 0,
            },
            {
                id: "option_4",
                option: "Literally anything, the weirder the better! 🍄",
                points: 10,
            },
        ],
    },
    {
        id: "question_8",
        question: "How do you feel about bold colors in your wardrobe? 🎨",
        options: [
            {
                id: "option_1",
                option: "Bright and bold? Yes, please! 🌈",
                points: 10,
            },
            {
                id: "option_2",
                option: "I like to add pops of color here and there. 🌸",
                points: 5,
            },
            {
                id: "option_3",
                option: "I’m more of a neutral tones kinda person. 🤍",
                points: 0,
            },
            {
                id: "option_4",
                option: "I only wear black... is that okay? 😅",
                points: 2,
            },
        ],
    },
    {
        id: "question_9",
        question: "You walk into a room full of unicorns 🦄. What do you do?",
        options: [
            {
                id: "option_1",
                option: "I’m in awe, can’t stop staring at their magic! ✨",
                points: 10,
            },
            {
                id: "option_2",
                option: "I’d make a new unicorn friend, obviously! 🦄💖",
                points: 8,
            },
            {
                id: "option_3",
                option: "I’d try to blend in with the unicorns... 🦄",
                points: 5,
            },
            {
                id: "option_4",
                option: "I’d leave, I’m not sure how to handle that level of fabulous. 😆",
                points: 0,
            },
        ],
    },
    {
        id: "question_10",
        question: "Which of these sound like your dream Saturday? 💫",
        options: [
            {
                id: "option_1",
                option: "A fabulous brunch with friends and mimosas! 🍳🥂",
                points: 10,
            },
            {
                id: "option_2",
                option: "A chill afternoon reading a book or watching a show. 📚",
                points: 5,
            },
            {
                id: "option_3",
                option: "A spontaneous adventure to somewhere new! 🌍",
                points: 0,
            },
            {
                id: "option_4",
                option: "A quiet day in, listening to music and sipping tea. 🍵",
                points: 2,
            },
        ],
    },
];
