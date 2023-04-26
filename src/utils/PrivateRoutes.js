import { Outlet, Navigate} from 'react-router-dom'
import Cookies from 'js-cookie';


const PrivateRoutes = () => {
    let auth = {'token': Cookies.get('token')}
    return (
        auth.token ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoutes