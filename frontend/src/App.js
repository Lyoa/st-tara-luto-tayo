import UserList from './dashboards/UserList'
import SignUp from './authentication/SignUp'
import Splash from './pages/Splash'

function App() {
    return (
        <div>
            Dashboard
            <UserList />
            <SignUp />
            <Splash />
        </div>
    )
}

export default App
