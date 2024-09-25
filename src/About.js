import { Link } from 'react-router-dom'
import Card from './components/Card'

function AboutPage(props) {
    return (
        <Card>
            <div className='about'>
                <h1>About This Project</h1>
                <p>This is a Feedback Application</p>
                <p>Version: 1.0.0</p>

                <p>
                    <Link to='/'>Back To Home</Link>
                </p>
            </div>
        </Card>
    )
}

export default AboutPage