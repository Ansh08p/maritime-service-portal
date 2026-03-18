function StatusBadge({ status }) {

  const getColor = () => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "approved":
        return "bg-green-100 text-green-700";
      case "rejected":
        return "bg-red-100 text-red-700";
      case "delivered":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <span className={`px-3 py-1 text-sm rounded-full ${getColor()}`}>
      {status}
    </span>
  );
}

export default StatusBadge;