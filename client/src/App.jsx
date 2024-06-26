import { Route, Routes } from 'react-router-dom'
import { Home, ExerciseDetail, NotFound } from './pages'
import { Navbar, Footer } from './components'

function App() {
    return (
        <main className="relative">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exercise" element={<ExerciseDetail exercises={exercises}/>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </main>
    )
}

export default App

const exercises = [
        {
            bodyPart: 'back',
            equipment: 'cable',
            gifUrl: 'https://v2.exercisedb.io/image/I4XMjCBFhqaGoJ',
            id: '0007',
            name: 'alternate lateral pulldown',
            target: 'lats',
            secondaryMuscles: ['biceps', 'rhomboids'],
            instructions: [
                'Sit on the cable machine with your back straight and feet flat on the ground.',
                'Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.',
                'Lean back slightly and pull the handles towards your chest, squeezing your shoulder blades together.',
                'Pause for a moment at the peak of the movement, then slowly release the handles back to the starting position.',
                'Repeat for the desired number of repetitions.',
            ],
        },
        {
            bodyPart: 'back',
            equipment: 'body weight',
            gifUrl: 'https://v2.exercisedb.io/image/IhSIJPWFEJU76Q',
            id: '3293',
            name: 'archer pull up',
            target: 'lats',
            secondaryMuscles: ['biceps', 'forearms'],
            instructions: [
                'Start by hanging from a pull-up bar with an overhand grip, slightly wider than shoulder-width apart.',
                'Engage your core and pull your shoulder blades down and back.',
                'As you pull yourself up, bend one arm and bring your elbow towards your side, while keeping the other arm straight.',
                'Continue pulling until your chin is above the bar and your bent arm is fully flexed.',
                'Lower yourself back down with control, straightening the bent arm and repeating the movement on the other side.',
                'Alternate sides with each repetition.',
            ],
        },
        {
            bodyPart: 'back',
            equipment: 'leverage machine',
            gifUrl: 'https://v2.exercisedb.io/image/Js4jXbAEKYW8jz',
            id: '0015',
            name: 'assisted parallel close grip pull-up',
            target: 'lats',
            secondaryMuscles: ['biceps', 'forearms'],
            instructions: [
                'Adjust the machine to your desired weight and height.',
                'Place your hands on the parallel bars with a close grip, palms facing each other.',
                'Hang from the bars with your arms fully extended and your feet off the ground.',
                'Engage your back muscles and pull your body up towards the bars, keeping your elbows close to your body.',
                'Continue pulling until your chin is above the bars.',
                'Pause for a moment at the top, then slowly lower your body back down to the starting position.',
                'Repeat for the desired number of repetitions.',
            ],
        },
        {
            bodyPart: 'back',
            equipment: 'leverage machine',
            gifUrl: 'https://v2.exercisedb.io/image/zJzZxwHW1MBBi4',
            id: '0017',
            name: 'assisted pull-up',
            target: 'lats',
            secondaryMuscles: ['biceps', 'forearms'],
            instructions: [
                'Adjust the machine to your desired weight and height settings.',
                'Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.',
                'Hang with your arms fully extended and your feet off the ground.',
                'Engage your back muscles and pull your body up towards the handles, keeping your elbows close to your body.',
                'Continue pulling until your chin is above the handles.',
                'Pause for a moment at the top, then slowly lower your body back down to the starting position.',
                'Repeat for the desired number of repetitions.',
            ],
        },
    ]
