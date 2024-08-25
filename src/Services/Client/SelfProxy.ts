import axios from "axios";

/**
 * WHY?
 * ----------------------------------------------------------------
 * This class created for a self proxy service.
 * When you want to call a service from client side,
 * you can use this class to hide your original api endpoint.
 * 
 */

class SelfProxy {
    public static async getSelf() {
        return await axios.get('/api/self');
    }
}

export default SelfProxy;