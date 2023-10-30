import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const HOMEPAGE = () => {
  const navigate = useNavigate();

  const onAssessmentsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative rounded-3xs w-full h-[1083px] overflow-hidden bg-[url('/public/home-page@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-5xl text-deepskyblue font-inter">
      <div className="absolute top-[47px] left-[58px] font-medium inline-block w-[360px] h-[29px] text-white">
        <span>{`SMART `}</span>
        <span className="text-dodgerblue">RECRUITER</span>
      </div>
      <div className="absolute top-[47px] left-[58px] font-medium inline-block w-[360px] h-[29px] text-white">
        <span>{`SMART `}</span>
        <span className="text-dodgerblue">RECRUITER</span>
      </div>
      <div className="absolute top-[47px] left-[58px] font-medium inline-block w-[360px] h-[29px] text-lightgoldenrodyellow">
        <span>SMART</span>
        <span className="text-white">{` `}</span>
        <span className="text-dodgerblue">RECRUITER</span>
      </div>
      <div className="absolute top-[47px] left-[58px] font-medium inline-block w-[360px] h-[29px] text-lightgoldenrodyellow">
        <span>SMART</span>
        <span className="text-white">{` `}</span>
        <span className="text-deepskyblue">RECRUITER</span>
      </div>
      <div className="absolute top-[47px] left-[888px] font-medium text-lightgoldenrodyellow inline-block w-[106px] h-[21px]">
        HOME
      </div>
      <div className="absolute top-[47px] left-[888px] font-semibold inline-block w-[106px] h-[21px]">
        HOME
      </div>
      <div className="absolute top-[47px] left-[1097px] font-medium text-lightgoldenrodyellow inline-block w-[106px] h-[21px]">
        ABOUT
      </div>
      <div className="absolute top-[47px] left-[1271px] font-medium text-lightgoldenrodyellow inline-block w-[106px] h-[21px]">
        <p className="m-0">PROFILE</p>
      </div>
      <div className="absolute top-[183px] left-[64px] rounded-xl bg-darkslategray box-border w-[347px] h-[740px] border-[2px] border-solid border-lightgoldenrodyellow" />
      <div
        className="absolute top-[270px] left-[105px] text-xl font-semibold inline-block w-[234px] h-[29px] cursor-pointer"
        onClick={onAssessmentsTextClick}
      >
        Assessments
      </div>
      <div className="absolute top-[370px] left-[105px] text-xl font-semibold inline-block w-[234px] h-[29px]">
        Reviews
      </div>
      <div className="absolute top-[461px] left-[105px] text-xl font-semibold inline-block w-[234px] h-[29px]">
        Interviewees
      </div>
      <div className="absolute top-[183px] left-[477px] rounded-3xs bg-darkslategray box-border w-[911px] h-[740px] border-[2px] border-solid border-lightgoldenrodyellow" />
      <b className="absolute top-[557px] left-[573px] text-[96px] font-quicksand">
        SmartRecruiter
      </b>
      <div className="absolute top-[480px] left-[744px] text-[48px] font-semibold font-josefin-sans text-tan">
        Automate with
      </div>
      <div className="absolute top-[417px] left-[598px] font-semibold">
        Tired of Hours and Hours of Face to Face Interviews?
      </div>
    </div>
  );
};

export default HOMEPAGE;
