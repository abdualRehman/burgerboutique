import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Router from "next/router";
import OurBranches from "../components/contact/OurBranches";
import LeaveFeedback from "../components/contact/LeaveFeedback";
const Contact = () => {
  const history = () => {
    Router.back();
  };

  return (
    <div className="min-h-screen bg-[#f4f5f5]">
      <nav className="flex border-b bg-white border-gray-200 p-5">
        <div className="cursor-pointer" onClick={history}>
          <ArrowBackOutlinedIcon />
        </div>
      </nav>
      <h3 className="p-2 mt-4 font-semibold">Our Branches</h3>
      <OurBranches />
      <h3 className="p-2 mt-4 font-semibold">Your opinion matters</h3>
      <LeaveFeedback />
    </div>
  );
};

export default Contact;
