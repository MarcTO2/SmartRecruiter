import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SIGNINPAGE = () => {
  const navigate = useNavigate();

  const onSUBMITTextClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  return (
    <div className="relative rounded-3xs w-full h-[1028px] overflow-hidden bg-[url('/public/sign-in-page@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-5xl text-lightgoldenrodyellow font-inter">
      <div className="absolute top-[76px] left-[58px] font-medium inline-block w-[360px] h-[29px]">
        <span>SMART</span>
        <span className="text-white">{` `}</span>
        <span className="text-deepskyblue">RECRUITER</span>
      </div>
      <div className="absolute top-[76px] left-[1239px] font-medium inline-block w-[106px] h-[21px]">
        <p className="m-0">SIGN IN</p>
      </div>
      <div className="absolute top-[326px] left-[285px] box-border w-[904px] h-[497px] overflow-hidden text-xl font-quicksand border-[2px] border-solid border-lightgoldenrodyellow">
        <div className="absolute top-[157px] left-[130px] bg-white box-border w-[702px] h-[57px] border-[2px] border-solid border-deepskyblue" />
        <div className="absolute top-[290px] left-[130px] bg-white box-border w-[702px] h-[57px] border-[2px] border-solid border-deepskyblue" />
        <div className="absolute top-[24px] left-[32px] font-medium">
          Please Sign In
        </div>
        <div className="absolute top-[120px] left-[132px] font-medium text-deepskyblue">
          Username
        </div>
        <div className="absolute top-[249px] left-[132px] font-medium text-deepskyblue">
          Password
        </div>
        <div className="absolute top-[389px] left-[134px] font-medium">{`Dont have an account?Please `}</div>
        <div className="absolute top-[389px] left-[417px] font-medium inline-block w-32 h-[15px]">
          Sign Up
        </div>
        <div className="absolute top-[435px] left-[365px] rounded-3xs bg-white box-border w-[196px] h-[41px] border-[2px] border-solid border-deepskyblue" />
        <div
          className="absolute top-[444px] left-[424px] font-semibold font-inter text-cornflowerblue cursor-pointer"
          onClick={onSUBMITTextClick}
        >
          SUBMIT
        </div>
      </div>
    </div>
  );
};

export default SIGNINPAGE;
