import toast from "react-hot-toast";

const Newsletter = () => {
     const handleSubscribe = (e) => {
    e.preventDefault();
    toast.success("Thank you for subscribing!");
  };
    return (
        <div className="text-center mt-10 mb-10">
      <h2 className="text-2xl font-bold">Subscribe</h2>

      <form onSubmit={handleSubscribe} className="mt-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="input input-bordered"
          required
        />
        {/* <button className="btn ml-2">Submit</button> */}
        <button className="btn btn-outline btn ml-2 btn-success">Submit</button>
      </form>
    </div>
    );
};

export default Newsletter;