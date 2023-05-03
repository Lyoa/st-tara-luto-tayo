import Splash from '../pages/Splash'
import Landing from '../pages/Landing'
import Recipes from '../pages/Recipes'
import ContactUs from '../pages/ContactUs'
import Categories from '../pages/Categories'

function Dashboard() {
    return (
        <div>
            <Splash />
            <Landing />
            <Categories />
            <Recipes />
            <ContactUs />
        </div>
    )
}

export default Dashboard
