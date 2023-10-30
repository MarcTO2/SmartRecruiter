import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SIGNUPPAGE = () => {
  const navigate = useNavigate();

  const onSUBMITTextClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  return (
    <div className="relative rounded-3xs w-full h-[1028px] overflow-hidden bg-[url('/public/sign-up-page@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-5xl text-lightgoldenrodyellow font-inter">
      <div className="absolute top-[76px] left-[58px] font-medium inline-block w-[360px] h-[29px]">
        <span>SMART</span>
        <span className="text-white">{` `}</span>
        <span className="text-deepskyblue">RECRUITER</span>
      </div>
      <div className="absolute top-[76px] left-[1239px] font-medium inline-block w-[106px] h-[21px]">
        <p className="m-0">SIGN UP</p>
      </div>
      <div className="absolute top-[324px] left-[283px] box-border w-[908px] h-[566px] overflow-hidden text-xl text-deepskyblue font-quicksand border-[2px] border-solid border-lightgoldenrodyellow">
        <div className="absolute top-[142px] left-[124px] bg-white box-border w-[702px] h-[57px] border-[2px] border-solid border-mediumslateblue" />
        <div className="absolute top-[259px] left-[124px] bg-white box-border w-[702px] h-[57px] border-[2px] border-solid border-mediumslateblue" />
        <div className="absolute top-[376px] left-[124px] bg-white box-border w-[702px] h-[57px] border-[2px] border-solid border-mediumslateblue" />
        <div className="absolute top-[345px] left-[127px] font-medium">
          Confirm Password
        </div>
        <div className="absolute top-[24px] left-[32px] font-medium text-lightgoldenrodyellow">
          Please Sign Up
        </div>
        <div className="absolute top-[97px] left-[126px] font-medium">
          Username
        </div>
        <div className="absolute top-[229px] left-[129px] font-medium">
          Password
        </div>
        <div className="absolute top-[482px] left-[355px] rounded-3xs bg-white box-border w-[204px] h-[42px] border-[2px] border-solid border-mediumslateblue" />
        <div
          className="absolute top-[491px] left-[406px] font-semibold font-inter text-cornflowerblue cursor-pointer"
          onClick={onSUBMITTextClick}
        >
          SUBMIT
        </div>
      </div>
    </div>
  );
};

export default SIGNUPPAGE;
