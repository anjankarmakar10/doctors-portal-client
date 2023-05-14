import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

const Profile = () => {
  const { logOut } = useAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <Link to="/myappointment">My Appointment</Link>
      <h3 style={{ cursor: "pointer" }} onClick={handleLogOut}>
        Logout
      </h3>
    </div>
  );
};

export default Profile;
