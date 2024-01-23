import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = {
    success: (message) => toast.success(message),
    error: (message) => toast.error(message),
    warn: (message) => toast.warn(message),
};

const NotificacionesContainer = () => {
return(
    <ToastContainer
    autoClose={2000}
    theme="dark"
    />
)
};


export { Toast, NotificacionesContainer };