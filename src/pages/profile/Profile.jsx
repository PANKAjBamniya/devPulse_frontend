
const Profile = () => {

    return (
        <div className="min-h-screen bg-black text-white p-6">
            <h1 className="text-2xl">Profile</h1>
            <p>Name: {user?.name}</p>
            <p>Email: {user?.email}</p>
            <img src={user?.avatar} className="w-24 rounded-full" />
        </div>
    );
};

export default Profile;
