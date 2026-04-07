export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  category?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  difficulty: string;
  questionCount: number;
}

export const categories: Category[] = [
  {
    id: 'science',
    name: 'Science',
    icon: '🔬',
    description: 'Explore physics, chemistry, biology and more',
    difficulty: 'medium',
    questionCount: 10
  },
  {
    id: 'history',
    name: 'History',
    icon: '📜',
    description: 'Test your knowledge of world history',
    difficulty: 'medium',
    questionCount: 10
  },
  {
    id: 'geography',
    name: 'Geography',
    icon: '🌍',
    description: 'Countries, capitals, landmarks and more',
    difficulty: 'easy',
    questionCount: 10
  },
  {
    id: 'technology',
    name: 'Technology',
    icon: '💻',
    description: 'Programming, computers and digital world',
    difficulty: 'hard',
    questionCount: 10
  },
  {
    id: 'general',
    name: 'General Knowledge',
    icon: '🧠',
    description: 'A mix of everything to challenge your mind',
    difficulty: 'easy',
    questionCount: 10
  }
];

const questions: Record<string, Question[]> = {
  science: [
    {
      id: 's1',
      question: 'What is the chemical symbol for Gold?',
      options: ['Go', 'Gd', 'Au', 'Ag'],
      correctAnswer: 2,
      explanation: 'Gold\'s symbol Au comes from the Latin word "Aurum".',
      category: 'Chemistry'
    },
    {
      id: 's2',
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 1,
      explanation: 'Mars appears red due to iron oxide (rust) on its surface.',
      category: 'Astronomy'
    },
    {
      id: 's3',
      question: 'What is the speed of light in a vacuum (approximately)?',
      options: ['300,000 km/s', '150,000 km/s', '450,000 km/s', '1,000,000 km/s'],
      correctAnswer: 0,
      explanation: 'The speed of light in a vacuum is approximately 299,792 km/s.',
      category: 'Physics'
    },
    {
      id: 's4',
      question: 'What is the powerhouse of the cell?',
      options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Golgi Apparatus'],
      correctAnswer: 2,
      explanation: 'Mitochondria produce ATP, the energy currency of the cell.',
      category: 'Biology'
    },
    {
      id: 's5',
      question: 'How many bones are in the adult human body?',
      options: ['196', '206', '216', '226'],
      correctAnswer: 1,
      explanation: 'An adult human body has 206 bones.',
      category: 'Biology'
    },
    {
      id: 's6',
      question: 'What gas do plants absorb during photosynthesis?',
      options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
      correctAnswer: 2,
      explanation: 'Plants absorb CO2 and release oxygen during photosynthesis.',
      category: 'Biology'
    },
    {
      id: 's7',
      question: 'What is the atomic number of Carbon?',
      options: ['4', '6', '8', '12'],
      correctAnswer: 1,
      explanation: 'Carbon has 6 protons, giving it an atomic number of 6.',
      category: 'Chemistry'
    },
    {
      id: 's8',
      question: 'Which force keeps planets in orbit around the Sun?',
      options: ['Magnetic force', 'Nuclear force', 'Gravitational force', 'Electromagnetic force'],
      correctAnswer: 2,
      explanation: 'Gravity is responsible for keeping planets in their orbital paths.',
      category: 'Physics'
    },
    {
      id: 's9',
      question: 'What is the most abundant gas in Earth\'s atmosphere?',
      options: ['Oxygen', 'Carbon Dioxide', 'Argon', 'Nitrogen'],
      correctAnswer: 3,
      explanation: 'Nitrogen makes up about 78% of Earth\'s atmosphere.',
      category: 'Earth Science'
    },
    {
      id: 's10',
      question: 'What is the unit of electrical resistance?',
      options: ['Volt', 'Ampere', 'Ohm', 'Watt'],
      correctAnswer: 2,
      explanation: 'Resistance is measured in Ohms, named after Georg Simon Ohm.',
      category: 'Physics'
    }
  ],
  history: [
    {
      id: 'h1',
      question: 'In which year did World War II end?',
      options: ['1943', '1944', '1945', '1946'],
      correctAnswer: 2,
      explanation: 'WWII ended in 1945 with Germany surrendering in May and Japan in September.',
      category: 'World War'
    },
    {
      id: 'h2',
      question: 'Who was the first President of the United States?',
      options: ['Thomas Jefferson', 'John Adams', 'Benjamin Franklin', 'George Washington'],
      correctAnswer: 3,
      explanation: 'George Washington served as the first U.S. President from 1789 to 1797.',
      category: 'American History'
    },
    {
      id: 'h3',
      question: 'The Great Wall of China was primarily built during which dynasty?',
      options: ['Han Dynasty', 'Ming Dynasty', 'Qin Dynasty', 'Tang Dynasty'],
      correctAnswer: 1,
      explanation: 'Most of the Great Wall we see today was built during the Ming Dynasty (1368–1644).',
      category: 'Asian History'
    },
    {
      id: 'h4',
      question: 'Who painted the Mona Lisa?',
      options: ['Michelangelo', 'Raphael', 'Leonardo da Vinci', 'Caravaggio'],
      correctAnswer: 2,
      explanation: 'The Mona Lisa was painted by Leonardo da Vinci between 1503 and 1519.',
      category: 'Art History'
    },
    {
      id: 'h5',
      question: 'Which ancient wonder of the world still exists today?',
      options: ['Hanging Gardens of Babylon', 'Colossus of Rhodes', 'Great Pyramid of Giza', 'Lighthouse of Alexandria'],
      correctAnswer: 2,
      explanation: 'The Great Pyramid of Giza is the only ancient wonder still standing.',
      category: 'Ancient History'
    },
    {
      id: 'h6',
      question: 'In what year did the Berlin Wall fall?',
      options: ['1987', '1988', '1989', '1990'],
      correctAnswer: 2,
      explanation: 'The Berlin Wall fell on November 9, 1989.',
      category: 'Modern History'
    },
    {
      id: 'h7',
      question: 'Who was the first man to walk on the Moon?',
      options: ['Buzz Aldrin', 'Yuri Gagarin', 'Neil Armstrong', 'John Glenn'],
      correctAnswer: 2,
      explanation: 'Neil Armstrong became the first person to walk on the Moon on July 20, 1969.',
      category: 'Space History'
    },
    {
      id: 'h8',
      question: 'The French Revolution began in which year?',
      options: ['1776', '1789', '1799', '1804'],
      correctAnswer: 1,
      explanation: 'The French Revolution began in 1789 with the storming of the Bastille.',
      category: 'European History'
    },
    {
      id: 'h9',
      question: 'Who wrote "The Communist Manifesto"?',
      options: ['Lenin and Stalin', 'Marx and Engels', 'Rousseau and Voltaire', 'Locke and Hobbes'],
      correctAnswer: 1,
      explanation: 'Karl Marx and Friedrich Engels co-authored The Communist Manifesto in 1848.',
      category: 'Political History'
    },
    {
      id: 'h10',
      question: 'Which empire was ruled by Genghis Khan?',
      options: ['Ottoman Empire', 'Roman Empire', 'Mongol Empire', 'Persian Empire'],
      correctAnswer: 2,
      explanation: 'Genghis Khan founded and ruled the Mongol Empire, the largest contiguous empire in history.',
      category: 'Asian History'
    }
  ],
  geography: [
    {
      id: 'g1',
      question: 'What is the capital of Australia?',
      options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
      correctAnswer: 2,
      explanation: 'Canberra is the capital city of Australia, not Sydney as many people think.',
      category: 'Capitals'
    },
    {
      id: 'g2',
      question: 'Which is the longest river in the world?',
      options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'],
      correctAnswer: 1,
      explanation: 'The Nile River in Africa is generally considered the world\'s longest at ~6,650 km.',
      category: 'Rivers'
    },
    {
      id: 'g3',
      question: 'Which country has the largest population?',
      options: ['India', 'USA', 'China', 'Russia'],
      correctAnswer: 0,
      explanation: 'India surpassed China in 2023 to become the world\'s most populous country.',
      category: 'Demographics'
    },
    {
      id: 'g4',
      question: 'What is the smallest country in the world?',
      options: ['Monaco', 'San Marino', 'Vatican City', 'Liechtenstein'],
      correctAnswer: 2,
      explanation: 'Vatican City, at about 44 hectares, is the smallest country in the world.',
      category: 'Countries'
    },
    {
      id: 'g5',
      question: 'Which continent is the largest by area?',
      options: ['North America', 'Africa', 'Asia', 'Europe'],
      correctAnswer: 2,
      explanation: 'Asia is the largest continent, covering about 30% of Earth\'s total land area.',
      category: 'Continents'
    },
    {
      id: 'g6',
      question: 'What is the capital of Canada?',
      options: ['Toronto', 'Vancouver', 'Montreal', 'Ottawa'],
      correctAnswer: 3,
      explanation: 'Ottawa is the capital of Canada, located in Ontario.',
      category: 'Capitals'
    },
    {
      id: 'g7',
      question: 'The Amazon Rainforest is primarily located in which country?',
      options: ['Colombia', 'Peru', 'Brazil', 'Venezuela'],
      correctAnswer: 2,
      explanation: 'About 60% of the Amazon Rainforest is located in Brazil.',
      category: 'Nature'
    },
    {
      id: 'g8',
      question: 'Which mountain range separates Europe from Asia?',
      options: ['Alps', 'Carpathians', 'Himalayas', 'Ural Mountains'],
      correctAnswer: 3,
      explanation: 'The Ural Mountains traditionally form the boundary between Europe and Asia.',
      category: 'Mountains'
    },
    {
      id: 'g9',
      question: 'Which ocean is the largest?',
      options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      correctAnswer: 3,
      explanation: 'The Pacific Ocean is the largest, covering about 165 million square kilometers.',
      category: 'Oceans'
    },
    {
      id: 'g10',
      question: 'How many countries are in Africa?',
      options: ['44', '48', '54', '58'],
      correctAnswer: 2,
      explanation: 'Africa has 54 recognized sovereign countries.',
      category: 'Countries'
    }
  ],
  technology: [
    {
      id: 't1',
      question: 'What does "CPU" stand for?',
      options: ['Central Processing Unit', 'Computer Personal Unit', 'Central Program Utility', 'Core Processing Unit'],
      correctAnswer: 0,
      explanation: 'CPU stands for Central Processing Unit, the brain of a computer.',
      category: 'Hardware'
    },
    {
      id: 't2',
      question: 'What programming language was developed by James Gosling at Sun Microsystems?',
      options: ['Python', 'C++', 'Java', 'Ruby'],
      correctAnswer: 2,
      explanation: 'Java was developed by James Gosling at Sun Microsystems and released in 1995.',
      category: 'Programming'
    },
    {
      id: 't3',
      question: 'What does "HTTP" stand for?',
      options: ['HyperText Transfer Protocol', 'High-Tech Transfer Protocol', 'HyperText Transmission Process', 'Host Transfer Text Protocol'],
      correctAnswer: 0,
      explanation: 'HTTP stands for HyperText Transfer Protocol, the foundation of data communication on the Web.',
      category: 'Networking'
    },
    {
      id: 't4',
      question: 'Which company created the React JavaScript library?',
      options: ['Google', 'Microsoft', 'Apple', 'Meta (Facebook)'],
      correctAnswer: 3,
      explanation: 'React was created by Jordan Walke at Facebook (now Meta) and open-sourced in 2013.',
      category: 'Web Development'
    },
    {
      id: 't5',
      question: 'What does "RAM" stand for?',
      options: ['Read Access Memory', 'Random Access Memory', 'Rapid Access Memory', 'Reliable Array Memory'],
      correctAnswer: 1,
      explanation: 'RAM stands for Random Access Memory, the short-term memory of a computer.',
      category: 'Hardware'
    },
    {
      id: 't6',
      question: 'What is the binary representation of the decimal number 10?',
      options: ['1001', '1010', '1100', '0110'],
      correctAnswer: 1,
      explanation: '10 in binary is 1010 (8+2=10).',
      category: 'Computer Science'
    },
    {
      id: 't7',
      question: 'Which sorting algorithm has an average time complexity of O(n log n)?',
      options: ['Bubble Sort', 'Selection Sort', 'Insertion Sort', 'Merge Sort'],
      correctAnswer: 3,
      explanation: 'Merge Sort consistently achieves O(n log n) time complexity in average and worst cases.',
      category: 'Algorithms'
    },
    {
      id: 't8',
      question: 'What does "API" stand for?',
      options: ['Application Programming Interface', 'Applied Program Integration', 'Automated Protocol Interface', 'Application Process Integration'],
      correctAnswer: 0,
      explanation: 'API stands for Application Programming Interface.',
      category: 'Software'
    },
    {
      id: 't9',
      question: 'Which data structure uses LIFO (Last In, First Out) order?',
      options: ['Queue', 'Array', 'Stack', 'Linked List'],
      correctAnswer: 2,
      explanation: 'A Stack follows LIFO — the last item pushed is the first to be popped.',
      category: 'Data Structures'
    },
    {
      id: 't10',
      question: 'What does "SQL" stand for?',
      options: ['Structured Query Language', 'Simple Query Language', 'Standard Query Logic', 'Sequential Query Lookup'],
      correctAnswer: 0,
      explanation: 'SQL stands for Structured Query Language, used for managing relational databases.',
      category: 'Databases'
    }
  ],
  general: [
    {
      id: 'gk1',
      question: 'How many sides does a hexagon have?',
      options: ['5', '6', '7', '8'],
      correctAnswer: 1,
      explanation: 'A hexagon has 6 sides.',
      category: 'Mathematics'
    },
    {
      id: 'gk2',
      question: 'Who wrote the play "Hamlet"?',
      options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Oscar Wilde'],
      correctAnswer: 1,
      explanation: 'Hamlet was written by William Shakespeare around 1600.',
      category: 'Literature'
    },
    {
      id: 'gk3',
      question: 'What is the largest organ in the human body?',
      options: ['Heart', 'Liver', 'Brain', 'Skin'],
      correctAnswer: 3,
      explanation: 'The skin is the largest organ, covering the entire outside of the body.',
      category: 'Human Body'
    },
    {
      id: 'gk4',
      question: 'In which sport would you perform a "slam dunk"?',
      options: ['Volleyball', 'Tennis', 'Basketball', 'Baseball'],
      correctAnswer: 2,
      explanation: 'A slam dunk is a basketball shot where the player jumps and scores directly through the hoop.',
      category: 'Sports'
    },
    {
      id: 'gk5',
      question: 'What is the most widely spoken language in the world?',
      options: ['Spanish', 'English', 'Mandarin Chinese', 'Hindi'],
      correctAnswer: 2,
      explanation: 'Mandarin Chinese has the most native speakers of any language in the world.',
      category: 'Languages'
    },
    {
      id: 'gk6',
      question: 'How many strings does a standard guitar have?',
      options: ['4', '5', '6', '7'],
      correctAnswer: 2,
      explanation: 'A standard guitar has 6 strings.',
      category: 'Music'
    },
    {
      id: 'gk7',
      question: 'What is the currency of Japan?',
      options: ['Yuan', 'Won', 'Yen', 'Ringgit'],
      correctAnswer: 2,
      explanation: 'The Japanese Yen (¥) is the official currency of Japan.',
      category: 'Economy'
    },
    {
      id: 'gk8',
      question: 'Which element has the chemical symbol "O"?',
      options: ['Gold', 'Osmium', 'Oxygen', 'Oganesson'],
      correctAnswer: 2,
      explanation: 'Oxygen has the chemical symbol O and atomic number 8.',
      category: 'Science'
    },
    {
      id: 'gk9',
      question: 'How many players are on a standard soccer team?',
      options: ['9', '10', '11', '12'],
      correctAnswer: 2,
      explanation: 'A standard soccer team has 11 players on the field.',
      category: 'Sports'
    },
    {
      id: 'gk10',
      question: 'What is the smallest planet in our solar system?',
      options: ['Mars', 'Venus', 'Mercury', 'Pluto'],
      correctAnswer: 2,
      explanation: 'Mercury is the smallest planet in our solar system (Pluto is a dwarf planet).',
      category: 'Astronomy'
    }
  ]
};

export function getQuestionsByCategory(categoryId: string): Question[] {
  return questions[categoryId] ?? [];
}
