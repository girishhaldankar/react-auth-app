const Dashboard = () => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Dashboard</h1>
        {loggedInUser?.email && (
          <p className="text-lg text-gray-600">
            You are logged in as <span className="font-semibold">{loggedInUser.email}</span>
          </p>
        )}
      </div>
    );
  };
  
  export default Dashboard;
  