import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
// import DashboardRouter from './DashboardRouter'
// import PublicRouter from './PublicRouter'
// import PrivateRouter from './PrivateRouter'
import OlvidarContrasena from '../pages/OlvidarContrasena'
import NotFound from '../components/notFound/NotFound'
import Login from '../pages/Login'
import PanelAdministrador from '../pages/PanelAdministrador'
import PerfilPage from '../pages/PerfilPage'
import AsitenciaPage from '../pages/AsitenciaPage'
import Calificaiones from '../components/Calificaciones/Calificaiones'


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/login" element={<Navigate to="/" />}/>
          <Route path="/olvidar-contrasena" element={<OlvidarContrasena />}/>
          <Route path="/administrador" element={<PanelAdministrador />}/>
          <Route path='/perfil' element={<PerfilPage/>}/>
          <Route path='/asistencia' element={<AsitenciaPage/>}/>
          <Route path='/calificaciones' element={<Calificaiones/>} />
          <Route path="*" element={<NotFound />} />
      </Routes>
   </BrowserRouter>
  )
}

export default AppRouter